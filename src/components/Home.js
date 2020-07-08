import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";

class Home extends Component {
  handleClick = id => {
    this.props.addToCart(id);
  };

  render() {
    let itemList = this.props.items.map(item => {
      return (
        <div className="card" key={item.id}>
          <div className="card-image">
            <img src={item.img} alt={item.title} />
            <span className="card-title">{item.title}</span>
          </div>

          <div className="card-content">
            <p>{item.desc}</p>
            <div className="action-row">
              <button
                className="add-cart-button"
                onClick={() => {
                  this.handleClick(item.id);
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
      );
    });

    return (
      <div className="container">
        <div className="box">{itemList}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.items
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);