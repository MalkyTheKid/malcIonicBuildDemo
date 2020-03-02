import { Component, OnInit } from '@angular/core';

// add the recipe model, which defines what a recipe looks like
import { Recipe } from './recipe.model';

// import the list of recipes defined in `recipes.service` file
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  /* Let's define here all our Recipes. On our recipes.page.html this is iterated by `let recipe of recipes` */
  /* we now moved this array of recipes to `recipes.service.ts`

  recipes: Recipe[] = [
    {
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
  ]
  */
  /** End of Definition **/

  // define a generic recipes container, following the `recipe.model.ts` file specifications
  recipes: Recipe[]; // initially, this is undefined


  // we now get the `recipes` thru the recipe.service.ts
  constructor(private recipesService: RecipesService) { }

  ngOnInit() { // this event fires up as soon as the app is loaded.
    this.recipes = this.recipesService.getAllRecipes(); // this.recipes refer to `recipes: Recipe[];`

    // now, to view a single recipe, we go to recipe-detail/recipe-detail.page.ts 
  }

}
