import React from "react";
import { Outlet } from "react-router";
import Shop from "./Shop";
import Api from "./Api";

function ShopMenu() {
  return (
    <Shop>
      <div className="container mx-auto p-4 relative">
        <Api />
        <Outlet />
      </div>
    </Shop>
  );
}

export default ShopMenu;