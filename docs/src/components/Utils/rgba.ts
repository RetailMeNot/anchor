// Based off of https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

export function rgba(hex: string, opacity: number) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    if (result) {
        const r = parseInt(result[1], 16);
        const g = parseInt(result[2], 16);
        const b = parseInt(result[3], 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }

    return hex;
}
