// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
// COMPONENTS
import { Themes } from '../Collapse.component';

// Currently no styles but following the design pattern of anchor components where top-level components
// are styled components.
const StyledCollapseGroup = styled.div``;
StyledCollapseGroup.displayName = 'StyledCollapseGroup';

interface CollapseGroupProps {
    /** Whether or not the CollapseGroup acts as an accordion, i.e. only one Collapse child can be open at a time. */
    accordion?: boolean;
    /** A zero-based index to indicate which Collapse child should be open first. Default is 0. */
    openIndex?: number;
    /** By passing a theme to the group, all Collapse children take on that theme */
    theme?: Themes;
    /** By passing an openIcon to the group, all Collapse children use that openIcon */
    openIcon?: React.ReactElement;
    /** By passing a closeIcon to the group, all Collapse children use that closeIcon */
    closeIcon?: React.ReactElement;
    // tslint:disable-next-line: max-line-length
    /** Realistically anything can be a child of CollapseGroup, but it's rather pointless as it's intended to have Collapse components as children */
    children?: any;
    className?: string;
}

export const CollapseGroup = ({
    accordion = false,
    openIndex = 0,
    theme,
    openIcon,
    closeIcon,
    children,
    className,
}: CollapseGroupProps) => {
    const [_openIndex, setOpenIndex] = React.useState<number>(openIndex);

    return (
        <StyledCollapseGroup
            className={classNames('anchor-collapse-group', className)}
        >
            {
                // tslint:disable-next-line: max-line-length
                /** If accordion is true, all Collapse components are cloned in order to control their isOpen prop vis accordionHandler.
                 *  Additionally, they are cloned to apply global settings, like theme, to all Collapse children.
                 */
            }
            {children &&
                  children.map((child: any, i: number) => {
                      return React.cloneElement(child, {
                          isOpen: accordion ? i === _openIndex : undefined,

                          // If accordion, use setOpenIndex as the event handler to control accordion functionality
                          // of the Collapse child. If the _openIndex is the same as the iterator (i) that means
                          // the Collapse element is already open, in which case _openIndex gets set to -1 which ends up
                          // returning false for all checks allowing an opened Collapse element to be closed.
                          accordionHandler: accordion ? () => setOpenIndex(i === _openIndex ? -1 : i) : undefined,

                          theme: theme,
                          openIcon: openIcon,
                          closeIcon: closeIcon,

                          // No Collapse element should have a bottom border except for the last one.
                          hasBottomBorder: i === children.length - 1,

                          key: `collapse-child-${i}`,
                      });
                  })
            }
        </StyledCollapseGroup>
    );
};
