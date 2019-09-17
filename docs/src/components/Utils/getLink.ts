/*
Helper method that accepts a set of links from a section and based on the passed index returns
either the next or previous entry in the array. The difficult part of this is that it must ignore
sections that either are flagged with hide or have a type of title.

This method currently has no use outside of helping the NextPrevious component figure out what pages
are Next and Previous relative to where the user currently is.
*/

import { TITLE } from '../Utils';

export function getLink(links: [], currentIndex: number, direction: string) {
    const isNext = direction === 'next';
    let index: number | undefined;
    let link: object | undefined;

    if (currentIndex === 0) {
        index = isNext ?
            links.length > 0 ? 1 : undefined
            :
            undefined;
    }
    // tslint:disable-next-line: one-line
    else if (currentIndex === links.length - 1 ) {
        index = isNext ?
            undefined
            :
            links.length > 1 ? currentIndex - 1 : undefined;
    }
    // tslint:disable-next-line: one-line
    else {
        index = isNext ?
            currentIndex + 1
            :
            currentIndex - 1;
    }

    link = typeof index === 'number' ? links[index] : undefined;

    if (link !== undefined) {
        // TODO: typescript quibbles
        if ( link.type === TITLE || link.hide === true) {
            return getLink(links, index, direction);
        } else {
            return link;
        }
    } else {
        return link;
    }
}
