const React = require("react");

const Layout = require("./Layout");

module.exports = function Kabinet({login, drinks}) {
    console.log(drinks)
    return (
        <Layout login={login}>
        <script defer src="/js/cocktails.js" />
        <script defer src="/js/oneDrink.js" />
        <script defer src="/js/deleteCocktail.js" />
        <script defer src="/js/editCocktail.js" />
        <div className='coctCard'>
          {drinks.map((cocktail)  => (
            <div id={`${cocktail.id}`} className="card cardCreated" style={{width: "18rem;", color:"#fbe1a1"}}>    
            <img src={`${cocktail.link}`} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{cocktail.cocktail}</h5>
              <h3 className="card-ingtidients">{cocktail.ingridients}</h3>
              <p className="card-recipe">{cocktail.recipe}</p>
              <button type='button' className="btn btn-warning editCocktail">Edit cocktail</button>
              <dialog id="editDrink">
              <form method="dialog" className="dialogFormEdit">
                <label htmlFor="singer_name_input">Edit pic link</label>
                <input
                  id="pic_link_input"
                  name="link"
                  type="text"
                  placeholder="picture url"
                  value={`${cocktail.link}`}
                />
                <label htmlFor="drinkTitle_input">Edit cocktail title:</label>
                <input
                  id="drinkTitle_input"
                  name="cocktail"
                  type="text"
                  placeholder="your drink name"
                  value={`${cocktail.cocktail}`}
                />
                <label htmlFor="ingridients_input">Edit ingridients</label>
                <input
                  id="ingridients_input"
                  name="ingridients"
                  type="text"
                  placeholder="what do you need for it"
                  value={`${cocktail.ingridients}`}
                />
                <label htmlFor="recipe_input">Edit the proccess</label>
                <input
                  id="description_input"
                  name="recipe"
                  type="text"
                  placeholder="process of making"
                  value={`${cocktail.recipe}`}
                />
                <div>
                  <input
                    type="submit"
                    value="Change"
                    className="button modalEditBtn btn btn-warning"
                    style={{opacity:'100%'}}
                  />
                </div>
              </form>
            </dialog>
              <button type='button' className="btn btn-warning deleteCocktail">Delete it!</button>
              {/* <a href={`/${cocktail.idDrink}`}> */}
                {/* <button  id={`${cocktail.idDrink}`} className="btn btn-warning getdrink">Make it!</button> */}
                {/* </a> */}
            </div>
          </div>
          )
          )} 
          </div>
        </Layout>
    )
}