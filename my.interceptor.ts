import {HttpInterceptor,HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
export class MyIntercptor implements HttpInterceptor{

    

intercept(request : HttpRequest<any>,next : HttpHandler):Observable<HttpEvent<any>>{
  console.log('ntercepted again')
 var cloneReq = request.clone({headers : request.headers.append('Authorization','263126621')})

    return next.handle(cloneReq)
}


}