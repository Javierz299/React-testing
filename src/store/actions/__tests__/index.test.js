import * as ACTION_TYPES from '../action_type'
import * as ACTIONS from '../actions'

describe('saveComment', () => {
    it('has correct type',() => {
        const action = ACTIONS.save_comment();

        expect(action.type).toEqual(ACTION_TYPES.SAVE_COMMENT)


    });

    it('has correct payload',() => {
        const action = ACTIONS.save_comment('new comment');

        expect(action.payload).toEqual('new comment')
    })
})
