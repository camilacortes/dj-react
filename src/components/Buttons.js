import React from 'react';

class Buttons extends React.Component{
  // constructor(){
  //   super()
  // }
  render(){
    return(
      <>
        <div>
        <button className="small-button" onClick={this.props.djSmallClick}>DJ Small </button>
        <button className="small-button" onClick={this.props.partyDj}>Party DJ</button>
        <button className="small-button" onClick={this.props.leftDj}>Left Dj</button>
        <button className="small-button" onClick={this.props.rightDj}>Right Dj</button>
        <button className="small-button" onClick={this.props.bigDjOne}>Big Dj one</button></div>
        <div className="button-split">
        <button className="small-button" onClick={this.props.bigDjTwo}>Big Dj Two</button>
        <button className="small-button" onClick={this.props.bigDjThree}>Big Dj Three</button>
        <button className="small-button"  onClick={this.props.bigDjFour}>Big Dj Four</button>
        {/* <audio className="audio" source src="/Users/camilacortes/Documents/tameimpala.mp3 " type="audio/ogg">
        </audio> */}
        </div>

     </>
    )
  }
}

export default Buttons
