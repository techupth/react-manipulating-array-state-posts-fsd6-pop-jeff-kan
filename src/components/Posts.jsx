import { useState } from "react";
import { postData } from "../datas/data";

function Posts() {
  const [like, setLike] = useState(postData.map((data) => data.likes));
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {postData.map((data, index) => {
          return (
            <div className="post-item" key={data.id}>
              <div className="post-header">
                <h2>{data.title}</h2>
                <div className="post-social-media-stats">
                  <span className="stats-topic">Likes: </span>
                  <span className="post-likes">{like[index]}</span>
                </div>
              </div>
              <p className="post-content">{data.content}</p>
              <div className="post-actions">
                <button
                  className="like-button"
                  onClick={() => {
                    setLike(like.toSpliced(index, 1, like[index] + 1));
                  }}
                >
                  Like
                </button>
                <button
                  className="dislike-button"
                  onClick={() => {
                    like[index] > 0
                      ? setLike(like.toSpliced(index, 1, like[index] - 1))
                      : alert("เราหยุดแล้ว ท่านยังไม่หยุดอีกหรือ");
                  }}
                >
                  Dislike
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
