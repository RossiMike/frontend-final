// This program is a Web-Based Recipe Manager with DOM Manipulation.

// Adds a new recipe to the list using unique id and default `favorite` status as `false`.
function addRecipe(name, description, category) {
    const newRecipe = {
        id: recipes.length ? recipes[recipes.length - 1].id + 1 : 1,
        isFavorite: false,
        name: name,
        description: description,
        category: category
    }

    recipes.push(newRecipe);
    displayRecipes();
    saveRecipesToLocalStorage();
}

// Displays the recipes according to the entered list, otherwise defaults to the initial recipe.
function displayRecipes(filteredRecipes = recipes) {

    // Clears the area where the recipes are showed

    document.getElementById("recipe").innerHTML = "";

    for (let recipe of filteredRecipes) {

        const recipeItem = document.createElement("li");
        recipeItem.className = recipe.name;

        const details = document.createElement("span");
        details.textContent = `${recipe.name} ${recipe.description} ${recipe.category}`;

        // create favorite button and adds functionality to toggle between favorite or not
        const favoriteBtn = document.createElement("button");
        favoriteBtn.className = "favorite-button"
        favoriteBtn.textContent = recipe.isFavorite ? "Favorite" : "Hmm...";
        favoriteBtn.addEventListener("click", function () {
            toggleRecipeFavorite(recipe.id)
            displayRecipes();
        })

        // creates delete button and adds functionality to delete the current recipe
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-button"
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function () {
            deleteRecipe(recipe.id);
        })

        // creates update description button and gives functionality to update the description
        const updateBtn = document.createElement("button");
        updateBtn.className = "update-description-button";
        updateBtn.textContent = "Update Description";
        updateBtn.addEventListener("click", function () {
            promptUpdateDescription(recipe.id);
            displayRecipes();
        })

        // appends elements to recipeItem
        recipeItem.appendChild(details);
        recipeItem.appendChild(favoriteBtn);
        recipeItem.appendChild(deleteBtn);
        recipeItem.appendChild(updateBtn);

        // appends recipe element to recipeList
        const recipeList = document.getElementById("recipe");
        recipeList.appendChild(recipeItem);

    }
}

// Toggles the isFavorite status of a recipe based on the recipe id.
function toggleRecipeFavorite(id) {
    if (recipes.length < 1) {
        return
    }
    const recipe = recipes.find(recipe => recipe.id === id);
    if (recipe) {
        recipe.isFavorite = !recipe.isFavorite;
    }
    saveRecipesToLocalStorage();
}

// Removes a recipe from the list based on the recipe id.
function deleteRecipe(id) {
    recipes = recipes.filter((recipe) => recipe.id !== id);
    displayRecipes();
    saveRecipesToLocalStorage()
}

// Returns a new array containing only the recipes that are marked as favorite.
function filterFavoriteRecipes() {
    return recipes.filter(recipe => recipe.isFavorite === true);
}

// Sorts the recipes list by their category in alphabetical order.
function sortRecipesByCategory() {
    return recipes.sort((a, b) => a.category > b.category);
}

// Updates the description of a specific recipe by its id checking if id exists logging "not found" message.
function updateRecipeDescription(id, newDescription) {
    recipes.find(recipe => recipe.id === id ? recipe.description = newDescription : console.log("ID: " + id + " not found"));
    saveRecipesToLocalStorage();
}

// Displays a report of total recipes, number of favorite recipes and number of recipes that are not marked as favorites.
function generateRecipeReport() {
    let totalRecipes = recipes.length;
    let totalFavoriteRecipes = filterFavoriteRecipes().length;
    let totalNonFavoriteRecipes = totalRecipes - totalFavoriteRecipes;
    // This function produces HTML output
    let paragraph = document.createElement("p");
    paragraph.textContent = `Total Recipes: ${totalRecipes}, Favorite Recipes: ${totalFavoriteRecipes}, Remaining Recipes: ${totalNonFavoriteRecipes}`;
    document.getElementById("displayReport").appendChild(paragraph);


}

// Serializes the current recipe list and saves it to local storage.
function saveRecipesToLocalStorage() {
    localStorage.setItem("recipes", JSON.stringify(recipes));
}

// Retrives the recipe list from local storage and deserializes it into the recipe array.
function loadRecipesFromLocalStorage() {
    const storedRecipes = localStorage.getItem("recipes");
    if (storedRecipes) {
        recipes = JSON.parse(storedRecipes);
    }
}

// search recipes from recipeList
function search() {
    displayRecipes()
    // Declare variables
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('search-recipe');
    filter = input.value.toUpperCase();
    ul = document.getElementById("recipe");
    li = ul.getElementsByTagName('li');
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("span")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// This function prompts the user to enter a new description and updates the recipe.
function promptUpdateDescription(id) {
    const newDescription = prompt("Enter new recipe description:");
    if (newDescription) {
        updateRecipeDescription(id, newDescription);
    }
}

// Initialiaze the list of recipes.
let recipes = [];

// Loads recipes from local storage if they exists.
loadRecipesFromLocalStorage();

// Adds functionality to recipe-add button
document.getElementById("recipe-add").addEventListener("click", function () {
    let recipeName = document.getElementById("recipe-name");
    let recipeDescription = document.getElementById("recipe-description");
    let recipeCategory = document.getElementById("recipe-category");
    let text = recipeCategory.options[recipeCategory.selectedIndex].text;

    if ((recipeName.value !== "") && (recipeDescription.value !== "")) {
        addRecipe(recipeName.value, recipeDescription.value, text);
    }
    recipeName.value = "";
    recipeDescription.value = "";
    displayRecipes();

})

// adds functionality to show all button
document.getElementById("btnShowAll").addEventListener("click", function () {
    if (document.getElementById("recipe").innerHTML === "") {
        document.getElementById("btnShowAll").textContent = "Hide All";
        displayRecipes();
    } else {
        document.getElementById("btnShowAll").textContent = "Show All";
        document.getElementById("recipe").innerHTML = ""
    }
})

// adds functionality to show  favorite button
document.getElementById("btnShowFavorite").addEventListener("click", function () {
    displayRecipes(filterFavoriteRecipes());
    document.getElementById("btnShowAll").textContent = "Hide All";
})

// adds functionality to sort by category button
document.getElementById("btnSortByCategory").addEventListener("click", function () { displayRecipes(sortRecipesByCategory()) })

// adds functionality to generate button
document.getElementById("btnGenerateReport").addEventListener("click", function () {
    if (document.getElementById("displayReport").innerHTML === "") {
        generateRecipeReport();
    } else {
        document.getElementById("displayReport").innerHTML = "";
    }
});

// adds functionality to Search bar
document.getElementById('search-recipe').addEventListener("keyup", function () {
    search();
})





