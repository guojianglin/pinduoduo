import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class ParamInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const onlyModifyByCloneReq = req.clone({
            setParams: {iCode: environment.iCode}
        });
        return next.handle(onlyModifyByCloneReq);
    }
}