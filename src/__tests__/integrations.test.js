import React from 'react'
import { mount } from 'enzyme'
import Root from '../Root'
import App from '../App'

import moxios from 'moxios'

// If test fails.. its because moxios does take a tiny bit of time
// to make request.
// E.g => Request issued , test suite checks to see if 2 items are
//                     visible(nope,failure),
// 
beforeEach(() => {
    moxios.install();
    //intercept request
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments',{
        status: 200,
        response: [{name: 'Fetched #1'}, { name: 'Fetched #2'}]
    });
    //can stub out other request, dont use same response as above
    

});

afterEach(() => {
    moxios.uninstall();
});

//testing is using a mock browser can't make ajax request
//within js dom
//use moxios (axios) tricks api call to work with test // invoke done when done
it('can fetch a list of comments and display item name', (done) => {
        //attempt to render the *entire* app
        const wrapped = mount(
            <Root>
                <App />
            </Root>
        );
        //find the fetchcomments button and click it
        wrapped.find('.fetch_comments').simulate('click');

        //introduce tiny pause.. if test fails due to delay
        //tell jest to hold on for setTimeout with done()
        //other wise jest runs every line with out waiting
        // setTimeout(() => {
        //     wrapped.update();
        //     expect(wrapped.find('li').length).toEqual(4);
            
        //     done();
        //     wrapped.unmount(); //clean up, unmount
        // }, (500));
        
        //instead of setTimeout
        moxios.wait(() => {
            wrapped.update();

            expect(wrapped.find('li').length).toEqual(4);

            done();
            wrapped.unmount(); //clean up, unmount
        })

        //Expect to find list of comments
        //expect(wrapped.find('li').length).toEqual(2);
});