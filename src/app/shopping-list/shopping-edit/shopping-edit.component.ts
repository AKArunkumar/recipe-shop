import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../../service/shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') slform: NgForm;
  subscription = new Subscription();
  editIndex: number;
  editClicked = false;
  constructor(private shoppingservice: ShoppingService) { }

  ngOnInit() {
    this.subscription = this.shoppingservice.editIngredientEvent.subscribe(
      (index) => {
        this.editIndex = index;
        this.editClicked = true;
        const ingredient = this.shoppingservice.getIngredient(index);
        this.slform.setValue({
          name: ingredient.name,
          amount: ingredient.amount
        });
      }
    );
  }
  onSubmit(f: NgForm) {
    const values = f.value;
    const newIngredient = new Ingredient(values.name, values.amount);
    if (this.editClicked) {
      this.shoppingservice.upadateIngredient(this.editIndex, newIngredient);
    } else {
        this.shoppingservice.addToIngredient(newIngredient);
    }
    this.editClicked = false;
    f.reset();
  }
  onDelete() {
    console.log('hi');
    this.shoppingservice.deleteIngredient(this.editIndex);
    this.slform.reset();
    this.editClicked = false;
  }
  onClear() {
    this.editClicked = false;
    this.slform.reset();
  }
}
