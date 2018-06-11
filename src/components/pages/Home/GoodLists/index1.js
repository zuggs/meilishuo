
import React,{Component} from 'react'
import {connect} from 'react-redux'
import './index.scss'
import axios from 'axios'
import ImgBox from './ImgBox'
import {withRouter} from 'react-router-dom'
class GoodLists extends Component {
    constructor(props){
        super(props)
        this.state={
            lists:[],
            index:0,
            type:['pop','new','sell']
        }
    }
    componentWillMount(){
        let index=this.props.match.params.type?
        Number(this.props.match.params.type):0
        //console.log(index)
        this.setState({index})
        this.get(index)
    }
    componentWillReceiveProps(props){
        let index=Number(props.match.params.type)
        console.log(index)
        this.setState({index})
        
        this.get(index)
    }
    get(index){
        axios.get(
            '/aa/search?cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=c095fd96-b705-4d00-9749-3a19183e6d2c&_=1524724196606',
            {
                params:{
                    frame:1,page:1,sort:this.state.type[index]
                }
            }
        ).then(r=>{
            this.setState({lists:r.data.data.list} )
            //console.log(r.data.data.list)
        })
        
    }
    click(i){
        //if(i===this.props.index) return false
        this.setState({index:i})
        //console.log(i,this.state.index)
        //this.get()
        //console.log(this.props)
        this.props.history.push({pathname:'/index/list/'+i})
    }
    render() {
        let {lists,index}=this.state
        let {style}=this.props
        //console.log(this)
        return(
            
           <div className='goodlist'>
                <div className="title">
                    {
                        style.map((item,i)=>{
                            return <span key={i}
                                className={i===index?'active':''}
                                onClick={this.click.bind(this,i)}
                             >
                             {item}</span>
                        })
                    }
                </div>
                <div className='listbox'>
                    {
                        lists.map((list,i)=>{
                            return<ImgBox info={list} key={i}/>
                        })                                        
                    }
               </div>
               
           </div>
        )
    }
}
GoodLists.defaultProps={
    style:['流行','新款','精选'],
    index:0
}
export default withRouter(GoodLists)