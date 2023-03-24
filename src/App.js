import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

export default class App extends React.Component {
  state={lat:null,error:null};//calss property
  // constructor(props){                      //orfrom parent in constructor
  //   super(props);
  //   this.state={ate:null,error:null,isLoading:false}
  // }
  componentDidMount(){
    this.setState({lat:null})
    window.navigator.geolocation.getCurrentPosition((position)=>{
      this.setState({lat:position.coords.latitude})
    },(e)=>{
      if(e.message==='User denied Geolocation')
      this.setState({error:e.message})});
      console.log(" componentDidMountApp");
  }
  // componentDidUpdate(){
  //   console.log("componentDidUpdateApp",this.state);
  // }
  componentWillUnmount(){
    console.log("componentWillUnmountApp");
  }
  renderContent(){
    if(!this.state.error && this.state.lat){
      return (<SeasonDisplay lat={this.state.lat}/>);
    }else if(!this.state.error && !this.state.lat){
      return <Spinner mssg="please accept location request"/>;
    }else if(this.state.error && !this.state.lat){
      return (<div>err : {this.state.error}</div>  );
    }else{
      return <div>Failed</div>
    }
  }
  render(){
    return( 
      <div className="border-red">
        {this.renderContent()}
      </div>)
  }
}