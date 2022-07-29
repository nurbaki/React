import React from "react";
import {
  MainHeader,
  HeaderContainer,
  FormContainer,
  FoodInput,
  Button,
  Select,
  SubHeader,
} from "./HeaderStyles";

const Header = ({ setMeal, setQuery, getData }) => {
  const submit = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <HeaderContainer>
      <MainHeader>Recipe App</MainHeader>
      <SubHeader>
        You can find 10 special recipe from World Kitchens. Let's search.
      </SubHeader>
      <FormContainer onSubmit={submit}>
        <FoodInput
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Food"
        />

        <Button type="submit">Search</Button>

        <Select onChange={(e) => setMeal(e.target.value)}>
          <option value="Breakfast">Breakfast</option>
          <option selected value="Lunch">
            Lunch
          </option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">Snack</option>
        </Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
