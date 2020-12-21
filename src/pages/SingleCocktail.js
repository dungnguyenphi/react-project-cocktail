import React from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);
  React.useEffect(() => {
    setLoading(true);
    const getCocktail = async () => {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail([]);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getCocktail();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h1>No cocktail to display</h1>;
  }
  const {
    name,
    image,
    category,
    info,
    glass,
    instructions,
    ingredients,
  } = cocktail;
  return (
    <section>
      <Link to="/" className="details-btn">
        Back home
      </Link>
      <h2>{name}</h2>
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <article className="cocktail-info">
        <h4>catergory:{category}</h4>
        <h4>infor:{info}</h4>
        <h4>Glass:{glass}</h4>
        <h4>instructions:{instructions}</h4>
        <div className="ingredients">
          Ingredients:
          {ingredients.map((item, index) => {
            if (item) return <span key={index}>{item},</span>;
          })}
        </div>
      </article>
    </section>
  );
}

export default SingleCocktail;
