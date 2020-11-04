import React from "react";
import Nav from "./Nav";
import "./Itemdetails.css";
import { Resultcontent } from "./Maincontents";
class Itemdetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultcontent: Resultcontent,
      props: props.match,
      clicked: false,
    };
  }
  fav = (item) => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };
  render() {
    const items = this.state.resultcontent[this.state.props.params.id];
    return (
      <div>
        <Nav />
        <div className="items">
          <img
            src={`.${items.img}`}
            className="items__mobile"
            height="460vh"
            alt="home-main"
          />
          <div className="test">
            <h1>{items.title}</h1>
            <div className="item__rating">
              ★{" "}
              <i>
                {items.rating} <i style={{ color: "#717171" }}>·</i>{" "}
              </i>
              <i>{items.location},United States</i>
              <i style={{ color: "black", textDecoration: "none" }}>
                <i style={{ color: "#717171" }}>·</i> {items.price}
              </i>
            </div>
            <button
              className={`items__heart ${this.state.clicked && "heart"}`}
              onClick={this.fav}
            ></button>
            <img
              src={`.${items.img}`}
              width="95%"
              height="460vh"
              className="items__img"
              alt="img"
            />
            <h2>
              {items.type} hosted by {items.host}
            </h2>
            <h4>{items.smalldescription}</h4>
            <div className="items__wind" style={{ cursor: "pointer" }}>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                style={{
                  marginRight: "15px",
                  height: "16px",
                  width: "16px",
                  display: "block",
                  fill: "currentcolor",
                  color: "grey",
                }}
              >
                <path d="M22.39 5.798c-.088-.208-1.252-2.89-1.759-4.018a228.077 228.077 0 0 0-.677-1.49.5.5 0 0 0-.838-.11 7.236 7.236 0 0 1-.407.435 10.66 10.66 0 0 1-1.134.985C16.404 2.479 15.187 3 14 3c-1.21 0-1.995-.133-3.309-.483l-.4-.107C9.194 2.121 8.47 2 7.5 2a6.35 6.35 0 0 0-1.186.12c-.87.165-1.786.49-2.715.928-.48.225-.932.467-1.345.708l-.112.068-.171-.49a.5.5 0 1 0-.944.331l7 20a.5.5 0 0 0 .944-.33l-2.986-8.531a21.773 21.773 0 0 1 1.77-.843c.73-.307 1.44-.556 2.102-.724.61-.155 1.163-.237 1.642-.237.869 0 1.515.108 2.536.377l.398.106c1.39.371 2.255.517 3.566.517 2.853 0 5.29-1.786 5.974-3.842a.5.5 0 0 0 0-.316c-.324-.974-.87-2.355-1.584-4.044z"></path>
              </svg>
              <h4 style={{ textDecoration: "underline" }}>
                Report this listing
              </h4>
            </div>
            <hr />

            <div className="items__icons">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: "24px",
                  width: "24px",
                  marginRight: "15px",
                  fill: "currentcolor",
                }}
              >
                <path d="M15.032 1.747c.263-1.004 1.692-.993 1.94.015.876 3.577 2.415 6.454 4.614 8.652 2.198 2.199 5.075 3.738 8.652 4.615 1.016.249 1.016 1.693 0 1.942-3.577.877-6.454 2.416-8.652 4.615-2.199 2.198-3.738 5.075-4.615 8.652-.249 1.016-1.693 1.016-1.942 0-.877-3.577-2.416-6.454-4.615-8.652-2.198-2.199-5.075-3.738-8.652-4.615-1.008-.247-1.019-1.676-.015-1.939 3.535-.923 6.394-2.487 8.597-4.69 2.202-2.202 3.765-5.06 4.688-8.595zm.945 3.518l-.133.325c-.88 2.085-2.025 3.914-3.438 5.484l-.33.357-.318.326c-1.6 1.6-3.5 2.893-5.693 3.88l-.475.206-.325.133.352.14c2.108.859 3.952 1.995 5.527 3.407l.358.33.326.319c1.603 1.602 2.887 3.515 3.854 5.732l.203.48.115.291.115-.292c.86-2.108 1.996-3.952 3.408-5.527l.33-.358.319-.326c1.602-1.603 3.515-2.887 5.732-3.854l.48-.203.292-.115-.293-.115c-2.421-.988-4.494-2.34-6.211-4.057-1.603-1.602-2.887-3.515-3.854-5.732l-.203-.48-.138-.351zm11.04-3.891c.13-.502.845-.497.969.007.176.718.48 1.287.913 1.72.433.433 1.002.737 1.72.913.508.125.508.847 0 .972-.718.176-1.287.48-1.72.913-.433.433-.737 1.002-.913 1.72-.125.508-.847.508-.972 0-.176-.718-.48-1.287-.913-1.72-.433-.433-1.002-.737-1.72-.913-.504-.124-.51-.839-.007-.97.71-.185 1.277-.496 1.712-.93.434-.435.745-1.002.93-1.712z"></path>
              </svg>
              <h3>Enhanced Clean</h3>
            </div>
            <h4 style={{ paddingLeft: "41px", width: "70%" }}>
              This host committed to Airbnb's 5-step enhanced cleaning process.
            </h4>
            <br />
            <div className="items__icons">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: "24px",
                  width: "24px",
                  marginRight: "15px",
                  fill: "currentcolor",
                }}
              >
                <g
                  vectorEffect="non-scaling-stroke"
                  transform="translate(0,0)scale(1,1)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                >
                  <path d="m18.7652487 2.2057265c1-1 3.658 1.999 1.244 4.413l-1.9372487 1.9662735c-.78.781-.78 2.047 0 2.828.391.391.903.586 1.415.586l8.513.001c1.104 0 2 .896 2 2s-.896 2-2 2h-1c1.104 0 2 .896 2 2s-.896 2-2 2h-1c1.104 0 2 .896 2 2s-.896 2-2 2h-1c1.104 0 2 .896 2 2s-.896 2-2 2l-11.999-.00075c-1.4799105-.0005951-2.772087-.8045363-3.46408174-1.9994017l-5.53691826.0001517c-.55228475 0-1-.4477153-1-1v-10c0-.5522847.44771525-1 1-1l3.001-.0009098c5.8382366-5.85406905 9.5222235-9.54739462 11.0519608-11.08006692z"></path>
                </g>
              </svg>
              <h3>Outstanding hospitality</h3>
            </div>
            <h4 style={{ paddingLeft: "41px", width: "70%" }}>
              Few guests complimented {items.host} for outstanding hospitality..
            </h4>
            <br />
            <div className="items__icons">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: "24px",
                  width: "24px",
                  marginRight: "15px",
                  fill: "currentcolor",
                }}
              >
                <path d="M12 0v2h8V0h2v2h6a2 2 0 0 1 1.995 1.85L30 4v15.586a2 2 0 0 1-.467 1.284l-.119.13L21 29.414a2 2 0 0 1-1.238.578l-.176.008H7a5 5 0 0 1-4.995-4.783L2 25V4a2 2 0 0 1 1.85-1.995L4 2h6V0zM4 12v13a3 3 0 0 0 2.824 2.995L7 28h11v-5a5 5 0 0 1 4.783-4.995L23 18h5v-6zm23.585 8H23a3 3 0 0 0-2.995 2.824L20 23v4.585zM4 10h24V4h-6v2h-2V4h-8v2h-2V4H4z"></path>
              </svg>
              <h3>Cancellation policy</h3>
            </div>
            <h4 style={{ paddingLeft: "41px", width: "70%" }}>
              Add your trip dates to get the cancellation details for this stay.
            </h4>
            <br />
            <hr />
            <h3>{items.description}</h3>
            <h3>Contact host</h3>
            <br />
            <hr />
            <h2 style={{ padding: "25px 0" }}>Amenities</h2>
            <div className="items__icons">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="mobile__svg"
                style={{
                  display: "block",
                  height: "24px",
                  width: "24px",
                  marginRight: "-15px",
                  fill: "currentcolor",
                }}
              >
                <path d="M26 1a5 5 0 0 1 5 5c0 6.389-1.592 13.187-4 14.693V31h-2V20.694c-2.364-1.478-3.942-8.062-3.998-14.349L21 6l.005-.217A5 5 0 0 1 26 1zm-9 0v18.118c2.317.557 4 3.01 4 5.882 0 3.27-2.183 6-5 6s-5-2.73-5-6c0-2.872 1.683-5.326 4-5.882V1zM2 1h1c4.47 0 6.934 6.365 6.999 18.505L10 21H3.999L4 31H2zm14 20c-1.602 0-3 1.748-3 4s1.398 4 3 4 3-1.748 3-4-1.398-4-3-4zM4 3.239V19h3.995l-.017-.964-.027-.949C7.673 9.157 6.235 4.623 4.224 3.364l-.12-.07zm19.005 2.585L23 6l.002.31c.045 4.321 1.031 9.133 1.999 11.39V3.17a3.002 3.002 0 0 0-1.996 2.654zm3.996-2.653v14.526C27.99 15.387 29 10.4 29 6a3.001 3.001 0 0 0-2-2.829z"></path>
              </svg>
              <h3
                className="h3"
                style={{
                  fontWeight: "normal",
                  padding: "5px 0",
                  margin: "0 0 15px 30px",
                }}
              >
                Kitchen
              </h3>
            </div>
            <div className="items__icons">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="mobile__svg"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: "24px",
                  width: "24px",
                  marginRight: "-15px",
                  fill: "currentcolor",
                }}
              >
                <path d="M16 20a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-7a9 9 0 0 1 8.043 4.958L22.53 21.47a7.003 7.003 0 0 0-13.058 0l-1.514-1.514A9 9 0 0 1 16 15zm0-5c4.89 0 9.193 2.506 11.697 6.304l-1.45 1.45A11.993 11.993 0 0 0 16 12c-4.339 0-8.14 2.302-10.247 5.752l-1.45-1.449A13.987 13.987 0 0 1 16 10zm0-5c6.267 0 11.826 3.034 15.286 7.714l-1.432 1.432C26.773 9.821 21.716 7 16 7 10.285 7 5.228 9.82 2.146 14.145L.714 12.714C4.174 8.034 9.733 5 16 5z"></path>
              </svg>
              <h3
                style={{
                  fontWeight: "normal",
                  padding: "5px 0",
                  margin: "0 0 15px 30px",
                }}
              >
                Wifi
              </h3>
            </div>
            <div className="items__icons">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="mobile__svg"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: "24px",
                  width: "24px",
                  marginRight: "-15px",
                  fill: "currentcolor",
                }}
              >
                <path d="M9.5 2a4.5 4.5 0 0 1 3.527 7.295c.609.215 1.173.55 1.66.988l.191.182L17.414 13H31v2h-2v14a2 2 0 0 1-1.85 1.995L27 31H5a2 2 0 0 1-1.995-1.85L3 29V15H1v-2h2.1a5.009 5.009 0 0 1 2.955-3.608A4.5 4.5 0 0 1 9.5 2zm7.085 13H5v14h22V15h-7.586l3.293 3.294-1.414 1.414zM9.5 4a2.5 2.5 0 0 0-1 4.792V11H8a3.001 3.001 0 0 0-2.83 2h9.415l-1.121-1.121a3 3 0 0 0-1.923-.872L11.343 11H10.5V8.792A2.5 2.5 0 0 0 9.5 4zm15.486-3a6.957 6.957 0 0 1-1.803 4.07l-.445.463A8.971 8.971 0 0 0 20.354 11H18.35a10.975 10.975 0 0 1 3.202-7.118A4.961 4.961 0 0 0 22.974 1zm2.007 0h2.004a10.96 10.96 0 0 1-3.202 7.124A4.974 4.974 0 0 0 24.373 11h-2.012a6.97 6.97 0 0 1 1.804-4.064l.444-.462A8.958 8.958 0 0 0 26.993.999z"></path>
              </svg>
              <h3
                style={{
                  fontWeight: "normal",
                  padding: "5px 0",
                  margin: "0 0 15px 30px",
                }}
              >
                Hot tub
              </h3>
            </div>
            <div className="items__icons">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="mobile__svg"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: "24px",
                  width: "24px",
                  marginRight: "-15px",
                  fill: "currentcolor",
                }}
              >
                <path d="M17 1v4.03l4.026-2.324 1 1.732L17 7.339v6.928l6-3.464V5h2v4.648l3.49-2.014 1 1.732L26 11.381l4.026 2.325-1 1.732L24 12.535l-6 3.464 6 3.465 5.026-2.902 1 1.732L26 20.618l3.49 2.016-1 1.732L25 22.351V27h-2v-5.804l-6-3.465v6.929l5.026 2.902-1 1.732L17 26.97V31h-2v-4.031l-4.026 2.325-1-1.732L15 24.66v-6.929l-6 3.464V27H7v-4.65l-3.49 2.016-1-1.732 3.489-2.016-4.025-2.324 1-1.732 5.025 2.901 6-3.464-6-3.464-5.025 2.903-1-1.732L6 11.38 2.51 9.366l1-1.732L7 9.648V5h2v5.803l6 3.464V7.339L9.974 4.438l1-1.732L15 5.03V1z"></path>
              </svg>
              <h3
                style={{
                  fontWeight: "normal",
                  padding: "5px 0",
                  margin: "0 0 15px 30px",
                }}
              >
                Air conditioning
              </h3>
            </div>
            <div className="items__icons">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="mobile__svg"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: "24px",
                  width: "24px",
                  marginRight: "-15px",
                  fill: "currentcolor",
                }}
              >
                <path d="M27 3a2 2 0 0 1 1.995 1.85L29 5l-.001 14.816 2.43 6.482a2 2 0 0 1-.881 2.44l-.145.074-.144.06a2 2 0 0 1-.523.12l-.179.008H2.443a2 2 0 0 1-1.928-2.532l.055-.17L3 19.819 3 5a2 2 0 0 1 1.697-1.977l.154-.018L5 3zm.306 18H4.692l-2.249 6h27.114zM19 23v2h-6v-2zm8-18H5l-.001 14h22zM16 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
              </svg>
              <h3
                style={{
                  fontWeight: "normal",
                  padding: "5px 0",
                  margin: "0 0 15px 30px",
                }}
              >
                Laptop-friendly workspace
              </h3>
            </div>
            <button className="items__btn">Show all 35 amenities</button>
            <hr />
            <h2 style={{ padding: "25px 0" }}>Location</h2>
            <h3 style={{ textDecoration: "none" }}>
              {items.location}, Untited States.
            </h3>
            <button className="items__btn">More about the location</button>
            <hr className="items__mobile" />
            <div className="items__winds" style={{ cursor: "pointer" }}>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                style={{
                  marginRight: "15px",
                  height: "16px",
                  width: "16px",
                  display: "block",
                  fill: "currentcolor",
                  color: "grey",
                }}
              >
                <path d="M22.39 5.798c-.088-.208-1.252-2.89-1.759-4.018a228.077 228.077 0 0 0-.677-1.49.5.5 0 0 0-.838-.11 7.236 7.236 0 0 1-.407.435 10.66 10.66 0 0 1-1.134.985C16.404 2.479 15.187 3 14 3c-1.21 0-1.995-.133-3.309-.483l-.4-.107C9.194 2.121 8.47 2 7.5 2a6.35 6.35 0 0 0-1.186.12c-.87.165-1.786.49-2.715.928-.48.225-.932.467-1.345.708l-.112.068-.171-.49a.5.5 0 1 0-.944.331l7 20a.5.5 0 0 0 .944-.33l-2.986-8.531a21.773 21.773 0 0 1 1.77-.843c.73-.307 1.44-.556 2.102-.724.61-.155 1.163-.237 1.642-.237.869 0 1.515.108 2.536.377l.398.106c1.39.371 2.255.517 3.566.517 2.853 0 5.29-1.786 5.974-3.842a.5.5 0 0 0 0-.316c-.324-.974-.87-2.355-1.584-4.044z"></path>
              </svg>
              <h4 style={{ textDecoration: "underline" }}>
                Report this listing
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Itemdetails;
