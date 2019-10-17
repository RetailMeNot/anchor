// VENDOR
import * as wcagContrast from 'wcag-contrast';

export class ColorHelpers {
    public static getRoundedColorContrast(
        colorHexCode1: string,
        colorHexCode2: string
    ): number {
        const exactContrast = wcagContrast.hex(colorHexCode1, colorHexCode2);
        return Math.round(exactContrast * 100) / 100;
    }

    public static getSuccessOrErrorColor(colorContrast: number): string {
        return colorContrast > 4.5 ? 'success' : 'error';
    }

    public static getHigherContrastColor(colorHexCode: string): string {
        return wcagContrast.hex('#F1F1F1', colorHexCode) >
            wcagContrast.hex('#D3D3D3', colorHexCode)
            ? '#F1F1F1'
            : '#D3D3D3';
    }

    public static getRgbColor(colorHexCode: string): string {
        let h: any = colorHexCode.replace('#', '');
        h = h.match(new RegExp(`(.{${h.length / 3}})`, 'g'));

        for (let i = 0; i < h.length; i++) {
            h[i] = parseInt(h[i].length === 1 ? h[i] + h[i] : h[i], 16);
        }

        return `rgb(${h.join(',')})`;
    }
}
