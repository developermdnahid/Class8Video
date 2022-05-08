/**
 * 
for( data of studentsData ){
    console.log(data);
}
 */



//                  Date Object


// let date = new Date();
// const days = ['Sunday','Monday','Tuesday','Wednesday','Thusday','Friday','Saturday'];


// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(data.getUTCDate());
// console.log(days[date.getUTCDay()]);




/**
 * 
let hour = 0 ;
ampm = 0 ;
let date = new Date();
const month = ['January','February', 'March', 'April','May', 'June', 'July' , 'August', 'September', 'October', 'November', 'December'];
const days = ['Sunday','Monday','Tuesday','Wednesday','Thusday','Friday','Saturday'];

if( date.getHours() > 12 ){
    hour = date.getHours() - 12;
    ampm = 'PM';
}else{
    hour = date.getHours();
    ampm = 'AM';
}

console.log(`
    ${ hour } : ${ date.getMinutes() } : ${ date.getSeconds() } : ${ date.getMilliseconds() } : ${ date.getTime() } ${ ampm }
    ${ month[date.getMonth()] } : ${ date.getDate() } : ${ date.getFullYear() } : ${ days[date.getDay()] }
`);

 */





//                  Math Object



// let age = -30 ;
// console.log( Math.abs(age) );


// let amount1 = 20.49 ;
// let amount2 = 20.59 ;
// console.log(`
//     ${ Math.round(amount1) }
//     ${ Math.round(amount2) }
//     ${ Math.floor(amount2) }
//     ${ Math.ceil(amount1) }
// `);


// console.log(Math.min(12,10,7,54,85,63,74,89,100,54,62));
// console.log(Math.max(12,10,7,54,85,63,74,89,100,54,62));


// console.log(Math.sqrt(25));
// console.log(Math.pow(9,2));


// console.log(Math.ceil(Math.random() * 1000));
// console.log(Date.now());



//               String Object


let txt1 = new String("My name is Nahid");
let txt2 = 'My name is Nahid';

console.log(txt1);
