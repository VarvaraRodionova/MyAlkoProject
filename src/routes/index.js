const router = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");
const { checkUser } = require("../middlewares/common");
const Welcome = require("../views/Welcome");
const Spirits = require("../views/Spirits");
const Random = require("../views/Random");
const YourList = require("../views/YourList");
const OneCocktail = require("../views/OneCocktail");
const { Cocktail, User } = require("../../db/models");
const Kabinet = require("../views/Kabinet");
const Ingridients = require('../views/Ingridients')
const CocktailList = require('../views/CocktailList')

router.get("/", (req, res) => {
  const { login } = req.session;
  renderTemplate(Welcome, { login }, res);
});

router.get("/random", (req, res) => {
  const { login } = req.session;
  renderTemplate(Random, { login }, res);
});

router.get("/kabinet", async (req, res) => {
  const { login } = req.session;
  console.log(login)
  const user = await User.findOne({ where: { name: login } });
  console.log(user)
  const drinks = await Cocktail.findAll({ where: { user_id: user.id } });
  renderTemplate(Kabinet, { login, drinks }, res);
});


router.get('/ingridients', (req,res) => {
  renderTemplate(Ingridients, {}, res)
})

router.get('/ingridients/:ingridient', async (req,res) => {
  const {ingridient} = req.params
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingridient}`)
  const result = await response.json()
  const resultArr = result.drinks
  console.log(result)
  renderTemplate(CocktailList, {resultArr}, res)
})

router.delete('/delete/:id', async(req,res) => {
  const {id} = req.params
  await Cocktail.destroy({where: {id}})
  res.sendStatus(200)
})

router.put('/edit/:id', async(req,res) => {
  const {id} = req.params
  console.log(id, "TUT ID")
  const {link, cocktail, ingridients, recipe} = req.body
  console.log(req.body, 'REQ BODY')
  await Cocktail.update({link, cocktail, ingridients, recipe}, {where: {id}})
  const editedCocktail = await Cocktail.findOne({where: {id}})
  console.log(editedCocktail, 'SMOTRIM RUCHKU NA EDIT')
  res.json(editedCocktail)
})

router.post("/list", (req, res) => {
 // const { login } = req.session;
  const { drinks } = req.body;
  req.app.locals.drinks = drinks;
  res.sendStatus(200);
});

router.post("/onedrink", (req, res) => {
  const { drinks } = req.app.locals;
  //const { idDrink } = req.body;
  res.json(drinks);
});

router.post("/user/newRecipe", async (req, res) => {  //checkUser
  const { login } = req.session;
  const user = await User.findOne({ where: { name: login } });
  const { link, cocktail, ingridients, recipe } = req.body;
  const newCocktail = await Cocktail.create({
    link:link||null||undefined,
    cocktail,
    ingridients,
    recipe,
    user_id:user.id,
  });
  res.redirect("/");
});

router.post("/cocktails/:id", (req, res) => {
  const { drinks } = req.body;
  req.app.locals.drink = drinks;
  res.sendStatus(200);
});

router.get("/cocktails/:id", (req, res) => {
  const { drink } = req.app.locals;
  const { login } = req.session;
  renderTemplate(OneCocktail, { drink, login }, res);
});

router.get("/list", (req, res) => {
  const { login } = req.session;
  const { drinks } = req.app.locals;
  renderTemplate(YourList, { login, drinks }, res);
});

router.get("/spirits", (req, res) => {
  console.log("ruchka works");
  const { login } = req.session;
  renderTemplate(Spirits, { login }, res);
});

router.get("/drink", (req, res) => {
  const { login } = req.session;
  renderTemplate(OneCocktail, { login }, res);
});

router.get("/logout", checkUser, (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("AlkoCookie");
    res.redirect("/");
  });
});

router.post('/check/login', (req,res) => {
  const {login} = req.session
  console.log(login)
  res.json({status:login})
})

module.exports = router;
