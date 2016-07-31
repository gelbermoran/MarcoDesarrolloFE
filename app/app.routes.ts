import {provideRouter, RouterConfig} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {NotFoundComponent} from "./notfound/notfound.component";

// import {routerDashboard} from "./dashboard/dashboard.routes";

const routes:RouterConfig = [
    {path:"", redirectTo:"login", pathMatch:"full"},
    {path:"login", component:LoginComponent},
    // ...routerDashboard,
    {path:"**", component:NotFoundComponent}

];

export const appRouterProviders = [provideRouter(routes)];