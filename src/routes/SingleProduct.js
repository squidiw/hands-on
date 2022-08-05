import React from "react";
import { useParams } from "react-router-dom";

const SingleProduct = ({ items }) => {
   let itemProp = items;
   function getItems(id) {
      return itemProp.find(item => item.id === id);
   }

   let params = useParams();
   let itemID = getItems(parseInt(params.invoiceId, 10));

   return (
      <div>
         SingleProduct
         <div>{itemID.invoiceId}</div>
      </div>
   );
};

export default SingleProduct;
