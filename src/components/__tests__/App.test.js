import { shallow } from 'enzyme'
import App from '../../App'
import CommentBox from '../CommentBox/CommentBox'
import CommentList from '../CommentList/CommentList'

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
})

it('has one CommentBox', () => {
  //const wrapped = shallow(<App />)
  //find an instance of the component, find returns an array
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('has one CommentList', () => {
 // const wrapped = shallow(<App />)

  expect(wrapped.find(CommentList).length).toEqual(1);
})
