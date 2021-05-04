import "./styles.css";
import {Component} from 'react';

class App extends Component {
  constructor(props){
    super();
    this.state = {
      buttonClicked : false,
    }
  }

  

  //declare fuction
 handleClick = this.handleClick.bind(this);

//define function
  handleClick(){
   this.setState({
     buttonClicked: true,
   })
  }
  render(){

  return (
    <div className="App">
      <h1 className="text">App</h1>
      <div className="don">
      <h2>Start editing to see some magic happen!</h2>
      
      <button onClick = {this.handleClick}> Y'all bitches</button>
      <button> Y'all bitches</button>
      <button> Y'all bitches</button>
      
       </div>
       <div className="textBox">{this.state.buttonClicked ? <div> Button Clicked</div>: ""} </div>
    </div>
    
  );
  }
}

export default App;