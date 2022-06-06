const searchBar = document.querySelector('.search-bar') // Get the main search bar
const emptyRecipesMessage = document.getElementById('empty-recipes-message') // Get the fallback message section if no recipes match
searchBar.addEventListener('input', (event) => {
    filters.textInputed = event.target.value
    filterRecipes(filters)
})
// Create a set from the main list of recipes
let recipesFiltered = new Set(recipes)
// an object that contains all of filters selected by the user
const filters = {
    textInputed  : "",
    ingredients  : [],
    ustensils  : [],
    appliances  : []
}
// the main function that applies all filters selected by the user from the object 'filters' 
function filterRecipes(research){
    recipesFiltered = new Set(recipes)
    filterByText(research.textInputed.toLowerCase())
    recipesSection.innerHTML = ''
    if (!recipesFiltered.size){
        const elt = document.getElementById('empty-recipes-model');
        const dupNode = document.importNode(elt.content,true);
        emptyRecipesMessage.innerHTML = ''
        emptyRecipesMessage.appendChild(dupNode)
    }
    else {
        emptyRecipesMessage.innerHTML = ''
        populateRecipes(recipesFiltered)
    }
    
}

function filterByText(text) { 
    const filteredRecipesList = []
    if (text.length < 3) return
    for (let i= 0 ; i < recipesFiltered.size ; i++){
        const recipe = Array.from(recipesFiltered)[i]
        if (recipe.name.toLowerCase().includes(text)) 
        { 
            filteredRecipesList.push(recipe)
        }
        else if (recipe.description.toLowerCase().includes(text)) {
            filteredRecipesList.push(recipe)
        }
        else
        for (let i= 0 ; i < recipe.ingredients.length ; i++){
            const ingredient = recipe.ingredients[i] 
            if (ingredient.ingredient.toLowerCase().includes(text))
            {
                filteredRecipesList.push(recipe)
            }
        }
    }
    recipesFiltered = new Set(filteredRecipesList)
}