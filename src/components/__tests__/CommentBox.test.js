import React from 'react'
import { mount } from 'enzyme'

import CommentBox from 'components/CommentBox/CommentBox';

let wrapped;

beforeEach(() => {
    wrapped = mount(<CommentBox />);
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and a button', () => {
   expect(wrapped.find('textarea').length).toEqual(1);
   expect(wrapped.find('button').length).toEqual(1);
});

it('has a textarea users can text in', () => {
                                    //onChange
    wrapped.find('textarea').simulate('change', {
        target: {value: 'new comment testing'}
    });//e.target.value

    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('new comment testing')
});

it('clears the textarea after submiting form', () => {
    wrapped.find('textarea').simulate('change',{
        target: {value: 'clear comment'}
    });//provide text and then clear
    wrapped.update();

    //submit should clear textarea
    wrapped.find('form').simulate('submit')
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('')
});