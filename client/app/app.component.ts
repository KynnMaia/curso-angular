import { Component, Inject } from '@angular/core';
import { Http } from "@angular/http";

@Component({
    moduleId : module.id,
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent{

    fotos: Object[] = [];

    //esse parametro faz um inject automatica;
    constructor(http: Http){
        
        http
        .get('v1/fotos')
        .map( res => res.json())
        //res => == function(res)
        .subscribe(fotos => {
            this.fotos = fotos;
            console.log(this.fotos);
        }, erro => console.log(erro));
    }    
}