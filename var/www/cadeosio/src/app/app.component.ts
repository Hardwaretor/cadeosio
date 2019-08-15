import { Component } from '@angular/core';
import ScatterJS from '@scatterjs/core';
import ScatterEOS from '@scatterjs/eosjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cadeosio';
}

//Scatter Instalation

ScatterJS.plugins( new ScatterEOS() );

const network = ScatterJS.Network.fromJson({
  blockchain: 'eos',
  chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
  host: 'nodes.get-scatter.com',
  port: 443,
  protocol: 'https'
});

ScatterJS.connect('CADEOS.io', {network}).then(connected => {
  if (!connected) { return false; }
  // ScatterJS.someMethod();
});
