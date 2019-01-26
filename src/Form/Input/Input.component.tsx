// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
// THEME
import { fonts, colors } from '../../theme';

interface InputProps {
  className?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  defaultValue?: any;
  value?: any;
  // onFocus?: () => void;
  // onBlur?: () => void;
  onChange?: (e: any) => void;
  validate?: (e: any) => void;
  format?: (e: any) => void;

  prefix?: any;
  suffix?: any;
}

interface InputState {
  isFocused: boolean;
  value: string;
  errorMessage: string;
}

export const StyledInput = styled.div `
  width: calc(100% - 2rem);
  height: 3rem;
  position: relative;
  display: flex;
  flex-direction: column;
  font-family: ${fonts.fontFamily};
  opacity: ${({disabled}: InputProps) => disabled && '0.5'};

  .field-input {
    width: 100%;
    box-sizing : border-box;
    padding: 24px 0 6px 0;
    padding-left: ${({ prefix }: InputProps) => !prefix ? '.75rem' : 'calc(3rem - 3px)'};
    border-radius: 2px;
    border: solid 1px ${colors.neutrals.ash.light};
    position: relative;
    font-size: calc(1rem - 2px);
    font-weight: 500;
    background: none;
    z-index: 1;

    &:active,
    &:focus {
      outline: none;
      border-color: ${({ disabled }: InputProps) => disabled ? colors.neutrals.ash.light : colors.neutrals.ash.dark};
    }

    &.error-border {
      border-color: ${colors.alert.error.base};
    }
  }

  .input-prefix {
    padding-top: 1rem;
    padding-left: 1rem;
    position: absolute;
  }

  .field-label {
    position: absolute;
    margin-left: ${({ prefix }: InputProps) => !prefix ? '.75rem' : 'calc(3rem - 3px)'};
    margin-top: calc(1rem - 1px);
    top: 0;
    font-size: calc(1rem - 2px);
    font-weight: 500;
    line-height: 1.29;
    transform-origin: 0% 50%;
    transition: all 200ms ease-in-out;
    color: ${colors.neutrals.charcoal.light};
    cursor: text;
  }

  .field-input:focus + .field-input:not([value='']) {
    z-index: 2;
    opacity: 1;
  }

  .field-input:focus + .field-label,
  .field-input:not([value='']) + .field-label {
    z-index: 2;
    transform: scale(0.80) translateY(-.75rem);
    opacity: 0.75;
    cursor: default;
  }

  .error {
    margin-top: .5rem;
    font-size: .75rem;
    font-weight: 500;
    color: ${colors.alert.error.base};
  }
`;

export class Input extends React.Component<InputProps> {
  readonly state: InputState = {
    isFocused: false,
    value: '',
    errorMessage: '',
  };

  render(): React.ReactElement<Input> {
    const {
      label,
      prefix,
      disabled,
    } = this.props;

    const {
      value,
      isFocused,
      errorMessage,
    } = this.state;

    return (
      <StyledInput prefix={prefix} disabled={disabled}>
        {prefix && React.cloneElement(prefix, {
          height: 16,
          width: 16,
          color: colors.neutrals.ash.dark,
          className: 'input-prefix',
        })}
        <input
          disabled={disabled}
          onFocus={() => this.setState({ ...this.state, isFocused: true })}
          onBlur={() => this.setState({ ...this.state, isFocused: false })}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event)}
          value={value}
          className={classNames('field-input', { ['error-border']: errorMessage})}
        />
        <label className="field-label">
          {label}
        </label>
        {!isFocused && errorMessage && <div className="error">{errorMessage}</div>}
      </StyledInput>
    );
  }

  private handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const errorMessage = this.props.validate && event.target.value && this.props.validate(event.target.value);
    const value = this.props.format ? this.props.format(event.target.value) : event.target.value;
    this.setState({
      value,
      errorMessage,
    });
  }
}

export default Input;
