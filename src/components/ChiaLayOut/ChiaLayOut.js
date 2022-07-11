import React from "react";
import HeaderDemo from "./HeaderDemo";
import Product from "./Product";

export default class ChiaLayOut extends React.Component {
  render() {
    return (
      <div>
        <HeaderDemo />
        <Product />
      </div>
    );
  }
}
