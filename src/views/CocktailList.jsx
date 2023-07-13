const React = require("react");
const Layout = require("./Layout");

module.exports = function CocktailList({resultArr}) {
    console.log(resultArr)
    return (
        <Layout>
             <script defer src="/js/oneDrink.js" />
             <div className="listPage">
             <h2 style={{color:"#fbe1a1", textAlign:"center", marginBottom:'30px'}}>Look, here you can choose the drink with the ingridient of your choice</h2>
        <div className='coctCards'>
          {resultArr.map((cocktail)  => (
            <div className="card" style={{width: "15rem;", color:"#fbe1a1"}}>
            <img src={`${cocktail.strDrinkThumb}`} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{cocktail.strDrink}</h5>
              {/* <a href={`/${cocktail.idDrink}`}> */}
                <button  id={`${cocktail.idDrink}`} className="btn btn-warning getdrink">Make it!</button>
                {/* </a> */}
            </div>
          </div>
          )
          )} 
          </div>
          </div>
        </Layout>
    )
}