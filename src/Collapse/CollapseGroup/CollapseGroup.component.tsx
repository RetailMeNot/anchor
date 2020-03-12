// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from '@xstyled/styled-components';
// COMPONENTS
import { CollapseVariants } from '../Collapse.component';

// Currently no styles but following the design pattern of anchor components where top-level components
// are styled components.
const StyledCollapseGroup = styled('div')<CollapseGroupProps>``;
StyledCollapseGroup.displayName = 'StyledCollapseGroup';

interface CollapseGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Whether or not the CollapseGroup acts as an accordion, i.e. only one
     * Collapse child can be open at a time.
     */
    accordion?: boolean;
    /** A zero-based index to indicate which Collapse child should be open first. Default is 0. */
    openIndex?: number;
    /** By passing a variant to the group, all Collapse children take on that variant */
    variant?: CollapseVariants;
    /** By passing an openedIcon to the group, all Collapse children use that openedIcon */
    openedIcon?: React.ReactElement;
    /** By passing a closedIcon to the group, all Collapse children use that closedIcon */
    closedIcon?: React.ReactElement;
    /** By passing removeInactive to the group, all Collapse children will receive that prop */
    removeInactive?: boolean;
    /**
     * Realistically anything can be a child of CollapseGroup, but it's rather
     * pointless as it's intended to have Collapse components as children
     */
    children?: any;
    className?: string;
}

export const CollapseGroup: React.FunctionComponent<CollapseGroupProps> = ({
    accordion = false,
    openIndex = 0,
    children,
    className,
    ...props
}: CollapseGroupProps): React.ReactElement<CollapseGroupProps> => {
    const [currentOpenIndex, setCurrentOpenIndex] = React.useState<number>(
        openIndex
    );

    return (
        <StyledCollapseGroup
            className={classNames('anchor-collapse-group', className)}
            {...props}
        >
            {/* If accordion is true, all Collapse components are cloned in order to
            control their isOpen prop. Additionally, they are cloned to apply global
            settings, like variant, to all Collapse children. */}
            {children &&
                children.map((child: any, index: number) =>
                    React.cloneElement(child, {
                        // TODO: Even if not explicitly set, this forces all child Collapse components
                        // to closed because `undefined` is falsy.  Additionally, this is overwritten
                        // if `isOpen` is explicitly set, because `...props` is spread below.
                        isOpen: accordion
                            ? index === currentOpenIndex
                            : undefined,
                        //  If accordion, use setCurrentOpenIndex as the event handler to control
                        //  accordion functionality of the Collapse child. If the currentOpenIndex
                        //  is the same as the iterator (i) that means the Collapse element is
                        //  already open, in which case currentOpenIndex gets set to 1 which ends
                        //  up returning false for all checks allowing an opened Collapse element
                        //  to be closed.
                        onClick: accordion
                            ? () =>
                                  setCurrentOpenIndex(
                                      index === currentOpenIndex ? -1 : index
                                  )
                            : undefined,
                        // No Collapse element should have a bottom border except for the last one.
                        hasBottomBorder: index === children.length - 1,
                        key: `collapse-child-${index}`,
                        ...props,
                    })
                )}
        </StyledCollapseGroup>
    );
};
