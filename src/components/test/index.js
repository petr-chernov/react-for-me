import React from 'react';

class ShoppingList extends React.Component {
    
    render() {
        const {name, surname} = this.props;
      return (
        <div className="shopping-list">
          <h1>Список покупок для {name + ' ' +surname}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
      );
    }
  }
export default ShoppingList;