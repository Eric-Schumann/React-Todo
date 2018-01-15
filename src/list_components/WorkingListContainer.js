import React from 'react';
import WorkingListItem from './WorkingListItem.js';

const WorkingListContainer = ({ listItems, removeItem }) => {

    let items = listItems.map((name, index) => {
        return (
            <WorkingListItem key={ index } name={ name } removeItem={ removeItem } index={ index }/>
        );
    });

    if(listItems.length > 0) {
        return (
            <div id="working-list">
                <h1>Todo List</h1>
                <ul>
                    { items }
                </ul>
            </div>
        );
    } else {
        return null;
    }
}

export default WorkingListContainer;