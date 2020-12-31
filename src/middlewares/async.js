/// this is the way the auther of redux decided to use this structure/way  to create middleware
// export default function({ dispatch }) {
//     return function( next ){
//         return function( action ){

//         }
//     }
// }
const async = ({ dispatch }) => { // export default ({ dispatch }) => next => action => {...};
// dispatch takes an action and then calls the middlewares
    return ( next ) => {
        return ( action ) => {
            console.log('action',action)
            //check to see if the action has a promise on its payload property
            //if it does, then wait for it to resolve
            //if it doesnt, then send the action on to the next middleware

            if(!action.payload || !action.payload.then) { 
                // if the payload has a .then property, then we assume its a promise
                return next(action); //forward it on
            }

            //we want to wait for the promise to resolve
            //(get its data!!!) and then create a new action
            // with that data and dispatch it
            console.log('action',action.payload.then(r => console.log(r)))

            // dont need async await in action "fetch comments" with this
            // custom async middleware
            action.payload.then((response) => {
                const newAction = { ...action, payload: response };// overwrite the payload with the response
                //console.log('action',{...action})
                //console.log('newAction',newAction)
                dispatch(newAction); // kicks off the entire process again of middlewares
            })
            
        }
    }
}

export default async
