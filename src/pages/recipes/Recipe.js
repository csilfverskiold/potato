import React from "react";
import styles from "../../styles/Recipe.module.css";

const Recipe = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    saves_count,
    likes_count,
    save_id,
    like_id,
    title,
    category,
    ingredient,
    instruction,
    image,
    updated_at,
  } = props;

  return <div>Recipe placeholder text is here</div>;
};

export default Recipe;
