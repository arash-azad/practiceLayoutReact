import { useEffect, useState } from "react";
import axios from "axios";
import "./Cards.css";

export default function Cards() {
  const [posts, setPosts] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function requestHandler() {
      setTimeout(async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setPosts(response.data);
    },1000)}
    requestHandler();
  }, []);

  return (
    <div style={{ width: "100%"}}>
      {posts === null && (
        <p style={{ fontSize: "40px", textAlign: "center",marginTop:"50vh"}}>Loading... <i class="bi bi-arrow-clockwise"></i></p>
      )}

      <div className="gridWrapper">
        {posts?.map((post) => (
          <div key={post.id} className="cardItem">
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
            <div className="counterBox">
            <button className="counterBtn" onClick={() =>{ 
              if(count>0){
              setCount(count - 1)
              }
              }}>-</button>
            <span className="counterNumber">{count}</span>
            <button className="counterBtn" onClick={() => setCount(count + 1)}>+</button>
             </div>
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
