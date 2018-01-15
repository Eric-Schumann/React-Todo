import React, { Component } from 'react';
import _ from 'lodash';
import AddItemForm from './forms/AddItemForm.js';
import WorkingListContainer from './list_components/WorkingListContainer.js';
import './App.css';
import CompletedListContainer from './list_components/CompletedListContainer';

class App extends Component {

  constructor() {
    super();

    this.state = {
      newItem: '',
      workingList: [],
      completedList: []
    };

  }

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <AddItemForm handleAddItem={ this.handleAddItem.bind(this) }/>
        <WorkingListContainer 
          removeItem={ this.removeItem.bind(this) } 
          listItems={ this.state.workingList }
        />
        <CompletedListContainer
          completedList={ this.state.completedList }
          clearCompleted={ this.clearCompleted.bind(this) }
        />
      </div>
    );
  }

  handleAddItem(item) {
    console.log(item);
    let currentList = this.state.workingList;
    currentList.push(item);
    this.setState({ workingList: currentList });
  }

  removeItem(index) {

    let currentWorkingList = this.state.workingList;
    console.log("Current Working Before Removal: ", currentWorkingList);
    let removedItem = _.pullAt(currentWorkingList, index);
    console.log("Removing: ", removedItem);
    console.log("Current Working After removal: ", currentWorkingList);
    
    this.setState({ workingList: currentWorkingList });

    let currentCompletedList = this.state.completedList;
    currentCompletedList = _.concat(currentCompletedList, removedItem);
    console.log("Current Completed: " , currentCompletedList);
    this.setState({ completedList: currentCompletedList });


  }

  clearCompleted() {
    this.setState({ completedList: [] });
  }

}

export default App;
