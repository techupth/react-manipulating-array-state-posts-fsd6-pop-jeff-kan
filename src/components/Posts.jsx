import postList from "../data/PostList";
import { useState } from "react";
function Posts() {
  const [postData, setPostData] = useState(postList);
  const handleLikePost = (postIndex) => {
    const newPostData = [...postData];
    newPostData[postIndex].likes = newPostData[postIndex].likes + 1;
    setPostData(newPostData);
  };

  const handleDislikePost = (postIndex) => {
    const newPostData = [...postData];
    if (newPostData[postIndex].likes > 0) {
      newPostData[postIndex].likes = newPostData[postIndex].likes - 1;
      setPostData(newPostData);
    }
  };

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        <div class = "set-post-function">
          {postList.map((post, index) => {
            return (
              <div class="post-item">
                <div class="post-header" key={index}>
                  <h2>{post.title}</h2>
                  <div class="post-social-media-stats">
                    <span class="stats-topic">Likes: </span>
                    <span class="post-likes">{post.likes}</span>
                  </div>
                </div>
                <p class="post-content" key={index}>
                  {post.content}
                </p>
                <div class="post-actions">
                  <button
                    class="like-button"
                    onClick={() => {
                      handleLikePost(index);
                    }}
                  >
                    Like
                  </button>
                  <button
                    class="dislike-button"
                    onClick={() => {
                      handleDislikePost(index);
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
    </div>
  );
}

export default Posts;
