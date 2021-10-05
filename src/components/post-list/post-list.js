import React from "react";
import PostListItem from "../post-list-item";
import "./post-list.css";
const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
  const elements = posts.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <PostListItem
          {...itemProps}
          onDelete={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleLiked={() => onToggleLiked(id)}
        />
        {/* label={item.label} important={item.important} */}
      </li>
    );
  });
  return (
    <ul className="app-list list-group">
      {elements}
      {/* <PostListItem label={posts[0].label} important={posts[0].important} /> */}
      {/* <PostListItem label="That is so good" />
      <PostListItem label="I need a break..." /> */}
    </ul>
  );
};

export default PostList;
