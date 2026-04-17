import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router"; 
import { Home } from "./pages/home/home";

export const routes: Routes = [
    {path:'', component : Home},
    {path:'**', redirectTo:''}
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes,{
            scrollPositionRestoration:'enabled',
            anchorScrolling:'enabled'
        })
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{}
//export class AppRoutesModule{}
