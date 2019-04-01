// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({
    color = '#222222',
    width = 14,
    height = 16,
}: IconSVGProps) => (
    <svg
        width={`${width}px`}
        height={`${height}px`}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <defs>
            <path
                d="M13.685 10.91l-.437.78a.313.313 0 0 1-.386.14l-1.24-.511a.605.605 0 0 0-.654.129 4.42 4.42 0 0 1-1.552.968.662.662 0 0 0-.418.522l-.227 1.451a.321.321 0 0 1-.312.278H7.54a.32.32 0 0 1-.31-.278L7 12.938a.656.656 0 0 0-.42-.523 4.357 4.357 0 0 1-1.49-.91.61.61 0 0 0-.415-.165.582.582 0 0 0-.22.043l-1.307.516a.314.314 0 0 1-.384-.145l-.459-.841a.345.345 0 0 1 .072-.424l1.073-.934a.692.692 0 0 0 .217-.643 5.006 5.006 0 0 1 0-1.823.69.69 0 0 0-.217-.643l-1.073-.935a.344.344 0 0 1-.072-.423l.46-.841a.315.315 0 0 1 .383-.146l1.307.517c.215.085.46.039.635-.122a4.341 4.341 0 0 1 1.49-.91.657.657 0 0 0 .42-.523l.23-1.451a.32.32 0 0 1 .31-.278h.92c.154 0 .285.117.311.278l.227 1.451a.662.662 0 0 0 .421.523 4.345 4.345 0 0 1 1.491.91.607.607 0 0 0 .635.122l1.306-.517a.313.313 0 0 1 .384.146l.46.84a.347.347 0 0 1-.073.425l-1.072.934a.69.69 0 0 0-.218.643c.055.296.082.602.082.911 0 .309-.027.616-.082.912-.044.24.04.487.218.643l1.065.928c.121.105.15.285.07.427m.732-1.456l-.786-.685a6.546 6.546 0 0 0 0-1.537l.793-.692c.597-.52.75-1.411.363-2.12l-.46-.841c-.375-.687-1.213-1.006-1.918-.727l-.967.383a5.559 5.559 0 0 0-1.259-.769l-.168-1.072C9.888.586 9.235 0 8.46 0H7.54c-.774 0-1.429.586-1.555 1.394l-.169 1.072a5.553 5.553 0 0 0-1.258.769l-.968-.383c-.706-.279-1.542.04-1.918.727l-.46.842c-.386.708-.234 1.599.363 2.119l.794.692a6.321 6.321 0 0 0 0 1.537l-.794.691c-.597.52-.749 1.412-.363 2.12l.46.841c.376.687 1.213 1.007 1.918.727l.968-.383c.391.316.812.574 1.258.77l.17 1.072C6.11 15.414 6.765 16 7.54 16h.92c.774 0 1.428-.586 1.555-1.393l.17-1.074a5.69 5.69 0 0 0 1.33-.827l.888.367c.702.29 1.547-.02 1.93-.702l.437-.78a1.725 1.725 0 0 0-.353-2.137M8 9.25c-.69 0-1.25-.56-1.25-1.25 0-.689.56-1.25 1.25-1.25.689 0 1.25.561 1.25 1.25 0 .69-.561 1.25-1.25 1.25M8 5.5A2.503 2.503 0 0 0 5.5 8c0 1.378 1.122 2.5 2.5 2.5 1.379 0 2.5-1.122 2.5-2.5S9.379 5.5 8 5.5"
                id="icon-gear"
            />
        </defs>
        <g transform="translate(-1)" fill="none" fillRule="evenodd">
            <path d="M0 0h16v16H0z" />
            <use fill={color} xlinkHref="#icon-gear" />
        </g>
    </svg>
);
