import React from "react";
import Model from 'react-modal';
import { Link, NavLink } from 'react-router-dom';

class App extends React.Component {

   constructor(props) {
      super(props)
      this.calculateNumber = this.calculateNumber.bind(this);
      this.state = {
         result: 0
      }
   }

   async calculateNumber(e) {

      let value = document.querySelector('.inputField');

      if (e.type === 'click') {
         const valueFromButton = e.target.textContent;
         value.value = value.value + valueFromButton
      }

      let valueBuffer = value.value

      const regx = /^(([\-\+]){1})?([0]{0,1}(\.{0,1})?)([0-9]{1,}[\-\+\/\*\.][0-9]{0,}){0,}[0-9]$/gm
      let isright = valueBuffer.match(regx);

      if (!!isright) {
         let result = await eval(valueBuffer);
         this.setState({ result });
      } else {
         this.setState({ result: 0 })
      }
   }

   clearText(){
      let value = document.querySelector('.inputField');
      value.value = '';
   }

   render() {
      return (
         <div className="app">
            <div className="calculator">
               <h2>Simple Calculator</h2>
               <div className="inputFieldNumber">
                  <input type="text" className="inputField" placeholder="0" onKeyUp={this.calculateNumber} />
                  <button onClick={this.clearText}>x</button>
               </div>
               <div className="result">{this.state.result}</div>
               <div className="numpad">
                  <div className="inputNumber">
                     <button className="number" onClick={this.calculateNumber} value={0} >0</button>
                     <button className="number" onClick={this.calculateNumber} value={1} >1</button>
                     <button className="number" onClick={this.calculateNumber} value={2} >2</button>
                     <button className="number" onClick={this.calculateNumber} value={3} >3</button>
                     <button className="number" onClick={this.calculateNumber} value={4} >4</button>
                     <button className="number" onClick={this.calculateNumber} value={5} >5</button>
                     <button className="number" onClick={this.calculateNumber} value={6} >6</button>
                     <button className="number" onClick={this.calculateNumber} value={7} >7</button>
                     <button className="number" onClick={this.calculateNumber} value={8} >8</button>
                     <button className="number" onClick={this.calculateNumber} value={9} >9</button>
                     <button className="number" onClick={this.calculateNumber} value='.' >.</button>
                     <button className="number" value='=' >=</button>

                  </div>
                  <div className="inputSymbol">
                     <button className="number" onClick={this.calculateNumber} value='+' >+</button>
                     <button className="number" onClick={this.calculateNumber} value='-' >-</button>
                     <button className="number" onClick={this.calculateNumber} value='*' >*</button>
                     <button className="number" onClick={this.calculateNumber} value='/' >/</button>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default App;