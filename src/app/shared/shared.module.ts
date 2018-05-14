import { NgModule } from "@angular/core";
import { DropmenuDirective } from "../dropmenu/dropmenu.directive";

@NgModule({
    declarations: [
        DropmenuDirective
    ],
    exports: [
        DropmenuDirective
    ]
})
export class SharedModule {} 