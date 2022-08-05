import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = ({ items }) => {
   const [singleProduct, setSingleProduct] = useState({});
   let params = useParams();
   useEffect(() => {
      let matchingItem = items.find(
         item => item.id === parseInt(params.invoiceId)
      );

      if (matchingItem) {
         setSingleProduct({ ...matchingItem });
      }
      //eslint-disable-next-line
   }, [items, params.invoiceId]);

   return (
      <div>
         SingleProduct
         <h1>
            {"id" in singleProduct && singleProduct ? (
               <>Single product {singleProduct.id}</>
            ) : null}
         </h1>
      </div>
   );
};

export default SingleProduct;
