// VENDOR
import * as React from 'react';
import classNames from 'classnames';
import styled from '@xstyled/styled-components';
// ANCHOR
import { Input } from '../../Form';

// Todo: this component needs work for mobile and for accessibility.

const EventKeyCodes = {
    ENTER: 13,
};

// This is a workaround to overwrite instead of extend, to avoid
// an incompatible extension (for onSubmit)
type Spread<L, R> = R & Pick<L, Exclude<keyof L, keyof R>>;

interface ExtraProps {
    className?: string;
    onSubmit: (arg: number) => any;
}

interface GotoProps
    extends Spread<React.HTMLAttributes<HTMLDivElement>, ExtraProps> {}

const StyledGoto = styled('div')`
    width: 6rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 0.5rem;

    .anchor-input {
        margin-left: 0.5rem;
    }
`;

export const Goto = ({
    onSubmit,
    className,
    ...props
}: GotoProps): React.ReactElement<GotoProps> => {
    const [value, setValue] = React.useState<null | number>(null);

    const handleSubmit = () => {
        if (onSubmit && value !== null) {
            onSubmit(value);
            setValue(null);
        }
    };

    return (
        <StyledGoto
            className={classNames('anchor-pagination-goto', className)}
            {...props}
        >
            Goto
            <Input
                type="number"
                onChange={num => setValue(num)}
                onKeyDown={event => {
                    if (event.keyCode === EventKeyCodes.ENTER) {
                        handleSubmit();
                    }
                }}
                value={value === null ? '' : value}
            />
        </StyledGoto>
    );
};
