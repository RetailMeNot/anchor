// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, {
    css,
    FlattenInterpolation,
    ThemeProps,
} from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import { transparentize, darken } from 'polished';
// COMPONENTS
import { Close } from '../Icon';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { get } from '../utils/get/get';

export enum AlertTypes {
    success = 'SUCCESS',
    info = 'INFO',
    warning = 'WARNING',
    error = 'ERROR',
}

type AlertType =
    | 'success'
    | 'info'
    | 'warning'
    | 'error'
    | AlertTypes.success
    | AlertTypes.info
    | AlertTypes.warning
    | AlertTypes.error;

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    type: AlertType;
    className?: string;
    message?: string;
    description?: string;
    closable?: boolean;
    icon?: JSX.Element;
    onClose?: (event: Event) => void;
}

const renderAlertTheme = (
    type: AlertType
): FlattenInterpolation<ThemeProps<AlertProps>> => {
    return css`
        ${({ theme }: any) =>
            css({
                backgroundColor: transparentize(
                    0.75,
                    get(theme, `colors.${type.toLowerCase()}`)
                ),
                border: `solid thin ${transparentize(
                    0.4,
                    get(theme, `colors.${type.toLowerCase()}`)
                )}`,
            })};

        .anchor-icon {
            ${({ theme }) =>
                css({
                    color: darken(
                        0.2,
                        get(theme, `colors.${type.toLowerCase()}`)
                    ),
                })}
        }
    `;
};

const StyledAlert = styled('div')<AlertProps>`
    box-sizing: border-box;
    position: relative;
    border-radius: base;
    font-family: ${th('typography.fontFamily')};
    padding: 0.5rem 1.5rem 0.5rem 0.5rem;
    ${({ type }) => renderAlertTheme(type)};

    .anchor-alert-close {
        position: absolute;
        top: 0;
        right: 0;

        &:active,
        &:hover,
        &:focus {
            background-color: transparent;
        }
    }

    h4,
    p {
        line-height: 1.2em;
        margin: 0;
        padding: 0;
    }

    h4 {
        padding-bottom: 0.75rem;
        &:last-child {
            padding-bottom: 0;
        }
    }
`;

const renderMessageAndDescription = ({
    message,
    description,
}: {
    message?: string;
    description?: string;
}) => (
    <>
        {message && <Typography tag="h4">{message}</Typography>}
        {description && (
            <Typography tag="p" color="charcoal" hue="light">
                {description}
            </Typography>
        )}
    </>
);

const StyledIconContainer = styled('div')`
    box-sizing: border-box;
    display: flex;

    .anchor-alert-content {
        flex: 1 1 auto;
    }
    .anchor-icon {
        flex: 0 0 0;
        padding: 0 0.5rem 0 0;
    }
`;

export const Alert = ({
    className,
    children,
    onClose = () => null,
    message,
    description,
    closable,
    icon,
    ...props
}: AlertProps): React.ReactElement<AlertProps> | null => {
    const [isHidden, setIsHidden] = React.useState<boolean>(false);

    return !isHidden ? (
        <StyledAlert
            className={classNames('anchor-alert', className)}
            {...props}
        >
            {closable && (
                <Button
                    className="anchor-alert-close"
                    size="xs"
                    circular={true}
                    variant="minimal"
                    prefix={<Close color="rgba(0, 0, 0, 0.3)" scale="sm" />}
                    onClick={() => setIsHidden(true)}
                />
            )}
            {icon ? (
                <StyledIconContainer>
                    {React.cloneElement(icon)}
                    <div className="anchor-alert-content">
                        {renderMessageAndDescription({ message, description })}
                    </div>
                </StyledIconContainer>
            ) : (
                renderMessageAndDescription({ message, description })
            )}
        </StyledAlert>
    ) : null;
};
