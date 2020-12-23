import CommentsR from '../../reducers/commentsR'
import * as ACTIONS from '../../actions/action_type'

it('handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: ACTIONS.SAVE_COMMENT,
        payload: 'new comment'
    };

    const newState = CommentsR({comments: []},action);
    console.log('newState',newState)

    expect(newState).toEqual({"comments": ['new comment']})
});

