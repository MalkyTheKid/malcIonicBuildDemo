
import { Injectable } from '@angular/core';


import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root' // makes sure that this service is available in all components
})
export class RecipesService {


  private recipes: Recipe[] = [ // we took this from our `recipes.page.ts`
    { // we set this to private so that the array can only be accessed thru the functions `getAllRecipes() and `getRecipe`
      id: 'r1',
      title: 'Skewered Pork Bung',
      imageUrl: 'https://video-images.vice.com/articles/5a83064aab622a3c4327d495/lede/1518538535428-beavis-3.jpeg?crop=1xw:0.9xh;center,center&resize=700:*',
      ingredients: ['Pork Bung', 'Garlic', 'BBQ Sauce', 'Charcoal']
    },
    {
      id: 'r2',
      title: 'Poutine',
      imageUrl: 'https://www.sunnysidecircus.com/wp-content/uploads/2019/01/Poutine_Canadian_Fast_Food_fullwidth.jpg',
      ingredients: ['Fries', 'Gravy', 'Pork', 'Cheese Curds']
    }
  ];

  constructor() { }

// remember, the "..." is the spread operator, which just means that the rest of the values in an array are returned, not just a single data

// BELOW ARE METHODS THAT RETURN RECIPES
  getAllRecipes() {
    return [...this.recipes]; // returns all recipes into an array
  }

  getRecipe(recipeId: string){
    return {
        ...this.recipes.find(recipe => {
        return recipe.id === recipeId; // find recipeId (parameter, provided by user) 
                                      // and return the DATA with a `recipe.id` that is the same with usr's `recipeId`
      })
    };
  }

 // BELOW ARE Methods to interact with recipes
 deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId; // apparently this deletes a recipe from the `recipes` array... hmm...
      // feels like there should be additional script, but ok. When working with databases, data above should be deleted.

      // this is called on the recipe-detail page, on the "trash" icon
    });
 }

}
