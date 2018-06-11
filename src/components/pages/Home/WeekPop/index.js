
import React,{Component} from 'react'
import {connect} from 'react-redux'
import './index.scss'
class WeekPop extends Component {
    constructor(props){
        super(props)
        this.state={
            //list:[],
            data:this.props.zgs.data.data
        }
    }
    componentWillReceiveProps(props,state){
        let list=props.zgs.data.data["13730"].list
        //console.log(list)
        this.setState({list})
    }
    render() {
        //let {list}=this.state
        return(
           <div></div>
        )
    }
}

export default connect(state=>state)(WeekPop)