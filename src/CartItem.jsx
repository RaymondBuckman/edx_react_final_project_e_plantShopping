import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity, toggleDisabled } from './CartSlice';
import './CartItem.css';

// Task 3
// Next, you will complete the development of the CartItem.jsxcomponent which displays the items held in the shopping cart. This component has a number of functionalities that you find in a typical shopping cart:

//     Calculate the total for all items in the cart.
//     Calculate the subtotal for each plant type in the cart.
//     Continue shopping
//     Increment and decrement the number of each plant type in the cart
//     Remove (delete) a plant type from the cart altogether.

// You will dispatch the increment, decrement, and update quantity details from a Redux file.

const CartItem = ({ onContinueShopping, setShowCart, cartCount, setCartCount }) => {
    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();


    // 1. Calculate total amount for all products in the cart
    // In the calculateTotalAmount() you need a function to calculate the cost of all of the items in 
    // the cart. There are a number of ways you can calculate this.
    const calculateTotalAmount = () => {
        let total = 0;

        cart.forEach((item) => {
            // Removes $ from the string & converts to an int
            let cost = parseFloat(item.cost.replace('$', ''));
            let subTotal = item.quantity * cost;
            total += subTotal;
        })

        return total;
    };

    // 2. Continue Shopping
    // Users should be able to return to the plant listing page to continue shopping while on the shopping 
    // cart page. So, in the handleContinueShopping() function call the function passed from the parent 
    // component.
    const handleContinueShopping = (e) => {
        // I took the code from "show cart" & reversed it
        // I brought in setShowCart as a prop from ProductList
        e.preventDefault();
        setShowCart(false); // Set showCart to false when "Continue Shopping" button is clicked
    };

    // 3. Checkout
    // In this project, you are not required to provide the handleCheckoutShopping() function, but you may wish to for further exploration and practice. For now, just add in the following code to alert the user this function will get added at a later date. 
    const handleCheckoutShopping = (e) => {
        alert('Functionality to be added for future reference');
    };

    // 4. Increment and decrement
    // For the handleIncrement() and handleDecrement() functions, you need to dispatch the updateQuantity() reducer in the CartSlice.jsx file. 
    // In the function argument, either add one to the item.quantity value or subtract one, respectively.
    // Also, for the handleDecrement() you will need an if-else to handle the case if the number of items 
    // gets decremented to 0. In that case, you will need to dispatch the removeItem() method.
    const handleIncrement = (item) => {
        dispatch(updateQuantity({...item, quantity: item.quantity + 1}));
        setCartCount(cartCount + 1);
    }

    const handleDecrement = (item) => {
        if(item.quantity > 0) {
            dispatch(updateQuantity({ ...item, quantity: item.quantity - 1 }));
            setCartCount(cartCount - 1);
        }
    };

    
    // 5. Remove plant from the cart
    // For the handleRemove() function you need to dispatch the removeItem() method.
    const handleRemove = (item) => {
        dispatch(removeItem({ ...item, name: item.name }));
        
        // console.log(item)

        // If a plant is removed from the card, subtract its quantity from the total
        setCartCount(cartCount - item.quantity);
    };

    const handleToggle = (item) => {
        dispatch(toggleDisabled({ ...item, disabled: true }))
    }


    // 6. Item subtotal
    // Calculate the total cost of the number of plants of a particular type with the calculateTotalCost() function by multiplying the unit cost of a plant by the number of that type of plant in the cart.
    // Calculate total cost based on quantity for an item
        const calculateTotalCost = (item) => {
            // console.log(item.quantity);
            // console.log(item.cost)
            let itemCost = parseFloat(item.cost.replace('$', '')) * item.quantity;
            return itemCost;
    };

    
    // 7. Event Handling (already done...I think!)
    // Implement event handlers for incrementing and decrementing the quantity of the item in the cart.
    // When the user changes the number of a plant type in the cart, the following data needs updated: the cart icon, the number of that plant type, the subtotal, and the total cost.
    // Implement an event handler to remove the item from the cart.


    // 8. Total Quantity Counter
    // Maintain a variable dedicated to counting the total number of items added to the cart.
    // Update this variable as the user adds or removes plants from the cart.
    // Display the total quantity on the cart icon in the navbar.

    return (
        <div className="cart-container">
        <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
        <div>
            {cart.map(item => (
            <div className="cart-item" key={item}>
                <img className="cart-item-image" src={item.image} alt={item.name} />
                <div className="cart-item-details">
                    <div className="cart-item-name">{item.name} {item.disabled ? 'True' : 'False'}</div>
                    <div className="cart-item-cost" onClick={() => handleToggle(item)}>{item.cost}</div>
                    <div className="cart-item-quantity">
                        <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                        <span className="cart-item-quantity-value">{item.quantity}</span>
                        <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
                    </div>
                    <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
                    <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
                </div>
            </div>
            ))}
        </div>
        <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
        <div className="continue_shopping_btn">
            <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
            <br />
            <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
        </div>
        </div>
    );
};

export default CartItem;


