import React from 'react';
import CompletedListItem from './CompletedListItem.js';

const CompletedListContainer = ({ completedList, clearCompleted }) => {

    let items = completedList.map((name, index) => {
        return (
            <CompletedListItem key={ index } name={ name } index={ index }/>
        );
    });

    if(completedList.length > 0) {
        return (
            <div id="completed-list">
                <h1>Completed Items</h1>
                <button onClick={() => clearCompleted() }>Clear Completed</button>
                <ul>
                    { items }
                </ul>
            </div>
        );
    } else {
        return null;
    }
}

export default CompletedListContainer;