
import React,{Component} from 'react'
import './index.scss'
import { Link } from "react-router-dom";
class Login extends Component {
    constructor(props){
        super(props)
        this.back=this.back.bind(this)
        this.login=this.login.bind(this)
    }
    back(){
        this.props.history.goBack()
    }
    login(){
        //console.log(this.user.value,this.pw.value)
        var user=this.user.value,
            pw=this.pw.value,
            ls=localStorage[user]
        console.log(ls)
        if(user==='' && pw===''){
            alert('账号或密码为空')
        }else if(ls!==pw){
            alert('账号或密码错误')
        }else{
            alert('登录成功')
            this.props.history.replace('/mine')
            localStorage.now=user
        }
    }
    render() {
        return(
            <div className='mine'>
                <div className="top">
                    <span onClick={this.back}>〈</span>
                    <span className='top-login'>登录</span>
                    <span>忘记密码</span>
                </div>
                <div className="content">
                    <div className="account">
                        <p>美丽说账号</p>
                        <input type="text" placeholder='输入用户名/邮箱/手机'
                        ref={el=>this.user=el}/>
                    </div>
                    <div className="account">
                        <p>密码</p>
                        <input type="password" placeholder='输入密码'
                        ref={el=>this.pw=el}/>
                    </div>
                    <button onClick={this.login}>登录</button><br/>
                    <div className='info'>
                        <span>免密登录</span>
                        <Link className='regi' to='/register'>注册账号</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login