import React from 'react';

class Buttons extends React.Component{
  // constructor(){
  //   super()
  // }
  render(){
    return(
      <div>
        <button className="small-button" onClick={this.props.djSmallClick}>DJ Small </button>
        <button className="small-button" onClick={this.props.partyDj}>Party DJ</button>
        <button className="small-button" onClick={this.props.leftDj}>Left Dj</button>
        <button className="small-button" onClick={this.props.rightDj}>Right Dj</button>

      </div>
    )
  }
}

export default Buttons
