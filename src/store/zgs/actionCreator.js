import axios from 'axios'
import {MEILI_DATA} from './const'
//import store from '../index'
export default {
    getData(){
        /* axios.get('/ml/jsonp/multiget/3?pids=5868%2C6348%2C43542%2C13730')
        .then(r=>{
            let data=JSON.parse( r.data.slice(5,-1) )
            console.log(121)
            store.dispatch({
                type:MEILI_DATA,
                data
            })
        })  */
        return dispatch=>{
            axios.get('/ml/jsonp/multiget/3?pids=5868%2C6348%2C43542%2C13730')
            .then(r=>{
                let data=JSON.parse( r.data.slice(5,-1) )
                // console.log(121)
                dispatch({
                    type:MEILI_DATA,
                    data
                })
            }) 
        }
    }
}