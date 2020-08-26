import React from 'react';
import '../FoodItem/Foods.css';
const Foods = (props) => {
    const { img, title, catagories, price } = props.food;
    return (
        <div className="col-md-4">
        <div className="single-item text-center my-4">
          <div className="card p-2">
            <h4 className="text-secondary mb-3">Category: {catagories}</h4>
            <img className="card-img-top" src={img} alt={title} />
            <div className="card-body">
              <h5 className="card-title"><strong><u>{title}</u></strong></h5>
              <h4 className="price">${price}</h4>
              <button className="btn btn-sm btn-primary"
                onClick={ () =>props.addToCart(props.food)}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Foods;