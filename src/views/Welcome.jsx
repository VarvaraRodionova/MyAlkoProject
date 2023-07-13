const React = require("react");

const Layout = require("./Layout");

module.exports = function Welcome({ login }) {
  return (
    <Layout login={login}>
            <script defer src="/js/userDrinks.js" />
      <div className="welcomeContainer">
        <div className="cards">
          <div class="card begin" style={{ width: "56rem;" }}>
            {/* <img src="https://media.giphy.com/media/xT1XGSbmXbxbHJF7iw/giphy.gif" class="card-img-top" alt="..."/> */}
            <div className="card-body start" style={{color:"#fbe1a1"}}>
              <h1 className="card-title">Let's get started</h1>
              <p className="card-text">
                Here you can see all the recipies we have or find out what you
                can make from your home bar
              </p>
            </div>
          </div>
          <div className="mainPageBtns">
            <a href="/random" style={{textDecoration:"none", color:"#fbe1a1"}}>
              <div class="card all" style={{ width: "25rem;" }}>
                <img
                  src="/stylesheets/img/Bacardi_Oldcuban_Lifestyleasset_PKX.webp"
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h2 className="card-title">All the recipes</h2>
                  <p className="card-text"></p>
                </div>
              </div>
            </a>
            <a href="/spirits" style={{textDecoration:"none", color:"#fbe1a1"}}>
              <div class="card you" style={{ width: "25rem;" }}>
                <img
                  src="/stylesheets/img/irish-manhatten-cocktail-thumbnail_1x1-3-2.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h2 className="card-title">What YOU can make</h2>
                  <p className="card-text"></p>
                </div>
              </div>
            </a>
          </div>
          <div className="create">
            <button className="btn btn-outline-warning btn-lg createDrink">
              Create your drink
            </button>
            <dialog id="newDrink">
              <form method="dialog" className="dialogForm" style={{color:"#fbe1a1"}}>
                <label htmlFor="singer_name_input">Pic link</label>
                <input
                  id="pic_link_input"
                  name="link"
                  type="text"
                  placeholder="picture url"
                  value=""
                />
                <label htmlFor="drinkTitle_input">Cocktail title:</label>
                <input
                  id="drinkTitle_input"
                  name="cocktail"
                  type="text"
                  placeholder="your drink name"
                  value=""
                />
                <label htmlFor="ingridients_input">What do you need for it</label>
                <input
                  id="ingridients_input"
                  name="ingridients"
                  type="text"
                  placeholder="what do you need for it"
                  value=""
                />
                <label htmlFor="recipe_input">How you make it?</label>
                <input
                  id="description_input"
                  name="recipe"
                  type="text"
                  placeholder="process of making"
                  value=""
                />
                <div>
                  <input
                    type="submit"
                    value="Create drink"
                    className="button modalBtn btn btn-warning"
                    style={{opacity:'100%', marginTop:"20px"}}
                  />
                </div>
              </form>
            </dialog>
          </div>
        </div>
      </div>
    </Layout>
  );
};
