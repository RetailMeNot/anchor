/*
    This component leverages Algolia's search API along with their DocSearch service.
    http://anchor.retailmenot.design is scraped every 24 hours by DocSearch, and that scraped data
    is fed into an Algolia index which, for now, only I (steve.swanson@rmn.com), have direct access
    to. This component uses Algolia's API to then query that index to provide the user with results.
*/

// VENDOR
import * as React from 'react';
import * as algoliasearch from 'algoliasearch';
import debounce from 'lodash.debounce';
// ANCHOR & COMPONENTS
import { AutoComplete, Search as SearchIcon } from '@retailmenot/anchor';
import { ITEM_TYPES } from '../Utils';

const APP_ID = 'BH4D9OD16A';
const API_KEY = '38f9dd2e7cc8c05d97c1caa5c3ecb7cc';
const INDEX_NAME = 'retailmenot_anchor';
const DEBOUNCE_DELAY = 150;
const NUMBER_OF_RESULTS = 5;

type ItemType = keyof typeof ITEM_TYPES;

type AlgoliaHit = {
    anchor: string;
    content: string;
    hierarchy: object;
    url: string;
    objectID: string;
};

type DataSet = {
    label: string;
    id: string;
    url?: string;
    listItemType?: ItemType;
};

interface InitialState {
    client?: any;
    index?: object | boolean;
    dataSource?: [DataSet];
}

export class SearchInput extends React.PureComponent<InitialState> {
    readonly state = {
        client: undefined,
        index: {},
        dataSource: [],
    };

    constructor(props: object) {
        super(props);

        this.goTo = this.goTo.bind(this);

        this.searchIndex = debounce(
            this.searchIndex.bind(this),
            DEBOUNCE_DELAY
        );
    }

    componentDidMount() {
        // Initializes Algolia's API and assigns it to state
        const client = algoliasearch(APP_ID, API_KEY);
        const index = client.initIndex(INDEX_NAME);

        this.setState({
            client,
            index,
        });
    }

    // Searches the Algolia index and formats the results for the Autocomplete component
    async searchIndex(val: string) {
        const { index } = this.state;
        const dataSource: DataSet[] = [];

        /*
            Searches Algolia index for results.
            TODO: Typescript error based on the fact that index doesn't have the search property
            initially. Gating it doesn't fix the issue.
        */
        const results = await index.search({
            query: val,
            hitsPerPage: NUMBER_OF_RESULTS,
        });

        if (results) {
            // 'hits' is an Algolia term for matching results
            const { hits } = results;
            let previousSection = '';

            // TODO: This probably could be converted to use .reduce, but moving quickly
            hits.forEach((hit: AlgoliaHit) => {
                /*
                    Algolia's scraper ranks search terms/sections in a hierarchy (lvl0-lvl5) lvl0
                    is higher up in the page tree, i.e. COMPONENTS, whereas lvl5 might be a code
                    sample title. This extracts those values to make the search results for
                    Autocomplete.
                */
                const hitValues = Object.values(hit.hierarchy);
                // This is the main section of the site and will be a title not a linked result.
                const hitSection = hitValues.shift();
                // Joins the rest of the hit hierarchy values, filtering out nulls.
                const hitLabel = hitValues
                    .filter((value: string) => value !== null)
                    .join(' > ');

                /*
                    Don't want titles repeated if they're right next to each other. The order of
                    Algolia's results appear to be based on relevance, so it's possible that further
                    down the list the same title will appear.
                */
                if (hitSection !== previousSection) {
                    dataSource.push({
                        label: hitSection,
                        id: `${hit.objectID}-title`,
                        listItemType: ITEM_TYPES.title,
                    });
                }

                dataSource.push({
                    label: hitLabel,
                    id: hit.objectID,
                    url: hit.url,
                    listItemType: ITEM_TYPES.item,
                });

                previousSection = hitSection;
            });

            this.setState({ dataSource });
        }
    }

    // Using the label that was selected, uses the associated url and redirects to that page.
    goTo(value: string) {
        const result = this.state.dataSource.find((item: DataSet) => {
            return value === item.label;
        });

        if (result) {
            // TODO: TypeScript zinging me here even with a gate.
            location = result.url;
        }
    }

    render() {
        const { goTo, searchIndex } = this;
        const { dataSource } = this.state;

        return (
            <AutoComplete
                dataSource={dataSource}
                onFilter={searchIndex}
                onSelect={goTo}
                placeholder="Search"
                prefix={<SearchIcon pl="2" />}
                size="sm"
            />
        );
    }
}
