### Project: Recipe Manager 

This project involves creating a Recipe Manager application using JavaScript. The project is divided into two parts: a console-based application and a web-based application with DOM manipulation. The objective is to apply fundamental JavaScript concepts and DOM manipulation techniques to build a functional and interactive recipe manager.

---

### Part 1: Console-Based Recipe Manager 

#### Project Overview

Develop a simple yet robust recipe manager using JavaScript. This part focuses on applying fundamental JavaScript concepts such as arrays, objects, functions, control statements, and more. Manipulate data structures, implement function-based logic, and use JavaScript syntax effectively to manage and report on recipe status. The application will run operations programmatically to simulate real-world coding practices without a user interface. 

#### Features and Tasks 

1. **Initialize the Recipe List** 

   - **Task**: Start with an array of recipes. Each recipe is an object containing the following properties: 

     - `id`: A unique identifier for the recipe.

     - `name`: The name of the recipe.

     - `description`: A brief description of the recipe.

     - `category`: The category of the recipe (e.g., Breakfast, Lunch, Dinner, Dessert).

     - `favorite`: A boolean indicating whether the recipe is marked as favorite (true or false).

2. **Add New Recipe** 

   - **Task**: Implement a function `addRecipe(name, description, category)` that adds a new recipe to the list. Each new recipe should have a unique `id`, default `favorite` status as `false`.

3. **Display Recipes** 

   - **Task**: Write a function `displayRecipes()` that logs all recipes. For each recipe, display its `id`, `name`, `description`, `category`, and `favorite` status.

4. **Toggle Recipe as Favorite** 

   - **Task**: Create a function `toggleRecipeFavorite(id)` that toggles the favorite status of a specified recipe by setting its `favorite` property to `true` or `false` based on the recipe `id`.

5. **Delete Recipe** 

   - **Task**: Develop a function `deleteRecipe(id)` that removes a recipe from the list based on the recipe `id`.

6. **Filter Favorite Recipes** 

   - **Task**: Implement a function `filterFavoriteRecipes()` that returns a new array containing only the recipes that are marked as favorite (`favorite: true`).

7. **Sort Recipes by Category**

   - **Task**: Implement a function `sortRecipesByCategory()` that sorts the recipe list by their category in alphabetical order.

8. **Update Recipe Description** 

   - **Task**: Create a function `updateRecipeDescription(id, newDescription)` that updates the description of a specific recipe by its `id`. Include validation to check if the recipe with the provided `id` exists; if not, log an appropriate message indicating the recipe is not found. 

9. **Generate Recipe Report with Template Literals** 

   - **Task**: Create a function `generateRecipeReport()` that logs a summary of recipes using template literals. The summary should include total recipes, number of favorite recipes, and number of recipes that are not marked as favorites.

10. **Save and Retrieve Data from Local Storage** 

    - **Task**: Implement functionality to save and retrieve the recipe list from the browser's local storage. 

      - **Save Recipes**: Write a function `saveRecipesToLocalStorage()` that serializes the current recipe list and saves it to local storage. 

      - **Retrieve Recipes**: Write a function `loadRecipesFromLocalStorage()` that retrieves the recipe list from local storage and deserializes it into the recipe array. 

      - **Initialize from Local Storage**: Modify the initialization process to load recipes from local storage if they exist. If not, initialize with an empty recipe list. 

      - **Auto-Save**: Ensure that every change to the recipe list (addition, deletion, update) automatically saves the updated list to local storage. 

#### Test Script 

```javascript 

console.log("--- Adding Recipes ---"); 

addRecipe("Pancakes", "Delicious breakfast pancakes", "Breakfast"); 

addRecipe("Caesar Salad", "Classic Caesar salad", "Lunch"); 

addRecipe("Grilled Chicken", "Juicy grilled chicken", "Dinner"); 

displayRecipes(); 

console.log("--- Updating Recipe Descriptions ---"); 

updateRecipeDescription(1, "Fluffy breakfast pancakes"); 

displayRecipes(); 

console.log("--- Toggling Recipe Favorite Status ---"); 

toggleRecipeFavorite(1); 

toggleRecipeFavorite(2); 

displayRecipes(); 

console.log("--- Sorting Recipes by Category ---"); 

sortRecipesByCategory(); 

displayRecipes(); 

console.log("--- Filtering Favorite Recipes ---"); 

const favoriteRecipes = filterFavoriteRecipes(); 

favoriteRecipes.forEach((recipe) => 
  console.log(`Favorite Recipe - ID: ${recipe.id}, Name: ${recipe.name}`) 
);

console.log("--- Deleting a Recipe ---"); 

deleteRecipe(2); 

displayRecipes(); 

console.log("--- Generating Recipe Report ---"); 

generateRecipeReport(); 

``` 

--- 

### Part 2: Web-Based Recipe Manager with DOM Manipulation 

#### Project Overview 

This part involves writing the HTML, CSS, and JavaScript methods to create a functional recipe manager. You will implement the required functionality step-by-step using DOM manipulation techniques to create an interactive user interface.

#### HTML Structure 

- **Input Fields**: Fields for entering the recipe name, description, and selecting a category.

- **Buttons**: Buttons to add recipes, show all recipes, show favorite recipes, sort recipes by category, and generate a recipe report.

- **Recipe List Container**: A section to display the list of recipes.

- **Report Section**: A section to display the summary report of recipes.

### Guidelines for HTML and CSS

#### HTML Guidelines

1. **Basic Structure:**
   - Create the basic HTML structure with a `DOCTYPE`, `html`, `head`, and `body` tags.
   - Include a `meta` tag for character set and viewport settings.
   - Add a `title` tag for the page title.
   - Link an external CSS file for styling.

2. **Container:**
   - Use a `div` element with a class of `container` to wrap the main content of the Recipe Manager application.

3. **Header:**
   - Use an `h1` element for the main heading of the application.

4. **Recipe Input Section:**
   - Create a `div` element with a class of `recipe-input`.
   - Inside this `div`, include:
     - An `input` element for the recipe name with an appropriate `id` and `placeholder` attribute.
     - An `input` element for the recipe description with an appropriate `id` and `placeholder` attribute.
     - A `select` element for the recipe category with an appropriate `id` and multiple `option` elements for different categories.
     - A `button` element for adding a new recipe with an appropriate `id`.

5. **Recipe Filter Section:**
   - Create a `div` element with a class of `recipe-filter`.
   - Inside this `div`, include buttons for:
     - Showing all recipes.
     - Showing favorite recipes.
     - Sorting recipes by category.
   - Assign appropriate `id` attributes to these buttons.

6. **Recipe Report Section:**
   - Create a `div` element with a class of `recipe-report`.
   - Inside this `div`, include:
     - A button for generating a recipe report with an appropriate `id`.
     - A `div` element to display the report content with an appropriate `id`.

7. **Recipe List Section:**
   - Create a `div` element with a class of `recipe-list`.
   - Inside this `div`, include an unordered list (`ul`) with an appropriate `id` to display the list of recipes.

#### CSS Guidelines

1. **Container Styling:**
   - Center the `container` element within the viewport.
   - Set a maximum width and add padding for spacing.
   - Apply a background color, box shadow, and border radius for visual appeal.

2. **Header Styling:**
   - Center the text of the `h1` element.
   - Choose a color that stands out against the background.

3. **Input and Select Styling:**
   - Style the `input` and `select` elements to have a uniform appearance.
   - Add padding, border, and border-radius for aesthetics.
   - Set a consistent width for all input fields to align them properly.

4. **Button Styling:**
   - Style the buttons to have a consistent appearance.
   - Use padding, background color, text color, border, and border-radius.
   - Add a hover effect to provide feedback when the button is interacted with.

5. **Recipe List Styling:**
   - Remove default list styling (e.g., bullets) from the `ul` element.
   - Style the `li` elements to have padding, margin, border, and border-radius.
   - Use different styles or classes to visually distinguish favorite recipes.

6. **Recipe Item Buttons:**
   - Style the buttons within each recipe item similarly to the other buttons.
   - Ensure they are visually distinct and have hover effects.

7. **Report Section Styling:**
   - Style the report section to clearly display the recipe summary.
   - Use appropriate font sizes, margins, and padding for readability. 

By following these guidelines, students will be able to create a structured and visually appealing Recipe Manager application using HTML and CSS.

#### Instructions 

1. **Add Event Listener to "Add Recipe" Button** 

   - Select the "Add Recipe" button using a selector (e.g., `document.getElementById` or `document.querySelector`). 

   - Attach an event listener to the button that triggers when it's clicked. 

   - Inside the event listener function, select the input fields for recipe name, description, and category using selectors. 

   - Retrieve the values from the input fields. 

   - Check if the recipe name and description are not empty. 

   - Call the provided `addRecipe` function with the retrieved values as arguments. 

   - Clear the input fields by setting their values to empty strings. 

   - Call the `displayRecipes` function to update the recipe list displayed on the page. 

2. **Display Recipes in the `displayRecipes` Function**

   - Select the recipe list container using a selector (e.g., `document.getElementById` or `document.querySelector`).

   - Loop through the `recipes` array and create list items for each recipe.

   - Add the necessary structure inside each `li` element to display recipe details and buttons:

     - Create an `li` element for each recipe.

     - Add a `span` element to display the recipe name, description, and category.

     - Add a button element with the class "favorite-button" and text "Favorite".

       - *Hint*: This button will be used to mark the recipe as favorite.

     - Add a button element with the class "delete-button" and text "Delete".

       - *Hint*: This button will be used to delete the recipe.

     - Add a button element with the class "update-description-button" and text "Update Description".

       - *Hint*: This button will be used to update the recipe's description.

   - Append the list items to the recipe list container. 

3. **Mark Recipe as Favorite**

   - Ensure each "Favorite" button has an event listener attached when it's created. 

   - In the event listener, call the `toggleRecipeFavorite` function with the corresponding recipe `id`.

   - After calling `toggleRecipeFavorite`, call the `displayRecipes` function to refresh the recipe list.

4. **Delete Recipe** 

   - Ensure each "Delete" button has an event listener attached when it's created. 

   - In the event listener, call the `deleteRecipe` function with the corresponding recipe `id`. 

   - After calling `deleteRecipe`, call the `displayRecipes` function to refresh the recipe list. 

5. **Filter and Show Favorite Recipes** 

   - Select the "Show Favorite Recipes" button using a selector (e.g., `document.getElementById` or `document.querySelector`). 

   - Attach an event listener to the button that triggers when it's clicked. 

   - Call the provided `filterFavoriteRecipes` function to get only the favorite recipes. 

   - Call the `displayRecipes` function with the filtered recipes as an argument to update the displayed recipe list. 

6. **Show All Recipes** 

   - Select the "Show All Recipes" button using a selector (e.g., `document.getElementById` or `document.querySelector`). 

   - Attach an event listener to the button that triggers when it's clicked. 

   - Call the `displayRecipes` function without any arguments to display all recipes. 

7. **Update Recipe Description** 

   - Ensure each "Update Description" button has an event listener attached when it's created. 

   - In the event listener, call the provided `promptUpdateDescription` function with the corresponding recipe `id`. 

   - After calling `promptUpdateDescription`, call the `displayRecipes` function to refresh the recipe list. 

8. **Generate Recipe Report** 

   - Select the "Generate Recipe Report" button using a selector (e.g., `document.getElementById` or `document.querySelector`). 

   - Attach an event listener to the button that triggers when it's clicked. 

   - Modify the provided `generateRecipeReport` function to produce HTML output instead of logging to the console: 

     - Select the recipe report container using a selector. 

     - Clear any existing content in the recipe report container. 

     - Create HTML elements to display the total number of recipes, favorite recipes, and remaining recipes. 

     - Set the text content of these elements to the corresponding

### Final Task: Implement Recipe Search Functionality

For students looking for an extra challenge, add a search functionality to the Recipe Manager application. This task will involve implementing a feature that allows users to search for recipes by their name or description.

#### Task: Implement Recipe Search Functionality

1. **Create a Search Input Field and Button:**
   - Add an input field and a button to the HTML structure where users can type in a search term.
   - The input field should have an appropriate `id`, such as `searchInput`.
   - The button should have an appropriate `id`, such as `searchButton`.

2. **Add Event Listener to the Search Button:**
   - Select the search button using a selector (e.g., `document.getElementById` or `document.querySelector`).
   - Attach an event listener to the button that triggers when it's clicked.
   - Inside the event listener function, select the input field for the search term using a selector.
   - Retrieve the value from the input field.

3. **Implement the Search Logic:**
   - Create a function `searchRecipes(term)` that filters the recipes based on the search term.
   - The function should return a new array containing only the recipes where the name or description includes the search term (case-insensitive).

4. **Display Search Results:**
   - Inside the event listener function, call the `searchRecipes` function with the retrieved search term.
   - Call the `displayRecipes` function with the filtered recipes as an argument to update the displayed recipe list.

5. **Clear the Search Field:**
   - After displaying the search results, clear the search input field by setting its value to an empty string.
