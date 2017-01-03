import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ConnectionService} from './../../providers/connection-service/connection-service'
/*
  Generated class for the MenuTestePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/menu-teste/menu-teste.html',
})
export class MenuTestePage {
  constructor(private nav: NavController, private connectionService: ConnectionService) {}

      buscarCEP() : void{
        this.connectionService.getCep('03810130').then((res)=> {
          console.log(res);
        }).catch((err)=>{
            console.log(err);
        })

      }

}
