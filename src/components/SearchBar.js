import React from "react";
export default class SearchBar extends React.Component {
  
  constructor(props){
    super(props);
    this.onSubmit=this.onSubmit.bind(this);
    this.state={term:""};
    //console.log(props)
  }
  onSubmit(e){
    e.preventDefault();
    this.ali="ali"
    this.props.parentMethod(this.state.term);
  }
//   componentDidMount(){
//     this.setState({season:new Date().getMonth()});
//     console.log("componentDidMountSearchBar  "+this.props.lat);
//   }
  render(){
    return(
        <div className="ui segment">
            <form onSubmit={this.onSubmit} className="ui form">
                <div className="field">
                    <label htmlFor="">image search</label>
                    <input type="text" onChange={(e)=>{this.setState({term: e.target.value});}} value={this.state.term}/>
                </div>
            </form>
        </div>
    );
  }
}