
import React,{Component} from 'react'
import {connect} from 'react-redux'
import './index.scss'
class NavList extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[],
            data:this.props.zgs.data.data
        }

        //if(data){
           /*  let list=data["13730"].list
            console.log(list)
            this.setState({list})  */
        //}
    }
    componentWillMount(){
        
    }
    componentWillReceiveProps(props,state){
        //console.log(props.zgs.data.data,2131)
        if(props.zgs.data.data){
            let list=props.zgs.data.data["13730"].list
            //console.log(typeof list)
            this.setState({list})
        }
        
    }
    render() {
        let {list}=this.state
        let a=this.props.zgs.data.data
        if(a){
            list=a["13730"].list
        }
        return(
            <div className='navlist'>
                {
                    list.map(item=>{
                        return (
                            <div key={item.sort}>
                                <img src={item.image} alt=""/>
                                <p>{item.title}</p>
                            </div>
                        )
                    })
                }
                
            </div>
        )
    }
}

export default connect(state=>state)(NavList)