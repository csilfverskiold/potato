import React from "react";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/Recipe.module.css";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

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
    setRecipes,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner; // Checks if current user matches owner of recipe
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/recipes/${id}/edit`);
  };

  // Allows users to like a recipe
  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { recipe: id });
      setRecipes((prevRecipes) => ({
        ...prevRecipes,
        results: prevRecipes.results.map((recipe) => {
          return recipe.id === id
            ? {
                ...recipe,
                likes_count: recipe.likes_count + 1,
                like_id: data.id,
              }
            : recipe;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  // Allows users to unlike a recipe
  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setRecipes((prevRecipes) => ({
        ...prevRecipes,
        results: prevRecipes.results.map((recipe) => {
          return recipe.id === id
            ? { ...recipe, likes_count: recipe.likes_count - 1, like_id: null }
            : recipe;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  // Allows users to save a recipe
  const handleSave = async () => {
    try {
      const { data } = await axiosRes.post("/saves/", { recipe: id });
      setRecipes((prevRecipes) => ({
        ...prevRecipes,
        results: prevRecipes.results.map((recipe) => {
          return recipe.id === id
            ? {
                ...recipe,
                saves_count: recipe.saves_count + 1,
                save_id: data.id,
              }
            : recipe;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  // Allows users to unsave a recipe
  const handleUnsave = async () => {
    try {
      await axiosRes.delete(`/saves/${save_id}/`);
      setRecipes((prevRecipes) => ({
        ...prevRecipes,
        results: prevRecipes.results.map((recipe) => {
          return recipe.id === id
            ? { ...recipe, saves_count: recipe.saves_count - 1, save_id: null }
            : recipe;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.Recipe}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link className={styles.Profilename} to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && recipePage && <MoreDropdown handleEdit={handleEdit} /> }
          </div>
        </Media>
      </Card.Body>
      <Link to={`/recipes/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title>{title}</Card.Title>}
        {category && (
          <div>
            <p className={styles.Label}>Category:</p>
            <Card.Text>{category}</Card.Text>
          </div>
        )}
        {ingredient && (
          <div>
            <p className={styles.Label}>Ingredients:</p>
            <Card.Text>{ingredient}</Card.Text>
          </div>
        )}
        {instruction && (
          <div>
            <p className={styles.Label}>Instructions:</p>
            <Card.Text>{instruction}</Card.Text>
          </div>
        )}
        <div className={styles.Icon}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own recipe!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={handleUnlike}>
              <i className={`fas fa-heart ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              <i className={`far fa-heart ${styles.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like recipes!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          {likes_count}
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't save your own recipe!</Tooltip>}
            >
              <i className="fa-solid fa-book-bookmark" />
            </OverlayTrigger>
          ) : save_id ? (
            <span onClick={handleUnsave}>
              <i className={`fa-solid fa-book-bookmark ${styles.Bookmark}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleSave}>
              <i
                className={`fa-solid fa-book-bookmark ${styles.BookmarkOutline}`}
              />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to save recipes!</Tooltip>}
            >
              <i className="fa-solid fa-book-bookmark" />
            </OverlayTrigger>
          )}
          {saves_count}
          <Link to={`/recipes/${id}`}>
            <i className="far fa-comments" />
          </Link>
          {comments_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Recipe;
