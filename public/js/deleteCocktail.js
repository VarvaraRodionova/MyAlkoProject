const deleteCocktail = document.querySelectorAll('.deleteCocktail')


deleteCocktail.forEach((el) => {
    el.addEventListener('click', async (event) => {
        console.log(event.target.parentNode.parentNode)
        const response = await fetch(`/delete/${event.target.parentNode.parentNode.id}`, {
            method: 'DELETE'
        })
        event.target.parentNode.parentNode.remove()
    })
})