// REACT
import * as React from 'react';
// VENDOR
import styled from 'styled-components';
import classNames from 'classnames';
import { rgba } from 'polished';
// THEME
import { colors } from '../../../../../src/theme';

export const StyledNavigationBarElement = styled.nav`
    ul {
        display: flex;
        justify-content: flex-end;
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            flex: 1;
            margin: 0;
            padding: 0;
            max-width: 9rem;

            a {
                display: block;
                padding: 1.5rem 0 0;
                text-decoration: none;
                text-align: center;
                cursor: pointer;
                height: 2.4rem;
                border-bottom: solid transparent 2px;
                transition: border-bottom-color 250ms, background-color 250ms;

                &:hover {
                    border-bottom-color: ${colors.silver.dark};
                    background-color: ${rgba(colors.silver.light, 0.1)};
                }
            }
        }
    }
`;

interface NavigationBarProps {
    className?: string;
    children?: any;
}

export const NavigationBar = ({
    children,
    className,
}: NavigationBarProps): React.ReactElement<any> => (
    <StyledNavigationBarElement className={classNames(className)}>
        <ul>
            <li>
                <a>Docs</a>
            </li>
            <li>
                <a>Quick Start</a>
            </li>
            <li>
                <a>Design</a>
            </li>
            <li>
                <a>Github</a>
            </li>
        </ul>
    </StyledNavigationBarElement>
);
