import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from '../recipes/recipes.component';
import { RecipeListComponent } from '../recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from '../recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';
import { AuthGaurdService } from '../auth/auth-gaurd.service';


const recipesRoutes: Routes = [
    { path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent, canActivate: [AuthGaurdService] },
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGaurdService]}
    ] },
]

@NgModule({
    imports: [
        RouterModule.forChild(recipesRoutes)
    ],
    exports: [RouterModule]
})

export class RecipesRoutingModule {}