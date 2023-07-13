const React = require("react");

const Layout = require("./Layout");

module.exports = function Random({login}) {
    return (
        <Layout login={login}>
            <script defer src="/js/random.js" />
            <div className="randomContainer">
            <div className='randomCocktail' style={{color:"#fbe1a1"}}></div>
         <div className='randomBtn'>
            <button type="button" className="btn btn-outline-warning btn-lg randomCocktik">Get some random fun</button>
            <h1 style={{textAlign:"center"}}>OR</h1>
            <a href='/ingridients'><button className="btn btn-outline-warning btn-lg randomCocktik">Choose what you have</button></a>
         </div>
         </div>
        </Layout>
    )
}