import React from "react";
import ShopCard from "../../../components/ShopCard/ShopCard";
import ShopList from "./ShopList/ShopList";

const ShopPage = () => {
  return (
    <div
      style={{ backgroundColor: "#DEE1FE", width: "100%", padding: "5% 2%" }}
    >
      <ShopList />
    </div>
  );
};

export default ShopPage;
