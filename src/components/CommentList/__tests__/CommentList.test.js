import React from 'react'
import { mount } from 'enzyme'

import CommentList from '../CommentList'
import Root from '../../../Root'

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentList />
        </Root>
    )
})

it('creates one item per comment', () => {
    //console.log("item",wrapped.find('li').length)
    expect(wrapped.find('li').length).toEqual(2)
});

it('shows the text for each comment',() => {
   // console.log(wrapped.render().text()); => test1test2
    // seperate toContain()
   expect(wrapped.render().text()).toContain('test1');
   expect(wrapped.render().text()).toContain('test2');

});