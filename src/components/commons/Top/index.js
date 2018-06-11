import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import HistoryBack from '../../../modules/HistoryBack'
class Top extends Component {
    render(){
        let {title,other}=this.props.info
        return (
            <div className="top">
                <span onClick={HistoryBack.bind(this)}>〈</span>
                <span className='top-login'>{title}</span>
                <span>{other}</span>
            </div>
        )
    }
    
}
export default withRouter(Top)