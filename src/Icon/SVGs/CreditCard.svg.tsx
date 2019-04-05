// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({ color = '#222222', scale }: IconSVGProps) => (
    <svg
        viewBox="0 0 16 12"
        width={scale}
        height={scale}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <defs>
            <path
                d="M12.923 9.223a.503.503 0 0 1-.499.503H3.576a.503.503 0 0 1 0-1.006h8.848c.274 0 .499.226.499.503zM5.267 5.231a1.877 1.877 0 0 1 .006-2.629 1.842 1.842 0 0 1 1.324-.554c.501 0 .972.196 1.325.554L8 2.697l.05-.063a1.877 1.877 0 0 1 1.354-.586c.502 0 .971.196 1.324.554a1.88 1.88 0 0 1 0 2.635L8.58 7.49c-.118.123-.314.33-.58.33-.265 0-.454-.199-.58-.33L5.267 5.23zm9.438 4.705a.752.752 0 0 1-.749.755H2.043a.752.752 0 0 1-.748-.755V2.063c0-.416.336-.754.748-.754h11.913c.413 0 .75.338.75.754v7.873zM13.956 0H2.043A2.055 2.055 0 0 0 0 2.063v7.873C0 11.074.916 12 2.043 12h11.913A2.056 2.056 0 0 0 16 9.936V2.063A2.056 2.056 0 0 0 13.956 0z"
                id="icon-credit-card"
            />
        </defs>
        <use fill={color} xlinkHref="#icon-credit-card" fillRule="evenodd" />
    </svg>
);
