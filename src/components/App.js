import React, { Component } from 'react';
import Products from './Products';
import AddProduct from './AddProduct';

class App extends Component{

    // Default dummy data
    state = {

        products:[
          {name:"Pepsodent", stock:20, isEditing:false},
          {name:"Oreo", stock:30, isEditing:false},
          {name:"Tolak Angin", stock:10, isEditing:false}
    
        ]
      }
      
      addUser = (newUser) => {
            let products = [...this.state.products, newUser];
            this.setState({
                products
            });     
      }

      
      pressEditBtn = (i) => {
        let products = this.state.products;
        products[i].isEditing = true;
        this.setState({
            products
        });
      }

      
      updateUser = (i, name, stock) => {
        let products = this.state.products;
        products[i].name = name;
        products[i].stock = stock;
        products[i].isEditing = false;

        this.setState({
            products
        });

      }
      
      pressDelete = (i) => {
        let products = this.state.products.filter((u,index)=>{
            return index !== i;
        });
        this.setState({
            products
        });
      }

    render(){
        return(
            <div className="container">
                <h1>Simple Prototype Minimarket</h1>
                <Products allUsers={this.state.products} pressEditBtn={this.pressEditBtn} updateUser={this.updateUser} pressDelete={this.pressDelete} />
                <AddProduct addUser={this.addUser}/>
            </div>
        );
    }
}

export default App;