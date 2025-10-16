import { useEffect, useState } from "react";
import axios from "axios";
import Counter from "./Counter";
import "./RecipeReviewCard.css";
import Loadingimg from "./assets/images";
import { useNavigate } from "react-router-dom";

export default function Cards() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    async function requestHandler() {
      setTimeout(async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setPosts(response.data);
    },1000)}
    requestHandler();
  }, []);

  const navigate=useNavigate();


  return (
    <div style={{ width: "100%"}}>
      {posts === null && (
        <div style={{margin:"30vh auto",overflow:"hidden", display:"flex",justifyContent:"center",alignContent:"center",boxSizing:"border-box",zIndex:"999",width:"fit-content",height:"fit-content",borderRadius:"20px"}} >
          {/* <p style={{ fontSize: "40px", textAlign: "center"}}>Loading... </p> */}
          <Loadingimg/>
        </div>
      )}

      <div className="gridWrapper">
        {posts?.map((post) => (
          <div  onClick={()=>navigate(`/products/${post.id}`)} key={post.id} className="cardItem">
            <div style={{display:"flex", width:"100%",flexDirection:"row",justifyContent:"space-between"}} >
          <span ><u>{post.rating.rate}/5  <i class="bi bi-star-fill"></i></u></span>
          <span><u>{post.rating.count}  </u><i class="bi bi-chat-left-dots"></i></span>
            </div>
            <img src={post.image} alt={post.title} className="cardImage" />
            <p><b>ID:</b> {post.id}</p>
            <p className="cardTitle">{post.title}</p>
            <p>{post.category}</p>
            <p style={{border:"5px solid red",borderRadius:"15px",padding:"5px"}}>
            <i class="bi bi-tag-fill"></i> price : {post.price}$<br/>
            </p>
          <Counter/>
            <button className="buyNowBtn">
            <i className="bi bi-cart-fill"></i>
            <span className="btnText">Buy Now</span>
            <span className="priceTag">${post.price}</span>
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}
