
import React,{Component} from 'react'
import { Link } from "react-router-dom";
import './index.scss'
class Mine extends Component {
    constructor(props){
        super(props)
        this.logOff=this.logOff.bind(this)
        this.state={
            isLogin:false
        }
    }
    componentWillMount(){
        if(!localStorage.now){
            this.props.history.push('/login')
        }
    }
    logOff(){
        this.setState({isLogin:!this.state.isLogin})
        localStorage.removeItem('now')
    }
    render() {
        let {lists}=this.props
        let user_now=localStorage.now
        return(
            <div className="user">
                <div className="user-header">
                <img src="http://img2.imgtn.bdimg.com/it/u=56128449,3787967333&fm=27&gp=0.jpg" alt=""/>
                { user_now ? 
                <div>{user_now}<a onClick={this.logOff}> &nbsp; 退出 </a></div> :
                <Link className="loginoff" to='/login'> 登录/注册</Link>}
                </div>
                <div className="user-lists">          
                {
                    lists.map(list=>{
                        return (
                            <div className="user-list" key={list.id}>
                                <div className="list-left">
                                    <i className='list.icon'></i>
                                    <span>{list.title}</span>
                                    </div>
                                    <i className="fa fa-angle-right list-right"></i>
                                </div>
                        )
                    })
                }                    
                </div>
          </div>
        )
    }
}
Mine.defaultProps={
    lists:[
        {id:1,title:'我的订单',icon:'fa fa-file-text-o'},
        {id:2,title:'优惠',icon:'fa fa-jpy'},
        {id:3,title:'我的订单',icon:'fa fa-copy'},
        {id:4,title:'我的收藏',icon:'fa fa-heart-o'},
        {id:5,title:'收货地址',icon:'fa fa-map-marker'},
        {id:6,title:'美丽达人',icon:'fa fa-user-circle-o'}
    ]
}
export default Mine