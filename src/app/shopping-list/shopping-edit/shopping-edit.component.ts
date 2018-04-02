import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../../service/shopping.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  constructor(private shoppingservice: ShoppingService) { }

  ngOnInit() {
  }
  addIngredient(ingredientDetail: Ingredient) {
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.shoppingservice.addToIngredient(newIngredient);
  }

}
