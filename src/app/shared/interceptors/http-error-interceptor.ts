import {Injectable} from '@angular/core';
import {  HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {Observable, catchError, throwError} from 'rxjs';

import { MessageService } from 'src/app/services/message.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private messageHolder: MessageService) {
  }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError((err) => {
      console.log(err);
      this.handleError(err);
      return throwError(err);
    }));
  }


  private handleError(error: HttpErrorResponse) {

    console.log(error);

      this.messageHolder.setError(true);
      this.messageHolder.title = 'Error inesperado';
      if (error.error['errorCode']) {
        if (error.error['errorCode'] === '94') {
          this.messageHolder.title = 'Error en Folios';
        }
      }
      this.messageHolder.message = '';
      this.messageHolder.imageName = 'alert.png';
  
      if (typeof error.error === 'string' && error.error.includes('<html')) {
        this.messageHolder.title = 'Error inesperado';
        this.messageHolder.message = 'Ha ocurrido un error en GEOPos. Por favor reinicie o contacte con mesa de ayuda.';
        this.messageHolder.escapable = false;
      }
  
      if (error.status === 408) {
        //this.logger.log('ERROR: Tiempo de espera expirado. Reinicie el equipo o llame a mesa de ayuda.');
        this.messageHolder.title = 'Tiempo de espera expirado';
        this.messageHolder.message = 'Reinicie el equipo o contacte con mesa de ayuda.';
      }
  
      const geopos = error.error;
  
      this.messageHolder.failedUrl = error.url;
  
      if (geopos['errorMessage'] != null) {
        this.messageHolder.message += geopos['errorMessage'];
        //this.logger.log('ERROR: ' + this.messageHolder.message);
      }
  
      if (error.status === 504) {
        this.messageHolder.title = 'Sin conexión con Backend';
        this.messageHolder.message = 'No se tiene conexión con el Backend. Verifique y vuelva a intentar.';
        this.messageHolder.escapable = true;
      }
  
      if (error.url != null && (error.url.endsWith('getGiftcardData')) ) {
        this.messageHolder.goesToNextPath = true;
        this.messageHolder.nextPath = '/paymentModes/paymentModeComponent';
      }

      if (error.url != null && error.url.endsWith('checkPrinter')){
        this.messageHolder.title = 'Error de Impresora';
        this.messageHolder.message = error.error['errorMessage'];
        this.messageHolder.goesToNextPath = false;
        this.messageHolder.escapable = false;
        //this.checkPrinterStatusService.poolPrinterStatus();
      }
  
      return throwError(error);

    
  }
}
