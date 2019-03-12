import React, { Component } from 'react';
import './App.css';
import ItemForm from './ItemList'
import List from './List'
class App extends Component {
  state = { items:[
  {id: 1, name: "chicken", mark: false}, 
  {id: 2, name: "milk", mark: false}, 
  {id: 3, name: "cheese", mark: false},
],
};
 
getUniqId = () => {
  //NOTE We are just using this as a helper function for id's since we aren't using a db yet
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
 }

 addItem = (name) => {
  const { items } = this.state;
  const item = { name, id: this.getUniqId() , complete: false }
  this.setState({ items: [item, ...items] }); 
  }

  render() {
    const { items } = this.state;
    return (
      <div className="App">
      <ItemForm addItem={this.addItem} />
      <List name="List" items={items} />
      </div>
    )
  }
};


export default App;
