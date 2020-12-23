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
    console.log("item",wrapped.find('li').length)
})