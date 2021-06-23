import { Injectable } from '@angular/core';
import { Blockchain } from 'vcoin';
import { ec as EC } from 'elliptic';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  public blockchainInstance = new Blockchain();
  public walletKeys: Array<IWalletKey> = [];

  constructor() {
    this.blockchainInstance.difficulty = 4;
    this.blockchainInstance.minePendingTransaction('my-wallet-address');

    console.log(JSON.stringify(this.blockchainInstance,null,4));

    this.generateWalletKeys();
  }

  getBlocks(){
    return this.blockchainInstance.chain;
  }

  addTransaction(tx: any){
    this,this.blockchainInstance.addTransaction(tx);
  }

  getPendingTransactions(){
    return this.blockchainInstance.pendingTransactions;
  }

  minePendingTransaction(){
    this.blockchainInstance.minePendingTransaction(this.walletKeys[0].publicKey);
  }

  private generateWalletKeys(){
    const ec = new EC('secp256k1');
    const key = ec.genKeyPair();

    this.walletKeys.push({
      keyObj: key,
      publicKey: key.getPublic('hex'),
      privateKey: key.getPrivate('hex'),
    });

  }
}

export interface IWalletKey {
  keyObj: any;
  publicKey: string;
  privateKey: string;
}
