/// Write a JavaScript program to get the length of a JavaScript object.
//  let person = {
//     fname:"tut",
//     lname:"Naywera",
//     height:"5 feet",
//     food:"mrenda",
//     color:"red",
//     school: "AkiraChix",

// }
// var c = Object.keys(person).length;
// console.log(c);

// let staff = [
// {fname:"tut",
//     lname:"Naywera",
//     fname:"feet",
//     food:"mrenda",
//     color:"red",
//     school: "AkiraChix"},
// ];
//  staff.sort((a,b,c) =>{

//  let x =a. lname;
//  let y = a.fname;
//  let z = c.food;
//  if (a === b || b === c || a ===c){


//  }
// }
//  const studnt = {fname:"tut", lname:"Naywera",fname:"feet",food:"mrenda"}
// let a = [];
// for(let key in studnt){
//     a.push(key.studnt[key]);

// }
// console.log(a);

 










// Write a JavaScript program to sort an array of JavaScript objects.
// Write a JavaScript function to convert an object into a list of '[key, value]' pairs.
// Write a JavaScript program to sort an array of JavaScript objects.


// var library = [
//     {
//         title: 'The Road Ahead',
//         author: 'Bill Gates',
//         libraryID: 1254
//     },
//     {
//         title: 'Walter Isaacson',
//         author: 'Steve Jobs',
//         libraryID: 4264
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         libraryID: 3245
//     }
// ];

// let res = library.sort((a, b) => {
//     if (a.libraryID > b.libraryID) return -1;
//     if (a.libraryID < b.libraryID) return 1;
//     return 0;
// });

// console.log(res);




var man = [
        {
            title: 'The Road Ahead',
            author: 'Bill Gates',
            manID: 1254
        },
        {
            title: 'Walter Isaacson',
            author: 'Steve Jobs',
            manID: 4264
        },
        {
            title: 'Mockingjay: The Final Book of The Hunger Games',
            author: 'Suzanne Collins',
            manID: 3245
        }
    ];
    
    let res = man.sort((a, b) => {
        if (a.manID > b.manID) return -1;
        if (a.manID < b.manID) return 1;
        return 0;
    });
    
    console.log(res);
    