import React from "react";
import {
  DetailContainer,
  DetailPart,
  HeaderContainer,
  ImgContainer,
  IngredContainer,
  OtherPart,
} from "./DetailsStyles";
import dietSvg from "../../assets/diet.svg";
import { useLocation } from "react-router-dom";
const Details = () => {
  const location = useLocation();
  //! useLocation= useNavigate in kardeşidir, navigate in state ine yüklenen veriyi navigate in yönlendirdiği sayfada karşılar

  const recipe = location.state.recipe1;
  console.log(recipe);
  return (
    // alltakiler i yorumdan çıkardığınızda, recipe api sinin buraya yönlenmiş olması gerekir, örneğin useNavigate ile
    <DetailContainer>
      <HeaderContainer>
        <h1> {recipe.label}</h1>
        <img src={dietSvg} alt="" />
      </HeaderContainer>
      <DetailPart>
        <OtherPart>
          <h2>Nutrients</h2>
          <p>
            {recipe.totalNutrients.CA.label} :
            {Math.round(recipe.totalNutrients.CA.quantity)}
            {recipe.totalNutrients.CA.unit}
          </p>
          <p>
            {recipe.totalNutrients.CHOCDF.label} :
            {Math.round(recipe.totalNutrients.CHOCDF.quantity)}
            {recipe.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {recipe.totalNutrients.CHOLE.label} :{" "}
            {Math.round(recipe.totalNutrients.CHOLE.quantity)}
            {recipe.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {recipe.totalNutrients.ENERC_KCAL.label} :{" "}
            {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}
            {recipe.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>{recipe.totalWeight}</p>
          <p>Calories: {Math.round(recipe.calories)}</p>
          {recipe.digest.slice(0, 4).map((item, index) => (
            <p key={index}>
              {item.label} : {Math.round(item.total)}
            </p>
          ))}
        </OtherPart>
        <ImgContainer>
          <img src={recipe.image} alt={recipe.label} />
        </ImgContainer>

        <IngredContainer>
          <h2>Ingredient</h2>
          {recipe.ingredientLines.map((item, indeks) => (
            <div key={indeks}>
              <p>
                {indeks + 1} * {item}
                {/* ingredientLines içinde bir sürü obje var tek tek yazdır, başına no ekle 1*{malzeme} gibi */}
              </p>
            </div>
          ))}
        </IngredContainer>
      </DetailPart>
    </DetailContainer>
  );
};

export default Details;
