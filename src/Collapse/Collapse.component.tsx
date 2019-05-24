// REACT
import * as React from 'react';
// Vendor
import classNames from 'classnames';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
// Components
import { ChevronDown, ChevronUp } from '../Icon';
import { ComfortableTheme } from './Themes/ComfortableTheme';
import { CompactTheme } from './Themes/CompactTheme';

export type Themes = 'comfortable' | 'compact' | 'none';

interface CollapseProps {
    /** Whether the component starts off open or closed. Can also be used to progrmatically open/close the component. */
    isOpen?: boolean;
    /** Text to show for the opened state of the component */
    openText?: string;
    /** Text to show for the closed state of the component */
    closeText?: string;
    /** Icon to show for the open state of the component */
    openIcon?: React.ReactElement;
    /** Icon to show for the open state of the component */
    closeIcon?: React.ReactElement;
    /** 2 possible themes, compact (doc site) and comfortable (RMN CBO), and also none to allow for styling */
    theme?: Themes;
    /** This prop is solely used by the CollapseGroup component to make Collapse components have accordion behavior */
    accordionHandler?: any;
    /** This mostly exists for CollapseGroup in order to hide the bottom border of stacked Collapse children */
    hasBottomBorder?: boolean;
    children?: any;
    className?: string;
}

interface StyledCollapseProps {
    theme?: string;
    hasBottomBorder?: boolean;
}

export const DEFAULT_OPEN_TEXT = 'Open';
export const DEFAULT_CLOSE_TEXT = 'Close';
const DEFAULT_THEME = 'comfortable';

// Associates files from Collapse/Themes directory to specific theme names
export const CollapseThemes: { [key: string]: FlattenSimpleInterpolation } = {
    comfortable: ComfortableTheme,
    compact: CompactTheme,
    none: css``,
};

const StyledCollapse = styled.div<StyledCollapseProps>`
    display: block;

    ${props => CollapseThemes[props.theme]};

    &.no-bottom-border {
        border-bottom-style: none;

        .anchor-collapse-button {
            border-bottom-style: none;
        }
    }
`;
StyledCollapse.displayName = 'StyledCollapse';

export const Collapse = ({
    isOpen = false,
    openText = DEFAULT_OPEN_TEXT,
    closeText = DEFAULT_CLOSE_TEXT,
    openIcon,
    closeIcon,
    theme = DEFAULT_THEME,
    accordionHandler,
    hasBottomBorder = true,
    className,
    children,
}: CollapseProps) => {
    const [open, toggleOpen] = React.useState<boolean>(isOpen);
    const IconOpen = openIcon || <ChevronDown />;
    const IconClosed = closeIcon || <ChevronUp />;
    // If the user provides custom openText but not custom closeText, then use openText for closeText as well
    const textClosed =
        openText !== DEFAULT_OPEN_TEXT && closeText === DEFAULT_CLOSE_TEXT
            ? openText
            : closeText;

    // Allows for the programmatic opening/closing of the Collapse w/o a user having to click it
    React.useEffect(() => {
        toggleOpen(isOpen);
    }, [isOpen]);

    return (
        <StyledCollapse
            theme={theme}
            className={classNames(
                'anchor-collapse',
                open && 'open',
                theme,
                !hasBottomBorder && 'no-bottom-border',
                className
            )}
        >
            {/** accordionHandler is used by CollapseGroup to handle closing/opening a single Collapse component. */}
            <button
                onClick={() => (accordionHandler ? accordionHandler() : toggleOpen(!open))}
                className="anchor-collapse-button"
            >
                {open ? (
                    <React.Fragment>
                        {textClosed} {IconClosed}
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        {openText} {IconOpen}
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
