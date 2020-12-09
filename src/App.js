import './App.css';
import React, { Component } from 'react';
import ListItem from './components/ListItem'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      
      toDoItemArray: props.theList,
      newItem: ''
    
     
    }
   console.log(props.theList);
}



  clearList (e) {
    this.setState({
      toDoItemArray: []
    })
  }

  newItemChange = (e) => {
        
    this.setState({newItem: e.target.value})
  }  
  
  addItem(e) {
    // prevent the event from running the default "submit" event.
    e.preventDefault()
    let newArray = this.state.toDoItemArray;
    newArray.push(this.state.newItem);
    console.log(newArray);
    this.setState({toDoItemArray: newArray})
  
  }



  render() {
    let todoItems = this.state.toDoItemArray.map( (item, index) => (
      <ListItem doThis={item} key={index} />
    ))

    return (
      <div>
      <header>My List</header>
      <div>
        <ul>
          {todoItems}
        </ul>
          <button onClick={(e) => this.clearList(e)}>Finished the list!</button>

          <form>
            <input type="text" placeholder="Type an item here" onChange={(e) => this.newItemChange(e)} value={this.state.newItem}/>
            <button onClick={(e) => this.addItem(e)}>Add it!</button>
          </form>
      </div>
    </div>
    );
  }
}

// class App extends Component {

// }

export default App;
