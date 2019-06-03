// REACT
import React, { useState } from 'react';
// VENDOR
import styled from 'styled-components';
import { ColorHelpers } from '../ColorHelpers';
import { Pill } from '../Pill';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Typography } from '../../../../src/Typography';
// THEME
import { colors } from '../../../../src/theme';

// INTERFACES
interface ColorSwatchProps {
    colorHexCode: string;
    colorName: string;
}

// STYLES
const StyledColorSwatch = styled.div<{
    highContrastBorderColor: string;
    colorHexCode: string;
}>`
    border: 0.5rem solid ${props => props.highContrastBorderColor};
    box-sizing: border-box;
    display: inline-block;
    margin: 0 2rem 2rem 0;
    width: 19rem;

    .color-swatch-pill-container {
        background: ${({ colorHexCode = 'inherit' }) => colorHexCode};
        cursor: pointer;
        padding: 7rem 1rem 1rem 1.5rem;
    }

    .temporary-copy-confirmation {
        font-size: 1rem;
        font-weight: 600;
        position: fixed;
        padding: 1rem;
        top: 2rem;
        right: 2rem;
        z-index: 10;
        color: ${colors.success.base};
        background: ${colors.white.base};
        border: 0.1rem solid ${colors.success.base};
    }
`;

const StyledColorSwatchTextContainer = styled.div<{
    highContrastBorderColor: string;
}>`
    border-top: 0.05rem solid
        ${({ highContrastBorderColor = 'black' }) => highContrastBorderColor};
    padding: 1rem;

    p {
        margin: 0;
        padding: 0.25rem 0 0.25rem 0.5rem;

        &:hover {
            background: ${colors.ash.light};
            border-radius: 1rem;
            cursor: pointer;
            text-decoration: underline;
        }
    }
`;

// JSX MARKUP
export const ColorSwatch = ({
    colorHexCode,
    colorName,
}: ColorSwatchProps): React.ReactElement<any> => {
    const highContrastBorderColor = ColorHelpers.getHigherContrastColor(
        colorHexCode
    );
    const colorRgbCode = ColorHelpers.getRgbColor(colorHexCode);

    const [isCopied, setIsCopied] = useState<boolean>(false);
    const [copyToClipboardText, setCopyToClipboardText] = useState<string>(
        colorHexCode
    );
    const handleCopy = (copiedText: string) => {
        setCopyToClipboardText(copiedText);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };

    return (
        <StyledColorSwatch
            colorHexCode={colorHexCode}
            highContrastBorderColor={highContrastBorderColor}
        >
            {isCopied ? (
                <span className="temporary-copy-confirmation">
                    🎉 You copied "{copyToClipboardText}"
                </span>
            ) : null}

            <CopyToClipboard
                text={colorHexCode}
                onCopy={() => handleCopy(colorHexCode)}
            >
                <div className="color-swatch-pill-container">
                    {['#FFFFFF', '#FAFAFA', '#F1F1F1', '#000000'].map(
                        (pillBackgroundColor: string) => (
                            <Pill
                                key={pillBackgroundColor}
                                value={ColorHelpers.getRoundedColorContrast(
                                    colorHexCode,
                                    `${pillBackgroundColor}`
                                )}
                                backgroundColor={pillBackgroundColor}
                                textColor={colorHexCode}
                            />
                        )
                    )}
                </div>
            </CopyToClipboard>
            <StyledColorSwatchTextContainer
                highContrastBorderColor={highContrastBorderColor}
            >
                <CopyToClipboard
                    text={colorName}
                    onCopy={() => handleCopy(colorName)}
                >
                    <Typography tag="p" weight={700}>
                        {colorName}
                    </Typography>
                </CopyToClipboard>
                <CopyToClipboard
                    text={colorHexCode}
                    onCopy={() => handleCopy(colorHexCode)}
                >
                    <Typography tag="p" weight={500}>
                        {colorHexCode}
                    </Typography>
                </CopyToClipboard>
                <CopyToClipboard
                    text={colorRgbCode}
                    onCopy={() => handleCopy(colorRgbCode)}
                >
                    <Typography tag="p" weight={500}>
                        {colorRgbCode}
                    </Typography>
                </CopyToClipboard>
            </StyledColorSwatchTextContainer>
        </StyledColorSwatch>
    );
};
