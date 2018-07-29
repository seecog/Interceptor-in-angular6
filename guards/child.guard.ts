import { CanActivateChild } from "@angular/router";

export class ChildGuard implements CanActivateChild{

canActivateChild(){
    return false;
}

}