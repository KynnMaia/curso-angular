import {Component, Input} from '@angular/core';
import { StylesCompileResult } from '@angular/compiler/src/style_compiler';

@Component({
    moduleId : module.id,
    selector: 'foto',
    templateUrl: './foto.component.html',
    styleUrls: ['./foto.component.css']
})
export class FotoComponent {

    @Input() titulo: string;
    @Input() url: string;
    descricao: string;
    _id: string;        
}