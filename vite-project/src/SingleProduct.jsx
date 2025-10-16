import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "./tools/api";
import Counter from "./Counter";

import "./SingleProduct.css";



export default function SingleProductPage(){
    const {myID}=useParams();
    
  async function queryFn() {
    return await api.get(`products/${myID}`);
  }

    const { data, isLoading } = useQuery({
      queryKey: [`single-product-${myID}`],
      queryFn,
    });

    if (isLoading) {
      return <div>LOADING...</div>;
    }

  const generateLorem = (min, max) => {
    const num = Math.floor(Math.random() * (max - min + 1)) + min; 
    return Array.from({ length: num }, () => "lorem ispum").join(" ");
  };


    return(
        <>
      <div className="biggestInSingle">
      <div className=" itemsSingle imgSingles">
        <img src={data.image} alt="" />
      </div>
      <div className=" itemsSingle titlesSingle" >
        <h2 style={{marginBottom:"3vh"}} >{data.title}</h2>
        <h1 style={{marginBottom:"3vh"}}>{data.category}</h1>
        <h3 style={{outline:"2px solid red",padding:"5px",borderRadius:"10px"}} >{data.price} $</h3>
        <Counter/>
            <button className="buyNowBtn">
            <i className="bi bi-cart-fill"></i>
            <span className="btnText">Buy Now</span>
            <span className="priceTag">${data.price}</span>
            </button>
      </div>
      <div className=" itemsSingle descriptionSingle" >
        <p>{data.description}</p>
      </div>
    </div>
    <div className="commentsInSingle" >
      
        <h1 style={{float:"left"}} ><span><u>{data.rating.count}  </u><i class="bi bi-chat-left-dots"></i></span></h1>
        <h1 style={{float:"right"}} ><span ><u>{data.rating.rate}/5  <i class="bi bi-star-fill"></i></u></span></h1>
      <div>
        <p>Comments</p>
     <div  >
      {Array.from({ length: data.rating.count }, (i) => (
        <p className="commentsSingle" key={i}>{generateLorem(1, 5)}</p>
      ))}
    </div>
      </div>
    </div>
        </>
        
    )
}