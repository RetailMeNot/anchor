/*
    This component is used to render a formatted html table with API information for a given
    component.

    If a table cell is left empty it will cause a crash in Gatsby, which is why all fields are
    enforced via typescript. The exception is default, which if left out a '-' will be entered into
    the td that would be rendered.

    The passed data is sorted alphabetically by the property field, but the sorting can be disabled
    by passing false to the sort prop.

    The description field can accept strings (which can contain html tags interpreted with
    html-react-parser), a React component, or an array with a mix of both. The last option is useful
    in situations where a combination of components and custom text is needed as html-react-parser
    will end up rendering passed components as [Object, object].

    Ex:

    <ApiTable data={[
        {
            property: 'background',
            description: [
                <ColorBlurb label="DropDown" background gradient />,
                ` Note that changing this value changes both the arrow color and the background
                color of the <pre>DropDown</pre>, so using anything other than solid colors can have
                unexpected results.`
            ],
            type: 'string',
            default: 'light',
        },
        {
            property: 'color',
            description: <ColorBlurb label="Example Component" />,
            type: 'string',
            default: 'black',
        },
        {
            property: 'title',
            description: 'Title for this <pre>Component</pre>.',
            type: 'string',
        },
    ]} />
*/

// REACT
import * as React from 'react';
// VENDOR
import styled from '@xstyled/styled-components';
import parse from 'html-react-parser';
// ANCHOR & COMPONENTS
import { colors, ScreenClass } from '@retailmenot/anchor';
import { breakpoints, BreakpointsType, responsiveCSS } from '../../Utils';

interface StyledApiTableProps {
    breakpoint?: BreakpointsType;
}

const StyledApiTable = styled('section')<StyledApiTableProps>`
    ${({ breakpoint }) => responsiveCSS(breakpoint, [
        breakpoints.xs,
        breakpoints.sm,
    ])`
        overflow-x: scroll;
        white-space: nowrap;
    `}
`;

const Table = styled('table')`
    width: 100%;
    font-family: base;
    margin: 1rem 0;

    th {
        text-align: left;
        padding: 0.75rem 0.5rem;
        border-bottom: solid thin ${colors.ash.light};
        background-color: ${colors.white.base};
    }
    tr {
        &:nth-child(odd) {
            background-color: ${colors.silver.light};
        }
    }
    td {
        padding: 0.75rem 0.5rem;
        line-height: 1.5rem;

        &:first-child {
            font-family: monospace;
            color: ${colors.flashPink.dark};
            width: 10%;
        }
        &:nth-child(2) {
            width: 60%;
        }
        &:nth-child(3) {
            font-family: monospace;
            color: ${colors.cyberMango.dark};
            width: 20%;
        }
        &:nth-child(4) {
            text-align: left;
            font-family: monospace;
            width: 10%;
            white-space: nowrap;
        }

        pre {
            display: inline;
            background-color: rgba(27, 31, 35, 0.05);
            font-family: mono;
            border-radius: base;
            padding: 0.2em 0.4em;
            font-size: 0.85rem;
        }
    }
`;

interface ApiTableProps {
    data: [];
    sort?: boolean;
}

interface RowData {
    property: string;
    /* There are several utility components that could be passed as a description in addition to a
    plain string. Also an option is to pass an array of values in order to combine both plain text
    and components.  */
    description: string | [] | React.ReactElement;
    type: string;
    default?: string;
}

const sortDataAlphabetically = (a: RowData, b: RowData) => {
    const compareA = a.property.toUpperCase();
    const compareB = b.property.toUpperCase();

    return compareA < compareB ? -1 : compareA > compareB ? 1 : 0;
};

export const ApiTable = ({
    data,
    sort = true,
}: ApiTableProps): React.ReactElement<any> => {
    const sortedData = sort ? data.sort(sortDataAlphabetically) : data;

    return (
        // tslint:disable-next-line: jsx-alignment
        <ScreenClass
            render={(breakpoint: BreakpointsType) => (
                <StyledApiTable breakpoint={breakpoint}>
                    <Table>
                        <thead>
                            <tr>
                                <th>Property</th>
                                <th>Description</th>
                                <th>Type</th>
                                <th>Default</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedData &&
                                sortedData.map(
                                    (
                                        rowData: RowData
                                    ): React.ReactElement<any> => (
                                        <tr key={`key-${rowData.property}`}>
                                            <td>{rowData.property}</td>
                                            <td>
                                                {Array.isArray(
                                                    rowData.description
                                                )
                                                    ? rowData.description.map(
                                                          (description, i) => (
                                                              <React.Fragment
                                                                  key={`key-${i}`}
                                                              >
                                                                  {typeof description ===
                                                                  'string'
                                                                      ? parse(
                                                                            description
                                                                        )
                                                                      : description}
                                                              </React.Fragment>
                                                          )
                                                      )
                                                    : typeof rowData.description ===
                                                      'string'
                                                    ? parse(rowData.description)
                                                    : rowData.description}
                                            </td>
                                            <td>
                                                {typeof rowData.type ===
                                                'string'
                                                    ? parse(rowData.type)
                                                    : rowData.type}
                                            </td>
                                            <td>
                                                {rowData.default
                                                    ? typeof rowData.default ===
                                                      'string'
                                                        ? parse(rowData.default)
                                                        : rowData.default
                                                    : '-'}
                                            </td>
                                        </tr>
                                    )
                                )}
                        </tbody>
                    </Table>
                </StyledApiTable>
            )}
        />
    );
};
