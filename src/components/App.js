import React from "react";
import axios from 'axios'
import SearchBar from "./SearchBar"
export default class App extends React.Component {
  constructor(props){
    super(props);
  }
  state={images:[]};
  async handleSubmit(term){
    let response=await axios.get("https://api.unsplash.com/search/photos",{
      params:{query : term},
      headers:{
        Authorization: "Client-ID pkU1oiB38nbIjBJ9dSxkREozQxUy13ltnwSmMoUajFw"
      }
    });
    //this.setState({images:response.data.results});
    console.log(this);//the result is parentMethod : {async handleSubmit,guessIamI="guessIamI"}
  }
  render(){
    return ( 
      <div className="ui container" style={{ marginTop:"10px" }}>
        <SearchBar parentMethod={this.handleSubmit} guessIamI="guessIamI"/>
        catch : {this.state.images.length }
      </div>
    );
  }
}
 