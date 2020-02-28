// VENDOR
import * as React from 'react';
import classNames from 'classnames';
import styled, {
    up,
    css,
    down,
    ThemeContext,
} from '@xstyled/styled-components';
import { layout, LayoutProps, space, SpaceProps } from '@xstyled/system';

const { useContext } = React;

interface ForEach {
    [k: string]: any;
}

interface AdaptProps
    extends React.HTMLAttributes<HTMLDivElement>,
        LayoutProps,
        SpaceProps {
    className?: string;
    forEach: ForEach;
    children: (
        value: any,
        breakpoint: string
    ) => JSX.Element | React.ReactElement;
}

interface StyledParentProps
    extends React.HTMLAttributes<HTMLDivElement>,
        LayoutProps,
        SpaceProps {
    keys: string[];
    className?: string;
}

const StyledParent = styled('div')<StyledParentProps>`
  ${layout}
  ${space}

  ${({ keys }) =>
      keys.map((current, index) => {
          const next = keys[index + 1];
          return css`
              > :nth-child(${index + 1}) {
                  ${next && up(next, css({ display: 'none' }))}
                  ${current !== 'xs' && down(current, css({ display: 'none' }))}
              }
          `;
      })}
`;

/**
 * The purpose of Adapt is to display different content for different breakpoints.
 * It accomplishes this via media queries and display: none. It expects a forEach
 * prop object with values mapped to different breakpoints and children as a render
 * prop. It then renders the child function for each breakpoint, passing in the
 * associated value and the breakpoint as the first two arguments.
 *
 * Example usage:
 * <Adapt forEach={{ xs: 'apple', md: 'banana' }}>
 *   {(value, breakpoint) => (
 *     <p>
 *       {value}
 *     </p>
 *   )}
 * </Adapt>
 *
 * =>
 *   <p>apple</p>  // displays below md breakpoint
 *   <p>banana</p>  // displays at and above md breakpoint
 */
export const Adapt = ({
    className,
    children,
    forEach,
    ...props
}: AdaptProps): React.ReactElement<AdaptProps> => {
    const theme = useContext(ThemeContext);
    const breakpoints = theme && theme.breakpoints;

    const keys = Object.keys(forEach);

    // Keys are sorted by their pixel values (if available) so
    // that the css styles are ordered properly.
    // This could be changed to use ResponsiveContext's sorted breakpoints.
    const sortedKeys = breakpoints
        ? keys.sort((a, b) => (breakpoints[a] || 0) - (breakpoints[b] || 0))
        : keys;

    const childs = keys.map(key => children(forEach[key], key));

    return (
        <StyledParent
            className={classNames('anchor-adapt', className)}
            keys={sortedKeys}
            {...props}
        >
            {childs}
        </StyledParent>
    );
};

Adapt.displayName = 'Adapt';
