import React from "react";
import Productitems from "./Productitems";
import { PRODUCTS } from "../../Products/Products";

import "./Shop.css";

const Shop = () => {
  return (  
        
    <div>
      <div className="Shop">
        <h1>Shop Your Choice</h1>
      </div>
                
      <div className="products">
        <div className="items">
          {PRODUCTS.map((item) => (
            <Productitems data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
     