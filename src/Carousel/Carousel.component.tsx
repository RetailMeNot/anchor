// VENDOR
import * as React from 'react';
import classNames from 'classnames';
import styled, { css } from '@xstyled/styled-components';
import { space, SpaceProps } from '@xstyled/system';
import { SnapList, SnapItem, useScroll, useVisibleElements } from 'react-snaplist-carousel';

interface CarouselProps extends SpaceProps {
    children: any;
    className?: string;
    test?: boolean;
}

interface DotProps {
    selected: boolean;
}

const StyledCarousel = styled('div')<SpaceProps>`
    ${space}
`;

const CarouselItem = styled('div')`
    width: calc(100vw - 1rem);
`;

const Dots = styled('span')`
    text-align: center;
    display: block;
`;

const Dot = styled('span')<DotProps>`
    height: 0.5rem;
    width: 0.5rem;
    display: inline-block;
    ${({selected}): any => selected && css`background-color: gray;`}
    border: base;
    border-radius: 50%;
    margin: 0.25rem;
    transition: 250ms background-color;
`;

export const Carousel = ({children, className, ...rest}: CarouselProps): React.ReactElement<CarouselProps> => {
    const snapList = React.useRef(null);
    const goToElement = useScroll({ ref: snapList });
    const selected = useVisibleElements(
        { ref: snapList, debounce: 10 },
        elements => elements[0],
    );
    console.log(rest);

    return (
        <StyledCarousel className={classNames('anchor-carousel', className)} {...rest}>
            <SnapList direction="horizontal" ref={snapList}>
                {children.map((child: any, i: number) => (
                    <SnapItem snapAlign="center" className={`anchor-carousel-item-${i}`} key={`anchor-carousel-item-${i}`} margin={{right: '1rem'}}>
                        <CarouselItem>
                            {child}
                        </CarouselItem>
                    </SnapItem>
                ))}
            </SnapList>
            <Dots>
                {children.map((_: any, i: number) => <Dot key={`dot-${i}`} onClick={() => {goToElement(i); }} selected={selected === i} />)}
            </Dots>
        </StyledCarousel>
    );
};
