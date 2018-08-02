import React from 'react';

class CategoryButton extends React.Component {
  constructor(props){
    super(props);
    this.callParent= this.callParent.bind(this);
  }
  callParent() {
    this.props.filterList(this.props.category)
  }
  render() {
    return (
      <button onClick={this.callParent} className='filterButton'>Bebidas</button>
      );
  }
}

export default CategoryButton;
