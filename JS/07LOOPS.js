console.log("LOOPS in JS")

// type of looops 
/**
 * For 
 * While 
 * Do- While
 * 
 */

/** Print 3 number */
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)


/** Print 1- 10 */

for(let i =1; i<=10;i++){
    // console.log(i)
}



for(let demo = 0; demo<=4;demo ++){


    // console.log("printing ",demo)
}

// Printing reverse NUMVBers
// console.log("Revser nUmber print start")
let myd = []
for(let i =10;i>=0;i =i-3){
    // console.log(i)
    myd.push(i)
}
console.log(myd)
c = myd.join(' ')
console.log(c)
// console.log("Revser nUmber print ends")


//print 2 table
// table = Number(prompt("Enter the number"))
// for(let i=1;i<=10;i++){
//     console.log(table," * ",i," = ",table*i)
// }
 
let dat = [1,"data",3,"hi",true,"new added",3452345,"updating again"]

// console.log(data[0])
// console.log(data[2])
//tradiitonal way:
// console.log("the lenght of data",data.length)
// for(let i = 0; i<data.length;i++){
//     console.log(data[i])
// }


///2nd way to for loop

for(let d in dat){
    // console.log(dat[d])
}

//3rd approact or modern approch
dat.forEach(ele=>{
    // console.log(ele)
})

//Login to an account

//While lloop: dangerours loop with proper using...

let  i =10
//While starts 
console.log("while lloop starts ")
while (i<=5) {
    //code u want execute
    console.log(i)
    i++  //infinite loop
    // break;
    // continue;
    
}
console.log("while lloop ends ")

// do while starts
console.log("do while starts")
let j = 10
do{
    console.log(j)
    j++
}while(j<=5);
console.log("do while ends")
 



