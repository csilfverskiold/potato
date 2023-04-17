import React from 'react'
import appStyles from "../../App.module.css";
import { Container } from 'react-bootstrap';

const PopularRecipes = () => {
  return (
    <Container className={appStyles.Content}>
        <p>Most saved recipes</p>
    </Container>
  )
}

export default PopularRecipes