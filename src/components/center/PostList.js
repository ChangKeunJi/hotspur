import React, { Component } from "react";
import Post from "./Post";

const PostList = ({ posts, profileInfo }) => {
  return (
    <div className="">
      {posts &&
        posts.map(post => (
          <Post post={post} key={post.id} profileInfo={profileInfo} />
        ))}
    </div>
  );
};

export default PostList;
