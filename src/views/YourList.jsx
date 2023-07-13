const React = require("react");

const Layout = require("./Layout");

module.exports = function Random({login, drinks}) {
    console.log(drinks)
    return (
        <Layout login={login}>
        <script defer src="/js/cocktails.js" />
        <script defer src="/js/oneDrink.js" />
        <div className='coctCards'>
          {drinks.map((cocktail)  => (
            <div className="card" style={{width: "18rem;", color:"#fbe1a1"}}>
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
        </Layout>
    )
}