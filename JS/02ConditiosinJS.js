console.log("Day2 js ")
//Variables:
a = 23;
// console.log(a)
/**
 * Strings 
 * Numbers
 * Boolean
 */

//Conditional Statements: 

// let rain = true;

// if(rain){
//     console.log("Dont go to School")
// }
// else{
//     console.log("Go to School")
// }


// let marks = 91

// //Else if in marks screnrio

// if(marks>90){
//     console.log("Student Passed A+")
// }
// else if(marks>35){
//     console.log("Student Passed")
// }
// else{
//     console.log("student fials")
// }


//Nested if else example

let barish = true;
let umbrella = 1;

if(barish){
    
    // console.log("Go to school")
    if(umbrella){
        console.log("go to school with umbrella")
    }
    else{
        console.log("go to school without umbrella")
    }
}


/**
 * Switch Case STatements
 */
let day = 5

switch (day) {
    case 1:
        console.log("Sun")
        console.log("hi i am on weeekend ")
        break;
         
    case 2:
        console.log("MON")
         break;
    case 3:
        console.log("TUES")
         break;
    case 4:
        console.log("WED")
         break;
    case 5:
        console.log("THUR")
         break;
    case 6:
        console.log("FRiday")
         break;
    case 7:
        console.log("Sat")
         break;

    default:
        console.log("No DAy")
        break;
}

