/*
    Renders the search box at the top of the page and loads/initializes DocSearch. Couldn't use
    Anchor's Input component since DocSearch adds its own handlers to the input.
*/

// VENDOR
import * as React from 'react';
import styled from '@xstyled/styled-components';
import Helmet from 'react-helmet';
import Script from 'react-load-script';
// ANCHOR & COMPONENTS
import { Search } from '@retailmenot/anchor';
import { SearchCSS } from './';

const StyledSearchInput = styled('div')`
    padding: 0.25rem;
    display: block;
    position: relative;
    border: base;
    border-radius: base;
    cursor: text;
    box-sizing: border-box;
    min-width: 5rem;
    width: 100%;
    margin: 0;
    height: 70%;
`;

const InnerContainer = styled('div')`
    display: flex;
    align-items: center;
    height: 100%;
`;

const SearchIcon = styled(Search)`
    margin-right: 0.5rem;
`;

const StyledInput = styled('input')`
    height: 100%;
    font-size: 0.875rem;
    box-sizing: border-box;
    border: none;
    padding: 0;
    outline: none !important;
    touch-action: manipulation;
    background-color: transparent;
    z-index: 1;
    color: text.base;
    font-family: base;
`;

/*
    Once the DocSearch external script loads, this function is called. DocSearch is attached to the
    window (unfortunately) so this ensures that it's there then initiates it.
*/
function loadDocSearch() {
    if (window && (window as any).docsearch) {
        (window as any).docsearch({
            apiKey: "38f9dd2e7cc8c05d97c1caa5c3ecb7cc", // Search-Only API Key
            indexName: "retailmenot_anchor",
            inputSelector: "#docsearch", // Have to supply a css selector for the input
            debug: true, // Keeps the dropdown up more reliably for inspecting
        });
    }
}

export const SearchInput = () => {
    const input = React.useRef<HTMLInputElement>(null);

    return (
        <StyledSearchInput
            onClick={() => input.current && input.current.focus()}
        >
            <Helmet>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css" />
            </Helmet>

            <Script
                url="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"
                onLoad={loadDocSearch}
            />

            <SearchCSS />

            <InnerContainer>
                <SearchIcon color="gray" />
                <StyledInput
                    type="text"
                    id="docsearch"
                    placeholder="Search..."
                    ref={input}
                />
            </InnerContainer>
        </StyledSearchInput>
    );
};
