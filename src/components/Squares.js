import React from 'react';
import SquareRender from './SquareRender'
import Buttons from './Buttons'

class Squares extends React.Component{
  constructor(){
    super()
    this.state = {
      colors: ["white", "white", "white", "white"]
    }
    this.djSmallClick = this.djSmallClick.bind(this)
    this.partyDj = this.partyDj.bind(this)
    this.leftDj = this.leftDj.bind(this)
    this.rightDj = this.rightDj.bind(this)
  }
  
  djSmallClick(){
    if(this.state.colors[0] === 'white'){
    this.setState((prevState) => {
      return{
        colors: prevState.colors = ['black', 'black', 'white', 'black']
      }
    })
  } else if(this.state.colors[0] === 'black'){
    this.setState((prevState) =>{
      return{
        colors: prevState.colors = ['white', 'white', 'black', 'white']
      }
    })
  } else {
    this.setState(prevState =>{
      return{
        colors: prevState.colors = ['black', 'black', 'white', 'black']
      }
    })
  }
}                              


partyDj(){
  this.setState(prevState =>{
    return{
      colors: prevState.colors = ['purple', 'purple', 'white', 'black']
    }
  })
}


leftDj(){
  console.log('leftDj')
}

rightDj(){
  console.log('right')
}

    render(){
      const createSquare = this.state.colors.map((color, index) => (
        <SquareRender key={index} colors={color}  />
     ))
      return(
        <div className="container">
          {createSquare}
          <Buttons colors={this.state.colors} djSmallClick={this.djSmallClick} partyDj={this.partyDj} leftDj ={this.leftDj} rightDj={this.rightDj}/>

        </div>
      )

  }  

}



export default Squares