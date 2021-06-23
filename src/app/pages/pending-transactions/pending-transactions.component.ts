import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-pending-transactions',
  templateUrl: './pending-transactions.component.html',
  styleUrls: ['./pending-transactions.component.scss']
})
export class PendingTransactionsComponent implements OnInit {

  public pendingTransaction: any = [];

  constructor(private blockchainservice:BlockchainService) {
    this.pendingTransaction = blockchainservice.getPendingTransactions();
  }

  ngOnInit(): void {
  }

  minePendingTransaction(){
    this.blockchainservice.minePendingTransaction();
  }

}
