import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { UsersComponent } from "../users/users.component";

export class Deactivate implements CanDeactivate<UsersComponent>{

canDeactivate(component : UsersComponent,route : ActivatedRouteSnapshot,state : RouterStateSnapshot){
console.log('All parameters ',route.params);
console.log("The url ",state.url);
return false;
}

}