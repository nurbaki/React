import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, RecipeCards, RecipeHeader, RecipeImage } from "./HomeStyles";

const RecipeCard = ({ recipe1 }) => {
  let navigate = useNavigate();
  const detayaGit = () => {
    navigate("/details", { state: { recipe1 } });
  };
  return (
    <div>
      <RecipeCards>
        <RecipeHeader>{recipe1.label}</RecipeHeader>
        <RecipeImage src={recipe1.image} />
        <Button onClick={detayaGit}>Details</Button>
      </RecipeCards>
    </div>
  );
};

export default RecipeCard;
