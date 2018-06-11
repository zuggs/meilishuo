
import React,{Component} from 'react'
import './index.scss'
class Register extends Component {
    constructor(props){
        super(props)
        this.back=this.back.bind(this)
        this.register=this.register.bind(this)
    }
    back(){
        this.props.history.goBack()
    }
    register(){
        //console.log(this.user.value,this.pw.value)
        var user=this.user.value,
            pw=this.pw.value
        if(user!=='' && pw!==''){
            localStorage[user]=pw
            this.props.history.replace('/login')
            alert('注册成功，请登录')
        }else{
            alert('账号或密码错误')
        }
    }
    render() {
        return(
            <div className='mine'>
                <div className="top">
                    <span onClick={this.back}>〈</span>
                    <span className='top-login'>新用户注册</span>
                    <span>...</span>
                </div>
                <div className="content">
                    <div className="account">
                        <p>你的手机号码是？</p>
                        <input type="text" placeholder='输入手机号码'
                        ref={el=>this.user=el}/>
                    </div>
                    <div className="account">
                        <p>密码</p>
                        <input type="password" placeholder='输入密码'
                        ref={el=>this.pw=el}/>
                    </div>
                    <button onClick={this.register}>一键注册</button><br/>
                    <div className='info'>
                        <span>返回登录</span>
                        <span className='regi'>免密登录</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register