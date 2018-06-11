import _state from './state'
import { MEILI_DATA } from './const'
export default ( state=_state,action ) => {
    let new_state=Object.assign({},state)
    switch(action.type){
        case MEILI_DATA:
            new_state.data=action.data
            //console.log(action.data,'ssss')
            break;
        default:           
    }
    //console.log(new_state)
    return new_state
}