import React from 'react';

const WorkingListItem = ({ name, removeItem, index }) => {
    return (
        <li onClick={() => removeItem(index) }>{ index + 1 }. { name }</li>
    );
}

export default WorkingListItem;