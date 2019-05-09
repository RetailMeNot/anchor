import { css } from 'styled-components';
import { colors, fonts } from '../../theme/index';

export const CompactTheme = css`
    box-sizing: border-box;
    color: ${colors.charcoal.light};
    font-family: ${fonts.fontFamily};

    .anchor-collapse-button {
        background-color: ${colors.white.base};
        border-style: none;
        border-bottom: solid ${colors.silver.base} 1px;
        border-top: solid ${colors.silver.base} 1px;
        color: ${colors.charcoal.light};
        cursor: pointer;
        display: block;
        font-weight: bold;
        height: 3rem;
        padding: 0 1.3125rem;
        text-align: left;
        user-select: none;
        width: 100%;

        &:focus {
            outline: none;
        }

        *:last-child {
            float: right;
        }
    }

    .anchor-collapse-content {
        background-color: ${colors.silver.light} ul {
            padding: 0;
            margin: 0;
            list-style-type: none;
        }

        li a {
            display: block;
            padding-left: 3.4375rem;
            height: 2.6875rem;
            line-height: 2.6875rem;
            cursor: pointer;
            font-size: 0.875rem;
            color: #222;

            &:hover {
                background-color: rgba(0, 126, 205, 0.1);
            }
        }
    }
`;
