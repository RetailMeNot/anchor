// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
// COMPONENTS
import { List, Item } from '../List';
import { Icon } from '../Icon';
// THEME
import { fonts, colors } from '../theme';

// TODO: This should be built from a FormControl Input, but we don't have one yet. =(

interface AutoCompleteProps {
    dataSource: any[];
    className?: string;
    size?: 'small' | 'large';
    placeholder?: string;
    onSearch?: () => void;
    onSelect?: () => void;
    // onFocus?: () => void;
    // onBlur?: () => void;
    children?: any;

    suffix?: React.ReactElement<Icon>; // TODO: consider buttons & other elements
    prefix?: React.ReactElement<Icon>; // TODO: consider buttons & other elements
}

interface AutoCompleteState {
    isFocused: boolean;
}

export const StyledAutoComplete = styled.div`
    position: relative;
    border: solid 1px ${colors.ash.light};
    border-radius: 0.25rem;
    transition: border-color 500ms;
    display: flex;
    background: ${colors.white.base};
    align-items: center;

    &:hover {
        border: solid thin ${colors.ash.base};
    }

    &:active,
    &:focus {
        border: solid thin ${colors.ash.dark};
    }

    .auto-complete-input {
        flex: 1;
        font-family: ${fonts.fontFamily};
        font-weight: 500;
        border: none;
        border-radius: 0.25rem;
        background-color: transparent;
        line-height: 1rem;
        overflow: hidden;

        color: ${colors.charcoal.light};

        padding: ${({ size = 'small' }: AutoCompleteProps) =>
            size === 'large' ? '0.75rem 1rem' : '0.5rem 0.5rem'};

        width: ${({ size = 'small' }: AutoCompleteProps) =>
            size === 'large'
                ? 'calc(100% - 2rem - 2px)'
                : 'calc(100% - 1rem - 2px)'};

        font-size: ${({ size = 'small' }: AutoCompleteProps) =>
            size === 'large' ? '1rem' : '.75rem'};
    }

    .auto-complete-results {
        z-index: 2;
        position: absolute;
        top: ${({ size = 'small' }: AutoCompleteProps) =>
            size === 'large' ? 'calc(2.5rem - 2px)' : 'calc(2rem - 2px)'};
        width: 100%;
        background-color: ${colors.white.base};
        box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.12);
        border-radius: 0 0 0.25rem 0.25rem;
        border-top: solid 1px ${colors.ash.light};
        transition: border-top-color 500ms;

        &:hover {
            border-top-color: ${colors.ash.base};
        }
    }

    .auto-complete-prefix {
        z-index: 1;
        flex: 0 0 1.5rem;
    }
    /* TODO: suffix */
`;

export class AutoComplete extends React.Component<AutoCompleteProps> {
    static defaultProps = {
        placeholder: 'Search',
    };
    readonly state: AutoCompleteState = {
        isFocused: false,
    };

    render(): React.ReactElement<AutoComplete> {
        const {
            className,
            placeholder,
            children,
            suffix,
            prefix,
            ...props
        } = this.props;

        return (
            <StyledAutoComplete className={classNames(className)} {...props}>
                {prefix &&
                    React.cloneElement(prefix, {
                        className: 'auto-complete-prefix',
                        height: 16,
                        width: 16,
                        color: colors.ash.dark,
                    })}
                <input
                    onFocus={() =>
                        this.setState({ ...this.state, isFocused: true })
                    }
                    onBlur={() =>
                        this.setState({ ...this.state, isFocused: false })
                    }
                    placeholder={placeholder}
                    className="auto-complete-input"
                    name="auto-complete"
                />
                {suffix &&
                    React.cloneElement(suffix, {
                        className: 'auto-complete-suffix',
                    })}
                {children}
                {this.state.isFocused && !children && (
                    <List
                        title="Recent Searches"
                        className="auto-complete-results"
                    >
                        {this.props.dataSource.map((item: any) => (
                            <Item key={item}>{item}</Item>
                        ))}
                    </List>
                )}
            </StyledAutoComplete>
        );
    }
}

export default AutoComplete;
