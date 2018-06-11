import { ListView,Toast } from 'antd-mobile';
import React,{Component} from 'react'
//import {connect} from 'react-redux'
//import { StickyContainer, Sticky } from 'react-sticky';
import './index.scss'
import axios from 'axios'
import ImgBox from './ImgBox'
import {withRouter} from 'react-router-dom'
import BackTop from '../../../../modules/BackTop'
class GoodLists extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
        dataSource,
        isLoading: true,
        lists:[],
        index:0,
        type:['pop','new','sell'],
        pageNum:1,
        isBackTopShow:false
    };
    //this.backTop=this.backTop.bind(this)
    this.scroll=this.scroll.bind(this)
  }
    get(index){
        Toast.loading('Loading',0)
        let {pageNum}=this.state
        axios.get(
            '/aa/search?cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=c095fd96-b705-4d00-9749-3a19183e6d2c&_=1524724196606',
            {
                params:{
                    frame:pageNum,page:pageNum,sort:this.state.type[index]
                }
            }
        ).then(r=>{
            Toast.hide()
            //this.setState({lists:r.data.data.list} )
            this.rData=this.rData?
            this.rData.concat(r.data.data.list):r.data.data.list
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false
            });
        })
        
    }
    componentWillMount(){
        let index=this.props.match.params.type?
        Number(this.props.match.params.type):0
        //console.log(index)
        this.setState({index})
        this.get(index)
    }
    componentWillReceiveProps(props){
        let index=props.match.params.type?
        Number(props.match.params.type):0
        var i=this.state.index
        if(index===i) return false
        this.setState({index})       
        this.get(index)
    }
  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.dataSource !== this.props.dataSource) {
  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
  //     });
  //   }
  // }

  onEndReached = (event) => {//滑动到底部的时候执行
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    let pageNum=++this.state.pageNum
    this.setState({ isLoading: true,pageNum});
    this.get(this.state.index)
  }
  click(i){
    //if(i===this.props.index) return false
    this.setState({index:i,pageNum:1})
    this.rData=null
    //console.log(i,this.state.index)
    //this.get()
    //console.log(this.props)
    this.props.history.push({pathname:'/index/list/'+i})
  }
  scroll(e){
      //console.log(document.documentElement.scrollTop)
      let st=document.documentElement.scrollTop||document.body.scrollTop
    if(st>300){
        if(this.state.isBackTopShow) return
        this.setState({isBackTopShow:true})
    }else{
        if(!this.state.isBackTopShow) return
        this.setState({isBackTopShow:false})
    }
  }
    // toDetail (iid) {
    //     this.props.history.push({pathname: `/detail/${iid}`})
    // }
  render() {
    const row = (rowData, sectionID, rowID) => {

      let list=rowData
      return (                             
            <ImgBox  info={list} key={list.iid}/>                                       
      );
    };
    let {style}=this.props
    let {index,isBackTopShow}=this.state
    //console.log(this.state)
    return (
        <div className='goodlist'> 
            <div className="title">
            {/* <StickyContainer><Sticky> */}
            
            {
                style.map((item,i)=>{
                    return <span key={i}
                        className={i===index?'active':''}
                        onClick={this.click.bind(this,i)}
                    >
                    {item}</span>
                })
            }
                        
            {/*</  Sticky> </StickyContainer> */}           
        </div>   
        <ListView
            ref={el => this.lv = el}
            dataSource={this.state.dataSource}
            renderFooter={() => (<div style={{ paddingLeft: 146, textAlign: 'center' }}>
                {this.state.isLoading ? 'Loading...' : 'Loaded'}
            </div>)}
            renderRow={row}
            className="listbox"
            pageSize={4}
            useBodyScroll
            onScroll={this.scroll}
            scrollRenderAheadDistance={500}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={10}
        />
        {!isBackTopShow||<a className='backTop' 
        onClick={BackTop.bind(this,this.lv)}>☂</a>}
      </div>
    );
  }
}
GoodLists.defaultProps={
    style:['流行','新款','精选'],
    index:0
}
export default withRouter(GoodLists)