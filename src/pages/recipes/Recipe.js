import React from "react";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/Recipe.module.css";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";

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
    recipePage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner; // Checks if current user matches owner of recipe

  return (
    <Card className={styles.Recipe}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && recipePage && "..."}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/recipes/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {category && <Card.Text>{category}</Card.Text>}
        {ingredient && <Card.Text>{ingredient}</Card.Text>}
        {instruction && <Card.Text>{instruction}</Card.Text>}
      </Card.Body>
    </Card>
  );
};

export default Recipe;
