
import React, {Component} from 'react';
import './app.css';




class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count:0,
      ColorHolder: '#fff'
    };
    this.increment=this.increment.bind(this);
    this.decrement=this.decrement.bind(this);
    this.reset=this.reset.bind(this);


  }
  increment(){
    this.setState({count:this.state.count+1})
    var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    this.setState({
      ColorHolder: ColorCode
    })
  }
  decrement(){
     this.setState({count:this.state.count-1})
     var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
     this.setState({
       ColorHolder: ColorCode
     })
  }
  reset(){
    this.setState({count:0})
    var ColorCode = 'rgb(' + (255) + ',' + (255) + ',' + (255) + ')';
    this.setState({
      ColorHolder: ColorCode
    })
  }
 
 



  render(){
    return(
      <div>
      <div className='counter' style={ {backgroundColor: this.state.ColorHolder}}>
      <h1>Count:{this.state.count}</h1>
      </div>
      <div className='buttons'>
      <button className='button' onClick={this.increment}>+</button>
      <button className='button' onClick={this.decrement}>-</button>
      <button className='button' onClick={this.reset}>reset</button>
      </div>
      
      </div>
    );
  }
}
export default App;