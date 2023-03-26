import React from "react";
import youtube from '../api/youtube'
import SearchBar from "./SearchBar"
import VideosList from "./VideosList"
import VideoDetail from "./VideoDetail";

export default class App extends React.Component {
  state={videos:[],selectedVideo:null};
  componentDidMount(){
      this.handleSubmit("buildings");
  }
  async handleSubmit(term){
    console.log(term);
    let response=await youtube.get("/search",{
      params:{q : term},
    });console.log(response);
    // response.catch((e)=>{
    //   console.log("error");
    // });
    this.setState({videos:response.data.items,selectedVideo:response.data.items[0]});
    //console.log(this,"ali1");//the result is parentMethod : {async handleSubmit,guessIamI="guessIamI"}
  }
  onVideoSelected(video){
    this.setState({selectedVideo:video});
  }
  render(){
    return (
      <div className="ui container" style={{ marginTop:"10px" }}>
        <SearchBar parentMethod={this.handleSubmit.bind(this)} guessIamI="guessIamI"/>               {/* <SearchBar parentMethod={()=>this.handleSubmit()}/> */}
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo}/></div>
            </div>
            <div className="five wide column">
              <VideosList videos={this.state.videos} onVideoSelected={this.onVideoSelected.bind(this)}/>
            </div>
          </div>
        </div>
    );
  }
}
//xolve the binding issue :
// 1.replace normal function with `arrow` let handleSubmit=async(term)=>{...}
// 2. `bind` this.handleSubmit in constructor this.handleSubmit=this.handleSubmit.bind(this)
// 3.`bind` this.handleSubmit in where you invoke it <SearchBar parentMethod={this.handleSubmit.bind(this)}/>
// 3. wrap the child component(that you invoked ) with arrowFunction <SearchBar parentMethod={()=>this.handleSubmit.bind(this)(arguments)}/>
 