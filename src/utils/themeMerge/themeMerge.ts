/*
    Utility method to help a user merge their settings into a supplied baseTheme (RootTheme is the
    default). Returns a new object (deep clone).

    ex: const MyTheme = themeMerge({
        fonts: {
            base: 'Comic Sans MS',
        },
    });

    TODO: It would be good at some point to also add validation to this so the user doesn't break
    all the things.
*/
import { RootTheme } from '../../theme';

export type ThemeType = {
    [key: string]: any;
    typography: object;
    radii: object;
    buttons: object;
    inputs: object;
    colors: object;
    borders: object;
    skeleton: object;
};

// Can't really be 100% sure what data will be as it is cloned, hence :any
function deepClone(data: any) {
    if (typeof data === null || typeof data !== 'object') {
        return data;
    }

    // Using constructor(), creates a new instance of the object in memory rather than a reference
    const tmpObj = data.constructor();

    for (const key in data) {
        if (data[key]) {
            tmpObj[key] = deepClone(data[key]);
        }
    }
    return tmpObj;
}

function recursiveUpdate(settingStep: object, newThemeStep: object) {
    for (const key in settingStep) {
        if (settingStep[key] === undefined) {
            delete newThemeStep[key];
        } else if (settingStep[key] && typeof settingStep[key] !== 'object') {
            newThemeStep[key] = settingStep[key];
        } else {
            recursiveUpdate(settingStep[key], newThemeStep[key]);
        }
    }
}

export function themeMerge(
    settings: object,
    baseTheme: ThemeType = RootTheme
): ThemeType {
    const newTheme = deepClone(baseTheme);

    for (const key in settings) {
        if (settings[key]) {
            if (!newTheme.hasOwnProperty(key)) {
                // Adds new keys to the root of the object
                newTheme[key] = settings[key];
            } else {
                // Updates baseTheme defaults with new values
                recursiveUpdate(settings[key], newTheme[key]);
            }
        }
    }

    return newTheme;
}
