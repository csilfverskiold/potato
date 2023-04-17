import React, { useEffect, useState } from "react";
import appStyles from "../../App.module.css";
import Container from "react-bootstrap/Container";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Asset from "../../components/Asset";

const PopularRecipes = ({ mobile }) => {
  const [recipeData, setRecipeData] = useState({
    // pageRecipe for later use
    pageRecipe: { results: [] },
    popularRecipes: { results: [] },
  });
  const { popularRecipes } = recipeData;
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get("/recipes/?ordering=-saves_count");
        setRecipeData((prevState) => ({
          ...prevState,
          popularRecipes: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [currentUser]);

  return (
    <Container
    className={`${appStyles.Content} ${
      mobile && "d-lg-none text-center mb-3"
    }`}
  >
    {popularRecipes.results.length ? (
      <>
        <p>Most saved recipes</p>
        {mobile ? (
          <div className="d-flex justify-content-around">
            {popularRecipes.results.slice(0, 3).map((recipe) => (
              <p key={recipe.id}>{recipe.title}</p>
            ))}
          </div>
        ) : (
          popularRecipes.results.slice(0, 5).map((recipe) => (
            <p key={recipe.id}>{recipe.title}</p>
          ))
        )}
      </>
    ) : (
      <Asset spinner />
    )}
  </Container>
  );
};

export default PopularRecipes;