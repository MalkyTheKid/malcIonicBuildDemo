// we navigate thru the app using this!!

// has all of the lazy loading for the angular pages
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' }, // this is the root path. 
                                                          // `redirectTo` will dictate which `path` the script will go to.
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  /*{
    path: 'recipes',
    loadChildren: () => import('./recipes/recipes.module').then( m => m.RecipesPageModule)
  }, */
  { // when recipes is loaded, we can route it to a particular recipe
    path: 'recipes',
    children: [{
        path: '', // the default path. We just want it to route directly to the app
        loadChildren: () => import('./recipes/recipes.module').then( m => m.RecipesPageModule),
      },
      {
        path: ':recipeId', // when we add a first parameter in the url (for example, by typing in /porkchop, etc.)
        loadChildren: () => import('./recipes/recipe-detail/recipe-detail.module').then( m => m.RecipeDetailPageModule)

      }
    ]
  },

  /*{
    path: 'recipe-detail',
    loadChildren: () => import('./recipes/recipe-detail/recipe-detail.module').then( m => m.RecipeDetailPageModule)
  }, */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
