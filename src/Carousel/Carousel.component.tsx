// VENDOR
import * as React from 'react';
import classNames from 'classnames';
import styled from '@xstyled/styled-components';
import { space, SpaceProps } from '@xstyled/system';
import { SnapList, SnapItem } from 'react-snaplist-carousel';

interface CarouselProps {
    children: any;
    className?: string;
}

const StyledCarousel = styled('div')<SpaceProps>`
    ${space}
`;

const CarouselItem = styled('div')`
    width: 100vw;
    height: 200;
    background: #cccccc;
`;

export const Carousel = ({children, className}: CarouselProps): React.ReactElement<CarouselProps> => {
    return (
        <StyledCarousel className={classNames('anchor-carousel', className)}>
            <SnapList direction="horizontal">
                {children.map((child: any, i: number) => (
                    <SnapItem snapAlign="center" className={`anchor-carousel-item-${i}`} key={`anchor-carousel-item-${i}`} margin={{right: '1rem'}}>
                        <CarouselItem>
                            {child}
                        </CarouselItem>
                    </SnapItem>
                ))}
            </SnapList>
        </StyledCarousel>
    );
};
