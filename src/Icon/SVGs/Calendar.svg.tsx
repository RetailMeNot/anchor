// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({ color = '#222222', scale }: IconSVGProps) => (
    <svg
        viewBox="0 0 16 16"
        width={scale}
        height={scale}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <defs>
            <path
                d="M13.069 11.586h1.598V9.84h-1.598v1.747zm0 3.086h1.598V12.92h-1.598v1.753zm-2.932 0h1.593V12.92h-1.593v1.753zm-2.932 0h1.593V12.92H7.205v1.753zm-2.933 0h1.593V12.92H4.272v1.753zm-2.272 0a.668.668 0 0 1-.66-.667V12.92h1.592v1.753H2zm-.66-3.086h1.593V9.84H1.34v1.747zm0-3.08h1.593v-1.79H1.34v1.79zm0-5.113A.67.67 0 0 1 2 2.737h1.34v.667a.666.666 0 0 0 .583.742.669.669 0 0 0 .746-.742v-.667h7.199v.667c0 .367.3.666.67.666.37 0 .67-.299.67-.666v-.667h.8a.67.67 0 0 1 .67.667l-.011 1.978H1.34V3.393zm11.729 5.113h1.598v-1.79h-1.598v1.79zm-2.932 0h1.593v-1.79h-1.593v1.79zm0 3.08h1.593V9.84h-1.593v1.747zm-2.932 0h1.593V9.84H7.205v1.747zm-2.933 0h1.593V9.84H4.272v1.747zm2.933-3.08h1.593v-1.79H7.205v1.79zm-2.933 0h1.593v-1.79H4.272v1.79zm11.725-6.435c0-.368-.3-.667-.67-.667h-2.1V.748a.667.667 0 0 0-.67-.666.666.666 0 0 0-.669.666v.667H4.659V.748a.67.67 0 0 0-1.33-.163c-.006.054 0 .83 0 .83H.67a.668.668 0 0 0-.67.656V15.33c0 .368.3.666.67.666h14.581a.669.669 0 0 0 .746-.58c.007-.054 0-13.344 0-13.344z"
                id="icon-calendar"
            />
        </defs>
        <use fill={color} xlinkHref="#icon-calendar" fillRule="evenodd" />
    </svg>
);
