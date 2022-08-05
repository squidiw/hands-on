import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = ({ items }) => {
   const [singleProduct, setSingleProduct] = useState({});
   let params = useParams();
   useEffect(() => {
      //   function getItems(id, items) {
      //      return items.find(item => item.id === id);
      //   }


    //  console.log({ params: params.invoiceId })

      let matchingItem = items.find(item => item.id === parseInt(params.invoiceId))

      if (matchingItem) {
         setSingleProduct({...matchingItem})
      }



   }, [items]);

   //    let itemID = getItems(parseInt(params.invoiceId));

   return (
      <div>
         {
            "id" in singleProduct && singleProduct ? <>
               Single product { singleProduct.id }
            </> : null
         }
      </div>
   );
};

export default SingleProduct;
