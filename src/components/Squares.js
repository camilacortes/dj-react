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
    this.bigDjOne = this.bigDjOne.bind(this)
    this.bigDjTwo = this.bigDjTwo.bind(this)
    this.bigDjThree = this.bigDjThree.bind(this)
    this.bigDjFour = this.bigDjFour.bind(this)

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
  this.setState(prevState =>{
    return{
      colors: prevState.colors = ['purple', 'purple', 'blue', 'black']
    }
  })
}

rightDj(){
  this.setState(prevState =>{
    if(this.state.colors[2] !== 'blue'){
      return{
        colors: prevState.colors = ['purple', 'purple', 'white', 'blue']
      }
    } else {
      return{
         colors: prevState.colors = ['purple', 'purple', 'blue', 'blue']
      }
    }
  })
}

bigDjOne(){
  this.setState(prevState =>{
    return{
      colors: prevState.colors = ['red', 'blue', 'red', 'blue']
    }
  })
}

bigDjTwo(){
  this.setState(prevState =>{
    return{
      colors: prevState.colors = ['white', 'blue', 'white', 'blue']
    }
  })

}

bigDjThree(){
  this.setState(prevState =>{
    return{
      colors: prevState.colors = ['purple', 'blue', 'blue', 'purple']
    }
  })

}

bigDjFour(){
  // where audio would go but it doesn't work with the .play() func
  // const audio = document.getElementsByClassName('audio');
  // audio.play();
  this.setState(prevState =>{
    return{
      colors: prevState.colors = ['blue', 'red', 'red', 'blue']
    }
  })

}





    render(){
      const createSquare = this.state.colors.map((color, index) => (
        <SquareRender key={index} colors={color}/>
     ))
      return(
        <div className="container">
          {createSquare}
          <Buttons colors={this.state.colors} djSmallClick={this.djSmallClick} partyDj={this.partyDj} leftDj ={this.leftDj} rightDj={this.rightDj} bigDjOne={this.bigDjOne} bigDjTwo={this.bigDjTwo} bigDjThree={this.bigDjThree} bigDjFour={this.bigDjFour}/>

        </div>
      )

  }  

}



export default Squares