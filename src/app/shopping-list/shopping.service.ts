import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  ingredientsChanged = new EventEmitter <Ingredient[]>();

constructor() { }



private ingredients: Ingredient[] = [
  new Ingredient('Apples', 5),
  new Ingredient('Tomatoes', 10),
];

getIng() {
  return this.ingredients.slice();

}

addIngredient(ingredient: Ingredient){
  this.ingredients.push(ingredient);
  this.ingredientsChanged.emit(this.ingredients.slice());
}

addIngredients(ingredients: Ingredient[]){
  // for(let ingredient of ingredients){
    // this.addIngredient(ingredient);
  // }
 this.ingredients.push(...ingredients);
 this.ingredientsChanged.emit(this.ingredients.slice());

}
}
