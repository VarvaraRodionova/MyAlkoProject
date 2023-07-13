showMap = document.querySelector('.showMap')
mapDialog = document.querySelector('.mapDialog')

showMap.addEventListener('click', (e) => {
// console.log('karta tuuut')
const mapHere = `
<div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/213/moscow/search/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B5%26%D0%91%D0%B5%D0%BB%D0%BE%D0%B5/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Красное&Белое в Москве</a><a href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Москва</a><iframe src="https://yandex.ru/map-widget/v1/?display-text=%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B5%26%D0%91%D0%B5%D0%BB%D0%BE%D0%B5&ll=37.665231%2C55.765564&mode=search&sll=37.706129%2C55.767632&sspn=2.338905%2C0.842012&text=%7B%22text%22%3A%22%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B5%26%D0%91%D0%B5%D0%BB%D0%BE%D0%B5%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22chain_id%22%2C%22attr_values%22%3A%5B%222860377272%22%5D%7D%5D%7D&z=12.21" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
`
alert('Then find a closest alko market')
mapDialog.showModal(mapHere)
})

// document.addEventListener('click', (event) => {
//     if(!event.target.classList.contains(mapDialog))
//     mapDialog.close()
// })

