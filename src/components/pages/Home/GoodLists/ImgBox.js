
import React from 'react'
import {
    Link
} from 'react-router-dom'


export default props=>{
    let {info}=props
    let {iid} = props.info
    return(
        <Link to={"/detail/"+iid}  className='imgbox'>
            <img src={info.show.img} alt=""/>
            <p>{info.title}</p>
            <div>
                <div className='price'>{info.price}</div>
                <div>☆{info.cfav}</div>
            </div>
        </Link>
    )
}