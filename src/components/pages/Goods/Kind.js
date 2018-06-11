import React,{Component} from 'react'
import axios from 'axios'
import Top from '../../commons/Top'
import KindBox from './KindBox'
class Kind extends Component {
    constructor(props){
        super(props)
        this.state={
            lists:''
        }
    }
    get(){
        axios.get('/bb/venus/mce/v1/urlMakeUpChange/h5?channel=wap&page=1&pageSize=30&pid=43814&_=1524882773360')
        .then(r=>{
            this.setState({lists:r.data.value['category_1'].list})
        })
    }
    componentWillMount(){
        this.get()
    }
    kind(lists){
        if(lists){
            return lists.map( (item,i)=>{
                return <KindBox info={item} key={i}/>
            })
        }
    }
    render() {
        let {lists}=this.state
        //console.log(lists)
        return(
            <div className='kind'>
                <Top info={{title:'本季主推',other:'...'}}/>
                <div className='img-content'>
                    {
                        /* lists.map( (item,i)=>{
                            return <KindBox info={item} key={i}/>
                        }) */
                        this.kind(lists)
                    }
                </div>
            </div>          
        )
    }
}

export default Kind