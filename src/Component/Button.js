import React from "react";
import Product from "./Product";

const Button = ({loading, response,setFilter, filter}) => {
	const filterProduct = (category)=>{
		const updatedList = response.filter((item)=>item.category===category)
		setFilter(updatedList)
	}
  return (
    <>
      <div className="row justify-content-center">
        {loading ? (
          "Loading"
        ) : (<>
          <div className="filtred-buttons my-2 d-flex justify-content-center mb-5 pb-5">
            <button onClick={()=>setFilter(response)} className="btn btn-outline-dark me-2">All</button>
            <button onClick={()=>filterProduct("men's clothing")} className="btn btn-outline-dark me-2">
              Men's Clothing
            </button>
            <button onClick={()=>filterProduct("women's clothing")} className="btn btn-outline-dark me-2">
              Women's Clothing
            </button>
            <button onClick={()=>filterProduct("jewelery")}className="btn btn-outline-dark me-2">Jewelry</button>
            <button onClick={()=>filterProduct("electronics")} className="btn btn-outline-dark me-2">Electronics</button>
          </div>
					<Product filter={filter}/>
					</>
        )}
      </div>
    </>
  );
};

export default Button;
