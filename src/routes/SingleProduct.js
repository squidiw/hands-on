import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = ({ items }) => {
   const [singleProduct, setSingleProduct] = useState({});
   let params = useParams();
   useEffect(() => {
      //   function getItems(id, items) {
      //      return items.find(item => item.id === id);
      //   }

      let matchItem = items.find(item => item.id === params.invoiceId);

      console.log(matchItem);
   }, []);

   //    let itemID = getItems(parseInt(params.invoiceId));

   return (
      <div>
         SingleProduct
         {/* <div>{itemID.invoiceId}</div> */}
      </div>
   );
};

export default SingleProduct;
