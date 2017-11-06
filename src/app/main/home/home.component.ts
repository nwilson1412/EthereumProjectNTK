import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import getweb3 from '../../components/web3';

@Component({
    selector: 'home-view',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    web3: any;
    cryptoList: any;
    ethStats: any;
    //gethBlock: any;
    successData: any;
    gethBlock = {
        difficulty: '',
        gasLimit: '', 
        };
    

    successData2: number;
    currentBlock: number;

    constructor(private http: HttpClient){

    }

    ngOnInit():void {
        // this.http.get('https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=AUD').subscribe(data => {
        //     this.ethStats = data;
        //     console.log(this.ethStats);
        // });

        
        this.http.get('https://api.coinmarketcap.com/v1/ticker/?convert=AUD').subscribe(data => {
        this.cryptoList = data;
         });
        
        this.web3 = getweb3();

        this.web3.eth.getBlockNumber().then((successData2) => {
            this.currentBlock = successData2
           // this.currentBlock = this.currentBlock.toNumber;
            console.log(this.currentBlock);
            //console.log("awfargag")
        })
//this is broke.. this.currentBlock isnt being ran in the "getBlock" method
        //number x = this.currentBlock;
        this.web3.eth.getBlock(this.currentBlock).then((successData) => {
              this.gethBlock = successData;
              console.log(this.gethBlock);
        })

        // /return this.gethBlock;


        
        
       // var bknum = this.web3.eth.getBlockNumber;
        //console.log(bknum) //this shows a function, not the number(?)
        
        
        
    }

}