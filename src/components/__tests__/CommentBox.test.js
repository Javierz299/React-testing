import React from 'react'
import { mount } from 'enzyme'

import CommentBox from 'components/CommentBox/CommentBox';
import Root from '../../Root'
let wrapped;

beforeEach(() => {
    wrapped = mount(<Root><CommentBox /></Root>);
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and two buttons', () => {
   expect(wrapped.find('textarea').length).toEqual(1);
   expect(wrapped.find('button').length).toEqual(2);
});

// group common tests and give own beforeEach; beforeEach stacks
describe('the text area',() => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: {value: 'new comment testing'}
        });
        wrapped.update();
    });
    it('has a textarea users can text in', () => {
            //onChange
    // wrapped.find('textarea').simulate('change', {
    //     target: {value: 'new comment testing'}
    // });//e.target.value
   // wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('new comment testing')
});

    it('clears the textarea after submiting form', () => {
    // wrapped.find('textarea').simulate('change',{
    //     target: {value: 'clear comment'}
    // });//provide text and then clear
   // wrapped.update();

    //can write assertion to make sure there is text in the textarea

    //submit should clear textarea
    wrapped.find('form').simulate('submit')
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('')
});
})
