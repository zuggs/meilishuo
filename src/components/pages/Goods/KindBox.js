import React,{Component} from 'react'
import { Link } from "react-router-dom";
class KindBox extends Component {
    render() {
        let {title,image}=this.props.info
        //console.log(this.props.info)
        return(
            <Link className='class_img' to='/goodlist/123'>
                <img src={image} alt=""/>
                <p>{title}</p>
            </Link>          
        )
    }
}

export default KindBox