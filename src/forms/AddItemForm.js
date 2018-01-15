import React, { Component } from 'react';

class AddItemForm extends Component {

    render() {
        return (
            <div className="form">
                <form onSubmit={(event) => this.addItem(event) }>
                    <input type="text" name="newItem" />
                    <button type="submit">Add Item</button>
                </form>
            </div>
        );
    }

    addItem = (e) => {
        e.preventDefault();
        let item = e.target.newItem;
        this.props.handleAddItem(item.value);
        item.value = "";
        item.focus();
    }
}

export default AddItemForm;