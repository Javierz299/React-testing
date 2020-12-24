import React from 'react'
import { mount } from 'enzyme'
import Root from '../Root'
import App from '../App'

it('can fetch a list of comments and display item name', () => {
        //attempt to render the *entire* app
        const wrapped = mount(
            <Root>
                <App />
            </Root>
        )
        //find the fetchcomments button and click it

        //Expect to find list of comments
});