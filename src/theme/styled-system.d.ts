/* tslint:disable no-import-side-effect*/
import 'styled-system';

// this is temporary until @types/styled-system is updated for styled-system v5
declare module 'styled-system' {
    export function system(args?: {}): {
        (props: any): {};
        config: any;
        propNames: string[];
        cache: {};
    };

    export function get(obj: any, key: string | number, fallback: any): any;
}
