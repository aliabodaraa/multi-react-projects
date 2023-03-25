import React from "react";
import axios from 'axios'
import SearchBar from "./SearchBar"
export default class App extends React.Component {
  state={images:[]};
  async handleSubmit(term){
    let response=await axios.get("https://api.unsplash.com/search/photos",{
      params:{query : term},
      headers:{
        Authorization: "Client-ID pkU1oiB38nbIjBJ9dSxkREozQxUy13ltnwSmMoUajFw"
      }
    });
    this.setState({images:response.data.results});
    console.log(this);//the result is parentMethod : {async handleSubmit,guessIamI="guessIamI"}
  }

  render(){
    return (
      <div className="ui container" style={{ marginTop:"10px" }}>
        <SearchBar parentMethod={this.handleSubmit.bind(this)}/>
        catch : {this.state.images.length }
      </div>
    );
  }
}
//xolve the binding issue :
// 1.replace normal function with `arrow` let handleSubmit=async(term)=>{...}
// 2. `bind` this.handleSubmit in constructor this.handleSubmit=this.handleSubmit.bind(this)
// 3.`bind` this.handleSubmit in where you invoke it <SearchBar parentMethod={this.handleSubmit.bind(this)}/>
// 3. wrap the child component(that you invoked ) with arrowFunction <SearchBar parentMethod={()=>this.handleSubmit.bind(this)(arguments)}/>
 