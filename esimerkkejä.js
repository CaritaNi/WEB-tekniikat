
//let numerot = [1,2,3,4,5];
//let muokattu = numerot.map(x=> x === 3);

//console.log(muokattu);


//numerot.map(edit)

//function edit(x){
//    return x*2;
//}(

/*let numerot = ["jotain", "jamitä", "kuinka"];

let muokattu= numerot.map(x =>{
    if(x.includes("ja")){
        return "uusiteksti";
    }
    return x;
});*/
 /*
//filtteroidaan ikiä pois taulukosta, jotka on alle (tai tasan) 18v
let ages = [17, 22, 50, 4];

let adults = ages.filter( age => 18);
console.log(adults);


//Jos halutaan katsoa vanhempia ihmisiä
let ages = [17, 22, 50, 4];

let adults = ages.filter( age => 18);

console.log(adults);

let oldFound = ages.some( age => age>60);*/

//TEHTÄVIÄ

//t1
//Tämä on lambda
let taulu = ["one", "two", "three", "four", "five"];

taulu.forEach(sana => console.log(sana));


//t2
let prices = [10,20,61,20,89];

let discount = prices.map(price => 0.2*price);
console.log(discount);

//t3
let names = ["John", "Jack", "Lisa", "John", "Sarah"];
names = names.map( name => {
    if(name === "John"){
        return "Matt";
    }
    return name;
} );
console.log(names);

//Siistimmällä koodityylillä voi tehdä saman yhdelle riville!
names = names.map( name => name==="John" ? "Matt" : name);

//t4
let numbers = [1,4,-3,-5,4,23];

let positives = numbers.filter( number => number >= 0);
console.log(positives);

//t5
names = ["Tomi", "Lasse", "Taavi", "Talitintti", "Simo"];
let modNames = names.filter(name => name.length>8 && name[0]==='T');

console.log(modNames);
// Tää tulosti vain ekan ehdon, mutta ei T-alkuisia

//t6
if(names.every( sana => sana.length>0) ){
    let pituudet = names.map( sana => sana.length);

    let summa = pituudet.reduce( (previous,current) => previous+current );
    console.log(summa);
}