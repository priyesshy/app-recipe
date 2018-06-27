import {  EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';


@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe [] = [
    new Recipe('Burger',
    'This is simply a test',
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[
      new Ingredient('tomato', 10),
      new Ingredient('mango',10)
    ]),

    new Recipe
    ('Pizza',
    'Yummy',
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[
      new Ingredient('tomato', 10),
      new Ingredient('mango',10)
    ])
]


    getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

constructor(private shoppingService: ShoppingService) { }


 addIngToShopping(ingredients: Ingredient[]){
   this.shoppingService.addIngredients(ingredients);
 }

}
