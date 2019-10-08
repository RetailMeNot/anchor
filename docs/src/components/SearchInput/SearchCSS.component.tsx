/*
    DocSearch's search service, while awesome, isn't the greatest at customizing its look. This
    contains CSS overrides for its default styles.
*/

// VENDOR
import { createGlobalStyle } from '@xstyled/styled-components';

export const SearchCSS = createGlobalStyle`
    .algolia-autocomplete {
        font-family: base;

        // Positions the search results dropdown to be more inline with our search box
        &.algolia-autocomplete-left .ds-dropdown-menu {
            left: -1.8rem !important;
            top: 150% !important;
        }

        // Sets the background highlight color
        .ds-dropdown-menu .ds-suggestion.ds-cursor .algolia-docsearch-suggestion.suggestion-layout-simple,
        .ds-dropdown-menu .ds-suggestion.ds-cursor .algolia-docsearch-suggestion:not(.suggestion-layout-simple) .algolia-docsearch-suggestion--content,
        .algolia-docsearch-suggestion--highlight {
            background-color: accent.base;
        }

        // Hides the Search by Algolia footer. We pay for Algolia so it's legit.
        .algolia-docsearch-footer {
            display: none;
        }
    }
`;
