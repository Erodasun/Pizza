import React, { useState } from 'react';
import '../App.css';
import pizzaImage from '../images/pizza.jpg';
import cartImage from '../images/order.png';  

const PizzaCard = () => {
  const [quantity, setQuantity] = useState(1);
  const [diameter, setDiameter] = useState('');
  const [price, setPrice] = useState(550); // Начальная цена - от 550 Р

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDiameterChange = (event) => {
    const newDiameter = event.target.value;
    setDiameter(newDiameter);

    // Обновляем цену в зависимости от выбранного диаметра
    switch (newDiameter) {
      case '25 см':
        setPrice(550);
        break;
      case '30 см':
        setPrice(700);
        break;
      case '35 см':
        setPrice(850);
        break;
      default:
        setPrice(550); // Если диаметр не выбран, возвращаем начальную цену
    }
  };

  const handleAddToCart = () => {
    if (!diameter) {
      alert('Пожалуйста, выберите диаметр пиццы');
      return;
    }

    const totalPrice = price * quantity;
    alert(`Количество заказанного товара: ${quantity}. Общая цена: ${totalPrice} ₽`);
  };

  return (
    <div className="pizza-card">
      <div className="pizza-image">
        <img src={pizzaImage} alt="Пицца" />
        <div className="hit-season">Хит сезона</div>
      </div>
      <h2>Пепперони</h2>
      <p>Ничего лишнего! Томатный соус, колбаски Пепперони и Моцарелла</p>
      <div className="pizza-options">
        <select id="diameter" value={diameter} onChange={handleDiameterChange} className="diameter">
          <option value="">Диаметр</option>
          <option value="25 см">25 см</option>
          <option value="30 см">30 см</option>
          <option value="35 см">35 см</option>
        </select>
        <p className="price">от {price} ₽</p> {/* Отображение текущей цены после выбора диаметра */}
      </div>
      <div className="quantity-control">
        <button onClick={handleDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrease}>+</button>
        <button className="add-to-cart" onClick={handleAddToCart}>
          <img src={cartImage} alt="В корзину" className="cart-image" />
        </button>
      </div>
    </div>
  );
};

export default PizzaCard;
