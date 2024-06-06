import { useState } from "react";
import dataList from "./data"

function Posts() {
  
  const [likes,setLikes] = useState(dataList.map((data) => data.likes));
  
  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };
  const handleDislike = (index) => {
    if(likes[index]>0){const newLikes = [...likes];
    newLikes[index] -= 1;
    setLikes(newLikes);}
  };
  
  return (
  <div class="app-wrapper">
    <h1 class="app-title">Posts</h1>
    {dataList.map((data,index) => { 
      return (
          <div class="post-list">
            <div class="post-item">
              <div class="post-header" key={index}>
                <h2>Post Title #{data.id}</h2>
                <div class="post-social-media-stats">
                  <span class="stats-topic">Likes: </span>
                  <span class="post-likes" key={index}>{likes[index]}</span>
                </div>
              </div>
                <p class="post-content" key={index}>
                  {data.content}
                </p>
              <div class="post-actions">
                <button class="like-button " onClick={()=>{handleLike(index)}}>
                  Like
                </button>
                <button class="dislike-button" onClick={()=>{handleDislike(index)}}>
                  Dislike
                </button>
              </div>
            </div>
          </div>
          );
        })
    }
  </div>
  )
}

export default Posts;
