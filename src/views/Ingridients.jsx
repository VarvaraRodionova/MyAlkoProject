const React = require("react");
const Layout = require("./Layout");

module.exports = function Random({props}) {
    return (
        <Layout>
        <script defer src="/js/ingridients.js" />
        <h2 style={{color:"#fbe1a1", marginLeft:'20px', marginBottom:'30px'}}>Check the drinks with chosen ingridient</h2>
        <div id='allIngridients' className='coctCards'></div>
        </Layout>
    )
}