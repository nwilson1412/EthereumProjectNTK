import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'home-view',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    cryptoList: any;
    ethStats: any;

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
    }

}