import { Component } from '@angular/core';


import ScatterJS from '@scatterjs/core';
import ScatterEOS from '@scatterjs/eosjs'

ScatterJS.plugins( new ScatterEOS() );

const network = ScatterJS.Network.fromJson({
  blockchain:'eos',
  chainId:'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
  host:'nodes.get-scatter.com',
  port:443,
  protocol:'https'
});

ScatterJS.connect('cadeosiocode', {network}).then(connected => {
  if(!connected) return false;
  // ScatterJS.someMethod();
});

const host = '127.0.0.1:50005';
const socket = new WebSocket(`ws://${host}/socket.io/?EIO=3&transport=websocket`);

socket.onopen = () => {
  socket.send('40/scatter');
}

function pair(passthrough = false){
  return new Promise((resolve, reject) => {
     
      const json = {
        plugin:'cadeosio',
        data:{
            appkey:'appkey:bt2gbcerb24quj56mp5jsrqr',
            origin:'CADEOS.io',
            passthrough:true,
      }
    }

      socket.send('42/scatter,' + JSON.stringify(['pair', json]))
  })
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/