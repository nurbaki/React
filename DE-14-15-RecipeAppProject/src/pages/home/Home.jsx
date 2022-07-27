import { useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import { HomeImg, ImgDiv, MainContainer } from "./HomeStyles";
import homeSvg from "../../assets/home.svg";

const APP_ID = "7164b2bc";
const APP_KEY = "6752e657e8aba29be6a2f75c9a0fc48a";
/****buraya kendi id ve key imizi yaziyoruz**********/

const Home = () => {
  const [query, setQuery] = useState("pizza");
  const [bilgiler, setBilgiler] = useState();
  //! normalde useState ile yemekler adında boş bir dizi oluşturmamız, return den sonra map işleminde hata almamak için önemli,
  //! boş dizi oluşturmazsak, dizi varsa map le dememiz gerekir. bu örnekte dizi varsa dizi elemanlarını dizi yoksa
  //! aşçı resmini bastır diyeceğim için, yani dizinin varlığını kontrol ederek işlem yaptığım için,
  //! en başta yemekler i dizi değil boşluk yaptım

  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [meal, setMeal] = useState(mealTypes[1].toLowerCase());

  // query=yazdığımız sorgu kelimesi, meal=breakfast vs
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async () => {
    const veri = await axios.get(url);
    setBilgiler(veri.data.hits);
    // console.log(bilgiler);
  };

  return (
    <div>
      <Header setMeal={setMeal} setQuery={setQuery} getData={getData} />

      {bilgiler ? (
        <MainContainer>
          {bilgiler.map((i, index) => (
            <RecipeCard key={index} recipe1={i.recipe} />
          ))}
        </MainContainer>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
    </div>
  );
};

export default Home;
