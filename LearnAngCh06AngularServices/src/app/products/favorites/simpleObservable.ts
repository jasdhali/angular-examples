import { Observable,Promise } from "rxjs";
import {  } from 

var observable = new Observable(res => {
    res.next("Hello Piyush");
    res.next("Hello Vivek");
    res.next("Hello Rajesh");
});
observable.subscribe(console.log)
//Output --> Observable can emmit multiple values
//Hello Piyush
//Hello Vivek
//Hello Rajesh
var promise = new Promise(res => {
    res("Hello Piyush");
    res("Hello Vivek");
    res("Hello Rajesh");
});
promise.then(console.log)