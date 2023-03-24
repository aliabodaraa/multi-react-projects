import React from "react";
export default class SeasonDisplay extends React.Component {
constructor(props){             
  super(props);
  this.state={season:null};
}
componentDidMount(){
    this.setState({season:this.getSeason(this.props.lat,new Date().getMonth())});
    console.log("componentDidMountSeasonDisplay  "+this.props.lat);
  }
//   componentDidUpdate(){
//     console.log("componentDidUpdateSeasonDisplay  "+this.state.lat);
//   }
  getSeason(lat,month){
    if(month>2 && month<9)
        return lat>0 ? "summer":"winter";
    else
        return lat>0 ? "":"summer";
  }
  render(){
    let season =this.getSeason(this.state.lat,new Date().getMonth());
    // let text=season==="winter" ? 'Burr, it is chilly':'lets hit the beach';
    // let icon=season==="winter" ? <i className="snowflake icon"></i>:<i className="sun icon"></i>;
    let seasonConfig={
        winter:{
            text:"Burr, it is chilly",
            iconClass: "snowflake"
        },
        summer:{
            text:"lets hit the beach",
            iconClass: "sun"
        }
    }
    let {text,iconClass:iconsName}=seasonConfig[season];
    return(
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconsName} icon`}></i>
            {text}
            <i className={`icon-right massive ${iconsName} icon`}></i>
        </div>

    );
  }
}