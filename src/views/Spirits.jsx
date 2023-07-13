const React = require("react");

const Layout = require("./Layout");

module.exports = function Spirits({ login }) {
  return (
    <Layout login={login}>
      <script defer src="/js/cocktails.js" />
      <script defer src="/js/mp.js" />
      <form className="spiritForm">
        <div className="twoColumns">
          <div>
            <div className="chooseSpirit">
              <h1>Vodka</h1>
              <input
                name="vodka"
                className="form-check-input"
                type="checkbox"
                id="checkboxNoLabel"
                value=""
                aria-label="..."
              />
            </div>
            <div className="chooseSpirit">
              <h1>Gin</h1>
              <input
                name="gin"
                className="form-check-input"
                type="checkbox"
                id="checkboxNoLabel"
                value=""
                aria-label="..."
              />
            </div>
            <div className="chooseSpirit">
              <h1>Rum</h1>
              <input
                name="rum"
                className="form-check-input"
                type="checkbox"
                id="checkboxNoLabel"
                value=""
                aria-label="..."
              />
            </div>
            <div className="chooseSpirit">
              <h1>Tequila</h1>
              <input
                name="tequila"
                className="form-check-input"
                type="checkbox"
                id="checkboxNoLabel"
                value=""
                aria-label="..."
              />
            </div>
          </div>
          <div>
            <div className="chooseSpirit">
              <h1>Absinthe</h1>
              <input
                name="absinthe"
                className="form-check-input"
                type="checkbox"
                id="checkboxNoLabel"
                value=""
                aria-label="..."
              />
            </div>
            <div className="chooseSpirit">
              <h1>Grappa</h1>
              <input
                name="grappa"
                className="form-check-input"
                type="checkbox"
                id="checkboxNoLabel"
                value=""
                aria-label="..."
              />
            </div>
            <div className="chooseSpirit">
              <h1>Whiskey</h1>
              <input
                name="whiskey"
                className="form-check-input"
                type="checkbox"
                id="checkboxNoLabel"
                value=""
                aria-label="..."
              />
            </div>
            <div className="chooseSpirit">
              <h1>Cognac</h1>
              <input
                name="cognak"
                className="form-check-input"
                type="checkbox"
                id="checkboxNoLabel"
                value=""
                aria-label="..."
              />
            </div>
          </div>
        </div>
        <button className="btn btn-outline-warning chosenSpirit" type="submit">
          Send me cocktails
        </button>
      </form>
      <div className='btnMap'>
      <button className="btn btn-warning btn-lg showMap" type="button" style={{alignSelf:'center'}}>I don't have anything at home...</button>
      <dialog className='mapDialog'>
        <form id='mapDialog'>
        <div style={{position:"relative",overflow:"hidden;"}}><a href="https://yandex.ru/maps/213/moscow/search/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B5%26%D0%91%D0%B5%D0%BB%D0%BE%D0%B5/?utm_medium=mapframe&utm_source=maps" style={{color:"#eee",fontSize:"12px",position:"absolute",top:"0px;"}}>Красное&Белое в Москве</a><a href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" style={{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"}}>Москва</a><iframe src="https://yandex.ru/map-widget/v1/?display-text=%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B5%26%D0%91%D0%B5%D0%BB%D0%BE%D0%B5&ll=37.665231%2C55.765564&mode=search&sll=37.706129%2C55.767632&sspn=2.338905%2C0.842012&text=%7B%22text%22%3A%22%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B5%26%D0%91%D0%B5%D0%BB%D0%BE%D0%B5%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22chain_id%22%2C%22attr_values%22%3A%5B%222860377272%22%5D%7D%5D%7D&z=12.21" width="100%" height="400" frameborder="1" allowfullscreen="true" style={{position:"relative;"}}></iframe></div>
        </form>
      </dialog>
      </div>
    </Layout>
  );
};
