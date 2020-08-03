// VENDOR
import * as React from 'react';
import classNames from 'classnames';
import styled from '@xstyled/styled-components';
import { space, SpaceProps } from '@xstyled/system';
import { SnapList, SnapItem, useScroll } from 'react-snaplist-carousel';

interface CarouselProps {
    children: any;
    className?: string;
}

const StyledCarousel = styled('div')<SpaceProps>`
    ${space}
`;

const CarouselItem = styled('div')`
    width: calc(100vw - 1rem);
    height: 200;
    background: #cccccc;
`;

const Dots = styled('span')`
    text-align: center;
    display: block;
`;

const Dot = styled('span')`
    height: 0.5rem;
    width: 0.5rem;
    display: inline-block;
    background-color: gray;
    border-radius: 50%;
    margin: 0.25rem;
`;

export const Carousel = ({children, className}: CarouselProps): React.ReactElement<CarouselProps> => {
    const snapList = React.useRef(null);
    const goToElement = useScroll({ ref: snapList });

    return (
        <StyledCarousel className={classNames('anchor-carousel', className)}>
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
                {children.map((_: any, i: number) => <Dot key={`dot-${i}`} onClick={() => goToElement(i)} />)}
            </Dots>
        </StyledCarousel>
    );
};
