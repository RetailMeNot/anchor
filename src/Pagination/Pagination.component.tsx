// VENDOR
import * as React from 'react';
import classNames from 'classnames';
import styled from '@xstyled/styled-components';
import { space as spaceStyles, SpaceProps } from '@xstyled/system';
// ANCHOR
import { Goto } from './Goto';
import {
    Button as AnchorButton,
    ButtonProps,
} from '../Button/Button.component';
import { ChevronLeft, ChevronRight, Ellipses } from '../Icon';
import { Typography } from '../Typography';

// Constrain a value between a min and max.
// Used primarily here to keep the current page
// value between the first page and last page
const constrain = (min: number, value: number, max: number) =>
    Math.min(Math.max(value, min), max);

const Button = ({
    variant = 'minimal',
    size = 'sm',
    ...props
}: ButtonProps) => <AnchorButton variant={variant} size={size} {...props} />;

export type Size = 'sm' | 'xs';
export type Variant = 'expanded' | 'minimal';

interface RenderProps {
    current: number;
    totalPages: number;
    totalResults?: number;
    pageSize: number;
    range: [number, number];
}

interface PaginationProps extends SpaceProps {
    className?: string;
    current?: number;

    totalPages?: number;
    totalResults?: number;
    pageSize?: number;

    showGoto?: boolean;
    showArrows?: boolean;
    size?: Size;
    variant?: Variant;

    prefix?: (props: RenderProps) => any;
    suffix?: (props: RenderProps) => any;
    children?: (props: RenderProps) => any;

    onChange?: (page: number) => any;
}

const StyledPagination = styled('div')`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    ${spaceStyles}
`;

const AffixWrapper = styled('div')`
    display: inline;
    margin: 0 1rem;
`;

interface PaginationState {
    current: number;
}

function reducer(state: PaginationState, action: any) {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                current: Math.min(state.current + 1, action.total),
            };
        case 'decrement':
            return { ...state, current: Math.max(state.current - 1, 1) };
        case 'setCurrent':
            return {
                ...state,
                current: constrain(1, action.payload, action.total),
            };
        case 'totalChanged':
            // This will make it so that if the current page is now beyond the
            // new page total then the current page changes to the new last page.
            // It might be that we want to revert to the first page instead.
            return {
                ...state,
                current: constrain(1, state.current, action.total),
            };
        default:
            throw new Error(
                `Unrecognized reducer action type: ${action && action.type}`
            );
    }
}

// We could improve this component by adding ways to show the total number of results,
// allowing "Next" and "Prev" text instead of arrows, and having the Ellipses buttons
// dropdown a Goto or decrement/increment the current page by 5, for instance.
export const Pagination = ({
    className,
    prefix,
    suffix,
    children,
    totalPages,
    totalResults,
    pageSize = 10,
    current: controlledCurrent,
    showGoto,
    showArrows = true,
    size = 'sm',
    onChange,
    variant = 'expanded',
    ...props
}: PaginationProps): React.ReactElement<PaginationProps> => {
    const [state, dispatch] = React.useReducer(reducer, {
        current: 1,
    });

    // If the current page is controlled we want to
    // prefer that over internal state
    const current = controlledCurrent || state.current;

    // Prefer the totalPages prop over calculating from
    // the totalResults/pageSize
    const total =
        totalPages || (totalResults && Math.ceil(totalResults / pageSize)) || 1;

    React.useEffect(() => {
        dispatch({ type: 'totalChanged', total });
    }, [total]);

    React.useEffect(() => {
        if (onChange) {
            onChange(state.current);
        }
    }, [state.current]);

    const pageButton = ({ page, slot }: { page: number; slot?: number }) => (
        <Button
            className={current === page ? 'active' : undefined}
            size={size}
            key={`page${page}:${slot}`}
            onClick={() =>
                dispatch({ type: 'setCurrent', payload: page, total })
            }
            variant={current === page ? 'filled' : undefined}
            prefix={<>{page}</>}
        />
    );

    // Seven is enough to show the first and last page, the current page
    // and pages on either side, and potential ellipses in between. If the
    // page count is 7 or less, we can just display a button for each
    // page.
    const numButtonSlots = 7;

    const iconSize = size === 'sm' ? 'lg' : undefined;

    const renderProps: RenderProps = {
        current,
        totalPages: total,
        totalResults,
        pageSize,
        range: [
            (current - 1) * pageSize + 1,
            Math.min(pageSize * current, totalResults || Infinity),
        ],
    };

    return (
        <>
            <StyledPagination
                className={classNames('anchor-pagination', className)}
                {...props}
            >
                {prefix && <AffixWrapper>{prefix(renderProps)}</AffixWrapper>}

                {showArrows && (
                    <Button
                        size={size}
                        disabled={current <= 1}
                        prefix={<ChevronLeft scale={iconSize} />}
                        onClick={() => dispatch({ type: 'decrement', total })}
                    />
                )}

                {variant === 'minimal' && (
                    <Typography scale={20} margin="0 0.5rem">
                        {current} / {total}
                    </Typography>
                )}

                {variant === 'expanded' &&
                    (total <= numButtonSlots ? (
                        Array.from(Array(total)).map((_, i) =>
                            pageButton({ page: i + 1, slot: i })
                        )
                    ) : (
                        <>
                            {pageButton({ page: 1, slot: 1 })}

                            {/* If this slot would normally show page 2, display a 2,
                        otherwise display an ellipses */}
                            {constrain(2, current - 2, total - 5) === 2 ? (
                                pageButton({ page: 2, slot: 2 })
                            ) : (
                                <Button size={size} prefix={<Ellipses />} />
                            )}

                            {pageButton({
                                page: constrain(3, current - 1, total - 4),
                                slot: 3,
                            })}
                            {pageButton({
                                page: constrain(4, current, total - 3),
                                slot: 4,
                            })}
                            {pageButton({
                                page: constrain(5, current + 1, total - 2),
                                slot: 5,
                            })}

                            {/* If this slot would normally show the second to last page, display
                        the second to last page, otherwise display an ellipses */}
                            {constrain(6, current + 2, total - 1) ===
                            total - 1 ? (
                                pageButton({ page: total - 1, slot: 6 })
                            ) : (
                                <Button size={size} prefix={<Ellipses />} />
                            )}

                            {pageButton({ page: total, slot: 7 })}
                        </>
                    ))}

                {showArrows && (
                    <Button
                        size={size}
                        disabled={current === total}
                        prefix={<ChevronRight scale={iconSize} />}
                        onClick={() => dispatch({ type: 'increment', total })}
                    />
                )}

                {suffix && <AffixWrapper>{suffix(renderProps)}</AffixWrapper>}

                {showGoto && (
                    <Goto
                        onSubmit={(page: number) =>
                            dispatch({
                                type: 'setCurrent',
                                payload: page,
                                total,
                            })
                        }
                    />
                )}
            </StyledPagination>
            {children && children(renderProps)}
        </>
    );
};
