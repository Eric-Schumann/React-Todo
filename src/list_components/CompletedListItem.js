import React from 'react';

const CompletedListItem = ({ name, index }) => {
    return (
        <li>{ index + 1 }. { name }</li>
    );
}

export default CompletedListItem;