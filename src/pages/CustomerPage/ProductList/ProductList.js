import React from "react";
import ProudctCard from "../../../components/ProductCard/ProductCard";
import "./productlist.css";

const ProductList = () => {
  let sampleArray = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="product-list-grid">
      {sampleArray.map(item => (
        <ProudctCard />
      ))}
    </div>
  );
};

export default ProductList;
