// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { css } from '@xstyled/styled-components';
import { variant as createVariant, th } from '@xstyled/system';
// Components
import { ChevronDown, ChevronUp } from '../Icon';

export type CollapseVariants = 'comfortable' | 'compact' | 'none' | string;

interface CollapseProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Whether the component starts off open or closed. Can also be used to programmatically open/close the
     * component.
     */
    isOpen?: boolean;
    /** Text to show for the opened state of the component */
    openedText?: string;
    /** Text to show for the closed state of the component */
    closedText?: string;
    /** Icon to show for the opened state of the component */
    openedIcon?: React.ReactElement;
    /** Icon to show for the closed state of the component */
    closedIcon?: React.ReactElement;
    /** 2 possible variants, compact (doc site) and comfortable (RMN CBO), and also none to allow for styling */
    variant?: CollapseVariants;
    /** This prop is solely used by the CollapseGroup component to make Collapse components have accordion behavior */
    onClick?: any;
    /** This mostly exists for CollapseGroup in order to hide the bottom border of stacked Collapse children */
    hasBottomBorder?: boolean;
    children?: any;
    className?: string;
}

interface StyledCollapseProps extends CollapseProps {
    variant?: string;
    hasBottomBorder?: boolean;
}

export const DEFAULT_OPENED_TEXT = 'Close';
export const DEFAULT_CLOSED_TEXT = 'Open';
const DEFAULT_VARIANT = 'comfortable';

const variants = {
    comfortable: css`
        padding: 1rem 2rem;
        border-top: solid thin ${th.color('borders.base')};
        border-bottom: solid thin ${th.color('borders.base')};

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
    `,
    compact: css`
        color: neutrals.charcoal.light;

        .anchor-collapse-button {
            background-color: neutrals.white.base;
            border-style: none;
            border-bottom: solid thin ${th.color('borders.light')};
            border-top: solid thin ${th.color('borders.light')};
            color: neutrals.charcoal.light;
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
            background-color: neutrals.silver.light;

            ul {
                padding: 0;
                margin: 0;
                list-style-type: none;
            }
            // TODO: we shouldn't be using as many fragile nested selectors and we should be using Typography
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
    `,
    none: css({}),
};

const variantStyles = createVariant({
    key: 'collapse.variants',
    prop: 'variant',
    default: DEFAULT_VARIANT,
    variants: variants,
});

const StyledCollapse = styled('div')<StyledCollapseProps>`
    display: block;
    box-sizing: border-box;
    font-family: base;

    ${variantStyles}

    &.no-bottom-border {
        border-bottom-style: none;

        .anchor-collapse-button {
            border-bottom-style: none;
        }
    }
`;
StyledCollapse.displayName = 'StyledCollapse';

export const Collapse: React.FunctionComponent<CollapseProps> = ({
    isOpen = false,
    openedText = DEFAULT_OPENED_TEXT,
    closedText = DEFAULT_CLOSED_TEXT,
    openedIcon,
    closedIcon,
    variant = DEFAULT_VARIANT,
    onClick,
    hasBottomBorder = true,
    className,
    children,
    ...props
}: CollapseProps): React.ReactElement<CollapseProps> => {
    const [open, toggleOpen] = React.useState<boolean>(isOpen);
    const IconOpened = openedIcon || <ChevronDown />;
    const IconClosed = closedIcon || <ChevronUp />;

    // If the user provides custom openedText but not custom closedText
    // then use openedText for closedText as well
    const textClosed =
        openedText !== DEFAULT_OPENED_TEXT && closedText === DEFAULT_CLOSED_TEXT
            ? openedText
            : closedText;

    // Allows for the programmatic opening/closing of the Collapse
    // without a user having to click it
    React.useEffect(() => {
        toggleOpen(isOpen);
    }, [isOpen]);

    return (
        <StyledCollapse
            variant={variant}
            className={classNames(
                'anchor-collapse',
                open && 'open',
                variant,
                !hasBottomBorder && 'no-bottom-border',
                className
            )}
            {...props}
        >
            <button
                onClick={onClick || (() => toggleOpen(!open))}
                className="anchor-collapse-button"
            >
                {open ? (
                    <React.Fragment>
                        {openedText} {IconOpened}
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        {textClosed} {IconClosed}
                    </React.Fragment>
                )}
            </button>

            {open && (
                <section className="anchor-collapse-content">
                    {children}
                </section>
            )}
        </StyledCollapse>
    );
};
