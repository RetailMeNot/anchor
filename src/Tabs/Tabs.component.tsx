// VENDOR
import * as React from 'react';
import classNames from 'classnames';
import styled, { css } from '@xstyled/styled-components';
import { th, space as spaceStyles, SpaceProps } from '@xstyled/system';
// ANCHOR
import { cloneWithProps } from '../utils/cloneWithProps/cloneWithProps';
import { Position, Variant, variantStyles } from './utils';
import { Tab } from './Tab';
import { Pane } from './Pane';

type TabKey = string | number;

interface TabsProps extends React.HTMLAttributes<HTMLDivElement>, SpaceProps {
    className?: string;

    background?: string;

    variant?: Variant;
    position?: Position;
    activeKey?: TabKey;
    defaultActiveKey?: TabKey;
    spacing?: string;
}

interface TabHeaderProps {
    position?: Position;
    variant?: Variant;
    offset?: string;
}

const TabHeaderWrapper = styled('div')<TabHeaderProps>`
    ${({ position }) =>
        css({
            borderBottom: position === 'top' ? 'light' : undefined,
            borderTop: position === 'bottom' ? 'light' : undefined,
            borderLeft: position === 'right' ? 'light' : undefined,
            borderRight: position === 'left' ? 'light' : undefined,
        })}
`;

const TabHeader = styled('div')<TabHeaderProps>`
    display: flex;
    white-space: nowrap;

    ${({ position }) =>
        ({
            left: css({
                flexDirection: 'column',
            }),
            top: css({
                flexDirection: 'row',
                overflowX: 'auto',
            }),
            bottom: css({
                flexDirection: 'row',
                overflowX: 'auto',
            }),
            right: css({
                flexDirection: 'column',
            }),
        }[position || 'top'])}

    ${props => variantStyles(props).header}
`;

const StyledTabs = styled('div')<TabsProps>`
    display: flex;
    ${spaceStyles}
    ${({ position }) =>
        ({
            left: css({ flexDirection: 'row' }),
            top: css({ flexDirection: 'column' }),
            bottom: css({ flexDirection: 'column-reverse' }),
            right: css({ flexDirection: 'row-reverse' }),
        }[position || 'top'])}

    ${props => variantStyles(props).base}

    ${({ background }) =>
        css({
            background: th.color(background),
        })}
`;

export const Tabs = ({
    className,
    children,
    position = 'top',
    variant = 'regular',
    activeKey,
    defaultActiveKey,
    spacing,
    onChange,
    ...props
}: TabsProps): React.ReactElement<TabsProps> => {
    let tabInfo: Array<{
        title: any;
        key: any;
        disabled?: boolean;
        active?: boolean;
    }> = [];
    React.Children.forEach(children, (child, index) => {
        if (!child || !React.isValidElement(child)) {
            return;
        }

        const { title, disabled } = child.props;
        tabInfo.push({ title, key: child.key || index, disabled });
    });

    const initialTab =
        defaultActiveKey || defaultActiveKey === 0
            ? defaultActiveKey
            : tabInfo[0] && tabInfo[0].key;
    const [stateCurrent, setCurrent] = React.useState(initialTab);

    const current = activeKey || activeKey === 0 ? activeKey : stateCurrent;

    tabInfo = tabInfo.map(info => ({
        ...info,
        active: info.key === current,
    }));

    return (
        <StyledTabs
            className={classNames('anchor-tabs', className)}
            position={position}
            variant={variant}
            {...props}
        >
            <TabHeaderWrapper variant={variant} position={position}>
                <TabHeader
                    className="anchor-tabs-header"
                    position={position}
                    variant={variant}
                >
                    {tabInfo.map(({ title, key, disabled, active }: any) => (
                        <Tab
                            key={key}
                            position={position}
                            disabled={disabled}
                            active={active}
                            variant={variant}
                            onClick={() => {
                                setCurrent(key);
                                if (onChange) {
                                    onChange(key);
                                }
                            }}
                            spacing={spacing}
                        >
                            {title}
                        </Tab>
                    ))}
                </TabHeader>
            </TabHeaderWrapper>

            {React.Children.map(children, (child, index) =>
                cloneWithProps(child, {
                    active: tabInfo[index].active,
                    className: [
                        'anchor-tabs-panel',
                        tabInfo[index].active && 'active',
                    ],
                })
            )}
        </StyledTabs>
    );
};

Tabs.Pane = Pane;
