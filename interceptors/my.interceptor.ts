
import {HttpInterceptor, HttpHandler,HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';

export class MyInterceptor implements HttpInterceptor{

intercept(req : HttpRequest<any>,next : HttpHandler) : Observable<HttpEvent<any>>{
console.log("Intercepted ")
console.log('ntercepted again')
//  var cloneReq = req.clone({headers : req.headers.append('Authorization','263126621')})
var cloneReq = req.clone({params : req.params.set('age','21')})
return next.handle(cloneReq)

}

}