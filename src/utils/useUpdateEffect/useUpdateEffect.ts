/* eslint-disable prefer-arrow-callback */
import * as React from 'react';

// useUpdateEffect is a useEffect that doesn't fire on initial render
// for detecting when values change
// https://stackoverflow.com/a/58217148

// Named functions are for stack traceability
const useIsMounted = function useIsMounted() {
    const isMounted = React.useRef(false);

    React.useEffect(function setIsMounted() {
        isMounted.current = true;

        return function cleanupSetIsMounted() {
            isMounted.current = false;
        };
    }, []);

    return isMounted;
};

export const useUpdateEffect = function useUpdateEffect(
    effect: () => void | (() => void),
    dependencies: any[]
): void {
    const isMounted = useIsMounted();
    const isInitialMount = React.useRef(true);

    React.useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        let effectCleanupFunc = function noop() {};

        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            effectCleanupFunc = effect() || effectCleanupFunc;
        }
        return () => {
            effectCleanupFunc();
            if (!isMounted.current) {
                isInitialMount.current = true;
            }
        };
    }, dependencies);
};
