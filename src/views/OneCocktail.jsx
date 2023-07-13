const React = require("react");

const Layout = require("./Layout");

module.exports = function OneCocktail({ login, drink }) {
  console.log(drink[0]);
  return (
    <Layout login={login}>
      <script defer src="/js/oneDrink.js" />
      <div className='exactDrink'>
      <div className="card" style={{ width: "25rem",  color:"#fbe1a1"}}>
        <img src={drink[0].strDrinkThumb} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{drink[0].strDrink}</h5>
          <ul>
            <li>
              {drink[0].strMeasure1} : {drink[0].strIngredient1}
            </li>
            <li>
              {drink[0].strMeasure2} : {drink[0].strIngredient2}
            </li>
            <li>
              {drink[0].strMeasure3} : {drink[0].strIngredient3}
            </li>
            <li>
              {drink[0].strMeasure4} : {drink[0].strIngredient4}
            </li>
            <li>
              {`${drink[0].strMeasure5} : ${drink[0].strIngredient5}` || ""}
            </li>
          </ul>
          <p>{drink[0].strInstructions}</p>
        </div>
      </div>
      </div>
    </Layout>
  );
};
