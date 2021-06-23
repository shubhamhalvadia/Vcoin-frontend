import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { Transaction } from 'vcoin';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {

  public newTx: any;
  public walletKey: any;

  constructor(private blockchaiService: BlockchainService) {
    this.walletKey = blockchaiService.walletKeys[0];
  }

  ngOnInit(): void {
    this.newTx = new Transaction();
  }

  createTransaction(){
    this.newTx.senderAddress = this.walletKey.publicKey;
    this.newTx.signTransaction(this.walletKey.keyObj);

    this.blockchaiService.addTransaction(this.newTx);

    this.newTx = new Transaction();
  }

}
