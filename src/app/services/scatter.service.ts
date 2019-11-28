import {Injectable} from '@angular/core';
import * as Eos from 'eosjs';
import { Api, JsonRpc, RpcError } from 'eosjs';
import { JsSignatureProvider } from 'eosjs/dist/eosjs-jssig';
import {LocalStorage} from 'ngx-webstorage';
import {environment} from '../../environments/environment';
import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs';
import ScatterLynx from '@scatterjs/lynx';

const defaultPrivateKey = '5JtUScZK2XEp3g9gh7F8bwtPTRAkASmNrrftmx4AxDKD5K4zDnr'; // bob
const signatureProvider = new JsSignatureProvider([defaultPrivateKey]);
const rpc = new JsonRpc('http://127.0.0.1:8888', { fetch });
const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });



const result = api.transact({});



// Don't forget to tell ScatterJS which plugins you are using.

ScatterJS.plugins( new ScatterEOS(), new ScatterLynx(Eos || {Api, JsonRpc}) );


// Networks are used to reference certain blockchains.
// They let you get accounts and help you build signature providers.
const network = ScatterJS.Network.fromJson({
  blockchain: 'eos',
  chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
  host: 'nodes.get-scatter.com',
  port: 443,
  protocol: 'https'
});

// First we need to connect to the user's Scatter.
ScatterJS.scatter.connect('cadeosiocode').then(connected => {

    // If the user does not have Scatter or it is Locked or Closed this will return false;
    if (!connected) { return false; }

    const scatter = ScatterJS.scatter;

    // Now we need to get an identity from the user.
    // We're also going to require an account that is connected to the network we're using.
    const requiredFields = { accounts: [network] };
    scatter.getIdentity(requiredFields).then(() => {

        // Always use the accounts you got back from Scatter. Never hardcode them even if you are prompting
        // the user for their account name beforehand. They could still give you a different account.
        const account = scatter.identity.accounts.find(x => x.blockchain === 'eos');

        // You can pass in any additional options you want into the eosjs reference.
        const eosOptions = { expireInSeconds: 60 };

        // Get a proxy reference to eosjs which you can use to sign transactions with a user's Scatter.
        const eos = scatter.eos(network, Eos, eosOptions);

        // ----------------------------
        // Now that we have an identity,
        // an EOSIO account, and a reference
        // to an eosjs object we can send a transaction.
        // ----------------------------


        // Never assume the account's permission/authority. Always take it from the returned account.
        const transactionOptions = { authorization: [`${account.name}@${account.authority}`] };

        eos.transfer(account.name, 'cadeosiocode', '1.0000 EOS', 'memo', transactionOptions).then(trx => {
            // That's it!
            console.log(`Transaction ID: ${trx.transaction_id}`);
        }).catch(error => {
            console.error(error);
        });

    }).catch(error => {
        // The user rejected this request, or doesn't have the appropriate requirements.
        console.error(error);
    });
});

const Blockchains = {
  EOSIO: 'eos',
};

const blockchain = Blockchains.EOSIO;


ScatterJS.plugins( new ScatterEOS() );

ScatterJS.scatter.connect('CADEOS.io').then(connected => {
  // User does not have Scatter Desktop, Mobile or Classic installed.
  if (!connected) { return false; }

  const scatter = ScatterJS.scatter;

});



@Injectable()
export class ScatterService {
  @LocalStorage()
  identity: any;
  eos: any;
  scatter: any;
  network: any;

  load() {
    console.log(this.identity);
    this.scatter = (<any>window).scatter;
    if (this.identity) {
      this.scatter.useIdentity(this.identity.hash);
    }

  const host = '127.0.0.1:50005';
  const socket = new WebSocket(`ws://${host}/socket.io/?EIO=3&transport=websocket`);

    socket.onopen = () => {
    socket.send('40/scatter');

};

const account = ScatterJS.identity.accounts.find(x => {
  return x.blockchain === 'eos';

});


ScatterJS.login().then();

    this.network = {
      blockchain: 'eos',
      host: 'nodes.get-scatter.com',
      port: 443,
      chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
      protocol: 'https'
    };
    this.eos = this.scatter.eos(this.network, Eos, {}, environment.eosProtocol);
  }

  login(successCallback, errorCallbak) {
    const requirements = {accounts: [this.network]};

    const that = this;
    this.scatter.getIdentity(requirements).then(
      function (identity) {
        if (!identity) {
          return errorCallbak(null);
        }
        that.identity = identity;
        that.scatter.useIdentity(identity.hash);
        successCallback();
      }
    ).catch(error => {
      errorCallbak(error);
    });
  }

  logout() {

  }

  transfer(to: string, amount: number, memo: string = '', successCallback, errorCallback) {
    const that = this;
    this.login(function () {
        that.eos.transfer(that.identity.accounts[0].name, to, (amount).toString() + ' EOS', memo, []).then(transaction => {
          successCallback(transaction);
        }).catch(error => {
          errorCallback(error);
        });
      }, function (error) {
        errorCallback(error);
      }
    );
  }
}
