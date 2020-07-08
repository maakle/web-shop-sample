import React from "react";
import { addToCart } from "./actions/cartActions";
import { connect, useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";

const Home = (props) => {
  const { addToast } = useToasts();
  const dispatch = useDispatch();

  const handleClick = (id) => {
    addToast("Added to Cart", {
      appearance: "info",
    });
    dispatch(addToCart(id));
  };

  return (
    <div className="container">
      <div className="box">
        {props.items.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-image">
              <img src={item.img} alt={item.title} />
            </div>

            <div className="card-content">
              <span className="card-title-header">{item.title}</span>
              <p>{item.desc}</p>
              <div className="action-row">
                <button
                  className="add-cart-button"
                  onClick={() => {
                    handleClick(item.id);
                  }}
                >
                  Add to Cart
                </button>
                <span className="price-wrapper">
                  <b>{item.price}$</b>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps)(Home);
