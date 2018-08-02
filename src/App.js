import React from 'react';
import './App.css';
import List from './components/List';
import CategoryButton from './components/CategoryButton';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.filterList= this.filterList.bind(this);
    this.state = {
      list: [
        {
          name:"Cereales con chocolate",
          description: "Cereales rellenos de chocolate",
          quantity: 2,
          category: "Cereales",
          price: 4
        },
        {
          name:"Hamburguesa con queso",
          description:"Hamburguesa rica y saludable",
          quantity:1,
          category:"Fast-food",
          price:15
        },
        {
          name:"Agua mineral",
          description:"Agua de un charco del Himalaya",
          quantity:2,
          category:"Bebida",
          price:5
        },
        {
          name:"Coca-cola",
          description:"Coca cola de un charco del Himalaya",
          quantity:5,
          category:"Bebida",
          price:7
        }
      ]
    };
  }

  filterList(categoryToFilter) {
    const newListFiltered = this.state.list.filter(listElement => {
      return listElement.category.toLowerCase() === categoryToFilter.toLowerCase();
    });
    this.setState({
      list: newListFiltered
    });
  }
  render() {
    return (
      <div className="ItemList">
        <ul className="item-list">
          {this.state.list.map(
            function(item){
              return (
                <List  name= {item.name} description= {item.description} quantity= {item.quantity} category= {item.category} price= {item.price}
                />
              );
            }
          )}
        </ul>
        <CategoryButton filterList={this.filterList} category='Bebida'/>
      </div>
    );
  }
}

export default ItemList;
