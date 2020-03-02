import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // contains our paramMap.
                      // We also add a `Router` parameter aside from `ActivatedRoute` so we can navigate back with ease.

import { RecipesService } from '../recipes.service';

import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular'; // for alerts

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  // create an object that follows our model
  loadedRecipe: Recipe; // the model was imported above.


  constructor(
      private activatedRoute: ActivatedRoute,  // ActivatedRoute referenced above
      private recipesService: RecipesService, // lets us access methods to work with recipes
      private router: Router,  /// helps us navigate between pages.
      private alertCtrl: AlertController // for alerts
      ) { }

  ngOnInit() {

    this.activatedRoute.paramMap // a map of all parameters this route receives
    .subscribe(paramMap => { // .subscribe is a type of `observable` that are objects you can subscribe to to get data. (so the data gets refreshed dynamically, no more refresh shenanigans!)
      if (!paramMap.has('recipeId')) {
        // redirect, if the `recipeId` parameter isn't available in our app. Perhaps back to home.
        this.router.navigate(['/recipes']);
        return;
      }
      // create a variable to extract 'recipeId'
      const recipeId = paramMap.get('recipeId');

      // we can now use the `./recipes.service.ts`, injected on the `constructor` above as well as imported, to load the recipes!
      this.loadedRecipe = this.recipesService.getRecipe(recipeId); // returns a single, recipe and passes it to our current `loadedRecipe`

      // WE CAN NOW USE THIS ON OUR `recipe-detail.page.html`
    });
  }


  onDeleteRecipe() {
    // ask user first if he's sure he wants to delete the record.
    // *note, inside `create({})`, press ctrl + space 
    this.alertCtrl.create({
      header: 'Do we really delete ' + this.loadedRecipe.title + '?',
      message: 'This decision is final and will be deleted from database',
      buttons: [{ // this lets our user have decision to proceed or cancel this action
        text: 'Cancel',
        role: 'cancel', // `role` tells the alertcontrol what to do.
      }, {
        text: 'Delete',
        handler: () => {

          // we can now proceed with the rest of the progam

          this.recipesService.deleteRecipe(this.loadedRecipe.id);
          // `this.loadedRecipe.id` comes from the initialization `onInit()`,
          // which gives our `loadedRecipe` variable declared at top the contents.

          // AFTER DELETING, we want the page to disappear. So we navigate back to menu via below:
          this.router.navigate(['/recipes']); // goes back to root folder `recipes`,
          // which navigates you to it's base html file `recipes.page.html`
          // what if we reload all recipes??
          this.recipesService.getAllRecipes();


        }
        // if you don't declare a `role`, then the script will assume it's safe to proceed
      }]
    }).then(alertEl => {
      alertEl.present(); // we now present this to the user.
    });

  }
}
/*
  Summary: (after determining Route in recipes.service.ts)
  - import the `service` that holds our data (recipes.service.ts), the `model`
    that defines our data (`recipe.model.ts`), and the activatedRoute
  - add to contstructor the activatedRoute as well as the `service` which holds your data (in the case above )
  - script ngOnInit(), add the script to use the `paramMap`,
     - Create an object that follows our Recipe Model (loadedRecipe)
     - within paramMap
       - determine we have the parameter (in this case, `recipeId`)
       - create a variable to extract the parameter `recipeId`
       - pass the variable to our method that extracts an exact data
        THEN pass it to the object we created that holds resume
*/
