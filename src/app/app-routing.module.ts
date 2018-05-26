import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropmenuDirective } from './dropmenu/dropmenu.directive';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { RecipesModule } from './recipes/recipes.module';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [   
    { path: '', component: HomeComponent , pathMatch: 'full' }, 
    { path: 'recipes', loadChildren: './recipes/recipes-routing.module#RecipesModule'},   
    { path: 'shoping-list', component: ShoppingListComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'not-found', component: NotFoundComponent }
];

@NgModule( {
    imports: [
        RecipesModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
} )
export class AppRoutingModule {

}
