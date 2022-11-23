import React from "react";

class HistoryList extends React.Component {
   constructor(props) {
      super(props)
      this.pushExp = this.pushExp.bind(this);
      this.removeItem = this.removeItem.bind(this);
   }

   pushExp() {
      this.props.exp({exp:this.props.item.exp,result:this.props.item.result});
   }
   removeItem(e){
      this.props.removeItem(e.target.parentNode.getAttribute('id'));
      // this.props.removeItem('value');
   }

   render() {
      return (
         <li className="listItem" id={this.props.item.id}>
            <p>{this.props.item.exp}={this.props.item.result}</p>
            <button className="removeListItem" onClick={this.removeItem}>&#128465;</button>
            <button className="pushOnInput" onClick={this.pushExp}>&#xbb;</button>
         </li>
      )
   }
}

export default HistoryList;