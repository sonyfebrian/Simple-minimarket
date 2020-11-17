import React, { Component } from 'react';

class Products extends Component{

    
    handleUpdate = () => {
        this.props.updateUser(this.indexNum, this.name.value, this.stock.value);
    }

    render(){

        const {allUsers, pressEditBtn, pressDelete} = this.props;

        const usersList = allUsers.map((user, index) => {

            return user.isEditing === true ? (
                
                <tr  key={index}>
                    <td><input type="text" ref={(val) => {this.name = val}} required defaultValue={user.name}/></td>
                    <td><input type="number" ref={(val) => {this.stock = val}} required defaultValue={user.stock}/></td>
                    <td>
                    <input type="button" value="Update" onClick={this.handleUpdate} ref={() => {this.indexNum = index}} className="btn green"/>
                    </td>
                </tr>  

            ) : (

                <tr  key={index}>
                    <td>{user.name}</td>
                    <td>{user.stock}</td>
                    <td><button className="btn white black-text" onClick={() => pressEditBtn(index)}>Edit</button>  |  <button className="btn red" onClick={()=>pressDelete(index)}>Delete</button></td>
                </tr>

            );
        });

        return(
            <table className="striped">
                <thead>
                    <tr>
                    <th>Name Product</th>
                    <th>stock Product</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {usersList}
                </tbody>
            </table>
        );
    }
}

export default Products;