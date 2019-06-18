// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { boolean, color, number } from '@storybook/addon-knobs';
// VENDOR
import styled from 'styled-components';
import { ThemeProvider } from '@xstyled/styled-components';
// COMPONENTS
import { Badge } from './Badge.component';
import { Cart } from '../Icon';
// README
import * as README from './README.md';
// THEME
import { colors, RootTheme } from '../theme';

const StyledStory = styled.div`
    padding: 2rem 5rem;
    background-color: ${colors.grapePurchase.base};
    color: ${colors.white.base};

    &:hover {
        background-color: ${colors.grapePurchase.light};
    }
`;

const { useState } = React;

const StateBasedBadgeStoryDot = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const handleOnMouseEnter = () => {
        setIsHovered(true);
    };
    const handleOnMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <ThemeProvider theme={RootTheme}>
            <StyledStory
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
            >
                <Badge
                    backgroundColor={color(
                        'Background Color',
                        colors.flashPink.base
                    )}
                    borderColor={color(
                        'Border Color',
                        colors.grapePurchase.base
                    )}
                    borderColorHover={color(
                        'Border Color on Hover',
                        colors.grapePurchase.light
                    )}
                    count={number('Count', 1)}
                    isParentHovered={isHovered}
                    offsetBottom={number('Offset Bottom in rems', 1.2)}
                    offsetLeft={number('Offset Left in rems', 0.9)}
                    showZero={boolean('Show Zero', false)}
                >
                    <Cart scale="lg" />
                </Badge>
            </StyledStory>
        </ThemeProvider>
    );
};

const StateBasedBadgeStorySmall = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const handleOnMouseEnter = () => {
        setIsHovered(true);
    };
    const handleOnMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <ThemeProvider theme={RootTheme}>
            <StyledStory
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
            >
                <Badge
                    backgroundColor={color(
                        'Background Color',
                        colors.flashPink.base
                    )}
                    borderColor={color(
                        'Border Color',
                        colors.grapePurchase.base
                    )}
                    borderColorHover={color(
                        'Border Color on Hover',
                        colors.grapePurchase.light
                    )}
                    count={number('Count', 1)}
                    isParentHovered={isHovered}
                    offsetBottom={number('Offset Bottom in rems', 1.1)}
                    offsetLeft={number('Offset Left in rems', 0.6)}
                    overflowCount={number('Overflow Count', 9)}
                    showZero={boolean('Show Zero', false)}
                    size="small"
                    textColor={color('Text Color', colors.white.base)}
                >
                    <Cart scale="lg" />
                </Badge>
            </StyledStory>
        </ThemeProvider>
    );
};

const StateBasedBadgeStoryLargeStandalone = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const handleOnMouseEnter = () => {
        setIsHovered(true);
    };
    const handleOnMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <ThemeProvider theme={RootTheme}>
            <StyledStory
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
            >
                <Badge
                    backgroundColor={color(
                        'Background Color',
                        colors.flashPink.base
                    )}
                    borderColor={color(
                        'Border Color',
                        colors.grapePurchase.base
                    )}
                    borderColorHover={color(
                        'Border Color on Hover',
                        colors.grapePurchase.light
                    )}
                    count={number('Count', 1)}
                    isParentHovered={isHovered}
                    overflowCount={number('Overflow Count', 9)}
                    showZero={boolean('Show Zero', false)}
                    size="large"
                    standalone={true}
                    textColor={color('Text Color', colors.white.base)}
                />
            </StyledStory>
        </ThemeProvider>
    );
};

storiesOf('Components/Badge', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Dot', () => <StateBasedBadgeStoryDot />)
    .add('Small', () => <StateBasedBadgeStorySmall />)
    .add('Large Standalone', () => <StateBasedBadgeStoryLargeStandalone />);
