import { css } from 'styled-components';
import { colors, fonts } from '../../theme/index';

export const ComfortableTheme = css`
    box-sizing: border-box;
    font-family: ${fonts.fontFamily};
    padding: 1rem 2rem;
    border-top: solid ${colors.silver.dark} 1px;
    border-bottom: solid ${colors.silver.dark} 1px;

    .anchor-collapse-button {
        cursor: pointer;
        display: block;
        width: 100%;
        text-align: left;
        border-style: none;
        font-weight: 500;
        font-size: 0.875rem;
        padding: 0.5rem 0;
        user-select: none;

        &:focus {
            outline: none;
        }

        span:last-child {
            float: right;
        }
    }

    .anchor-collapse-content {
        font-size: 1rem;
        text-align: left;
        padding: 0.5rem 0;
    }
`;
