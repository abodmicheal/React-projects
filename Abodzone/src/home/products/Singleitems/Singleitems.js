import React from "react";
import CustomizedTables from "./Table";
import "./Singleitems.css";
import Topitems from "../Topitems/topitems";
import Carousel from "react-elastic-carousel";
import { connect } from "react-redux";
import { AdjustQuantity } from "../../../store/store";
class Singleitems extends React.Component {
  constructor(props) {
    super(props);
    //Store each item in this variable(used this in state for default capacity and color)
    const item = this.props.products[this.props.match.params.id];
    console.log(item);
    this.state = {
      capacity: item.capacity[0],
      color: item.color[0],
      id: item.id,
      img: item.img,
    };
  }
  handlecapacity = (e) => {
    this.setState({
      capacity: e.target.innerText,
    });
  };
  handlecolor = (e) => {
    const item = this.props.products[this.props.match.params.id];
    this.setState({
      color: e.target.innerText,
      img: item.image[e.target.innerText][0],
    });
  };
  handleimg = (img) => {
    this.setState({
      img: img,
    });
  };
  adj = (e) => {
    e.preventDefault();
    this.props.AdjustQuantity(
      this.state.id,
      e.target[0].value,
      this.state.color,
      this.state.capacity
    );
  };

  render() {
    console.log(this.state.capacity);
    //Store each item in this variable
    const item = this.props.products[this.props.match.params.id];
    const images = item.image[this.state.color];
    return (
      <div className="singleitem">
        <div className="singleitem_img">
          <div className="singleitem_Wimg">
            {images.map((items) => {
              return (
                <img
                  src={items}
                  width="10%"
                  alt={items.title}
                  onClick={() => this.handleimg(items)}
                />
              );
            })}
          </div>
          <div className="singleitem__Mimg">
            <Carousel>
              {images.map((items) => {
                return (
                  <img
                    className="image"
                    src={items}
                    alt={items.title}
                    onClick={() => this.handleimg(items)}
                  />
                );
              })}
            </Carousel>
          </div>
          <span className="single_img">
            <img src={this.state.img} width="34%" alt={item.title} />
          </span>
        </div>
        <div className="singleitem_details">
          <h4> {item.brand} </h4>
          <h2>
            {item.title} {this.state.capacity} {this.state.color}
          </h2>
          <h1> ${item.price} </h1>
          <h3>
          {this.state.capacity !== undefined ? <span>Capacity:</span> : <span></span>  }

            <span className="singleitem_span"> {this.state.capacity}</span>
          </h3>
          {item.capacity.map((items) => {
            return (
              <button className="btn" key={items} onClick={this.handlecapacity}>
                {items}
              </button>
            );
          })}
          <h3>
            Color: <span className="singleitem_span"> {this.state.color} </span>
          </h3>
          {item.color.map((items) => {
            return (
              <button className="btn" onClick={this.handlecolor}>
                {items}
              </button>
            );
          })}
          <div className="singleitem_order">
            <form onSubmit={this.adj}>
              <input type="number" min="1" placeholder="QTY" />
              <input type="submit" value="Add To Cart" />
            </form>
          </div>
        </div>
        <div className="Singleitems_top">
          <Topitems />
        </div>
        <div className="Singleitems_b">
          <h3>About This Item</h3>
          <p className="Singleitems_des">{item.description}</p>
        </div>
        <div className="Singleitems_spec">
          <h3>Specifications</h3>
          <CustomizedTables
            brand={item.brand}
            os={item.os}
            mNumber={item.mNumber}
            ram={item.ram}
            screenSize={item.screenSize}
            camera={item.camera}
            condition={item.condition}
            processorT={item.processorT}
            processorS={item.processorS}
          />
        </div>
        <div class="seperatorN"></div>
        <div class="single_pp">
          <h3 class="single_title">Protection Plans</h3>
          <div>
            Most items come with a limited manufacturer’s warranty. The addition
            of a Protection Plan adds extra protection from the date of
            purchase. Protection Plans cover the total cost of repair, or
            replacement, for products, as well as covering delivery charges for
            the exchange.
          </div>
          <div class="margin-top">
            <span>
              Protection Plan options and pricing can be found on the product
              page, as well as in your cart.
            </span>
            <div class="margin-top">
              Go to see all the coverage offered for each product. You can view
              your Protection Plan after your purchase in the Protection Plan
              Hub.
            </div>
          </div>
          <div class="margin-top">
            <span>Product warranty: 1-year warranty</span>
            <div class="margin-top">
              <span>
                Warranty Information: 6 Months manufacturing warranty from
                apple.
              </span>
            </div>
          </div>
        </div>
        <div class="seperatorN"></div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.store.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    AdjustQuantity: (id, qty, color, capacity) =>
      dispatch(AdjustQuantity(id, qty, color, capacity)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Singleitems);
