import React from "react";
import { v4 as uuidv4 } from 'uuid';
import Model from 'react-modal';
import { Link, NavLink } from 'react-router-dom';

import HistoryList from "./HistoryList";

class App extends React.Component {

   constructor(props) {
      super(props)
      this.calculateNumber = this.calculateNumber.bind(this);
      this.storeHistory = this.storeHistory.bind(this);
      this.pushExp = this.pushExp.bind(this);
      this.clearHistory = this.clearHistory.bind(this);
      this.removeItem = this.removeItem.bind(this);
      this.state = {
         result: 0,
         historyResult: []
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

   clearText() {
      let value = document.querySelector('.inputField');
      value.value = '';
   }

   storeHistory() {
      const inputValue = document.querySelector('.inputField');
      const result = document.querySelector('.result');

      let tempArr = this.state.historyResult;


      if (!!inputValue.value) {
         // let value = `${inputValue.value} = ${result.textContent}`;
         let value = {id:uuidv4(), exp: inputValue.value, result: result.textContent }

         this.setState({
            history: tempArr.push(value)
         })

         // console.log(this.state.historyResult);
         inputValue.value = '';
         result.textContent = 0
      }
   }

   pushExp(value) {
      const inputField = document.querySelector('.inputField')
      const resultField = document.querySelector('.result')

      inputField.value = value.exp;
      resultField.textContent = value.result;
   }

   clearHistory() {
      // console.log(1);
      this.setState({ historyResult: [] });
   }

   async removeItem(value){

      const newHistoryList = this.state.historyResult.filter(element=>{
         return element.id !== value;
      });

      await this.setState({historyResult:newHistoryList})
      
      console.log(this.state.historyResult)
   }

   render() {
      return (
         <div className="app">
            <div className="calcHistory">
               <ul className="calcHistoryLists">
                  {this.state.historyResult.map((item, index) => (
                     <HistoryList item={item} key={index} exp={this.pushExp} removeItem={this.removeItem}/>
                  ))}
                  {this.state.historyResult.length > 0 &&
                  <button onClick={this.clearHistory} className="btnHistoryClear">&#10006;</button>
                  }

               </ul>
            </div>
            <div className="calculator">
               <h2>Simple Calculator</h2>
               <div className="inputFieldNumber">
                  <input type="text" className="inputField" placeholder="0" onChange={this.calculateNumber} />
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
                     <button className="number" value='=' onClick={this.storeHistory}>=</button>

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