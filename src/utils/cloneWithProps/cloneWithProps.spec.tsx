// REACT
import * as React from 'react';
// SUBJECT
import { cloneWithProps } from './cloneWithProps';
// VENDOR
import { mount } from 'enzyme';

const Component = ({
    className,
    text,
}: {
    className?: string;
    text?: string;
}) => <span className={className}>{text}</span>;

describe('Util: cloneWithProps', () => {
    it('should clone an element.', () => {
        const subject = cloneWithProps(<Component />);
        expect(mount(subject)).toBeDefined();
    });

    it('should include provided props.', () => {
        const subject = cloneWithProps(<Component />, { text: 'Some Text' });
        expect(mount(subject).props().text).toEqual('Some Text');
    });

    it('should not override existing props', () => {
        const subject = cloneWithProps(<Component text="Existing Text" />, {
            text: 'Some Text',
        });
        expect(mount(subject).props().text).toEqual('Existing Text');
    });

    it('should include className with existing element className', () => {
        const subject = cloneWithProps(
            <Component className="anchor-component" />,
            { text: 'Some Text', className: 'test-class' }
        );
        expect(mount(subject).hasClass('anchor-component')).toEqual(true);
        expect(mount(subject).hasClass('test-class')).toEqual(true);
    });
});
