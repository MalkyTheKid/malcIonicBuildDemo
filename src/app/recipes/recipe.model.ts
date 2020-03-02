/* Defines how the Recipe object would look like */

export interface Recipe {
    id: string;
    title: string;
    imageUrl: string;
    ingredients: string[];
} // we will then refer to this in the `recipes.page.ts` file

