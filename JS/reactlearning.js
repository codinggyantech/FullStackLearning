console.log("Learning React");

/**
 * Able to create function :
 * 
 */

// function demo (){
//     console.log("Creating the demo function");
// }
const demo = ()=>{
    console.log("Creating the demo function");

}
demo()

// Anonymous function
/**
 * A function which don't have its name is called anonymous
 */

// (function (){
//     console.log("Anonymous function");

// })()

// Callback functions: 


// app.listen(3000,()=>{
//     console.log("Running successfully");
// })



// app.listen(3000, ()=> console.log("Running successfully"))

/**
 * 1. create a account;
 * 2. verify that the account
 * 3. login to the account
 * 4. show the dashboard Page
 * 
 */
function createAccount(uname,pwd,callback){
    if(uname=="admin"){
        console.log("Creating the account");
    callback()

    }
   else{
    console.log("failde")
   }
    
}

function verifyAccount(callback){
    console.log("Verifying the account");
    callback()

}

function loginAccount(callback){
    console.log("Logging in to the account");
    callback()

}
function showDashboard(callback){
    console.log("Showing the dashboard");
    callback


}

createAccount("admin","pwd", (loginAccount)=> console.log("Verifying the account"))

loginAccount(showDashboard)
showDashboard(()=>{
    console.log("Showing the dashboard with ram function");
})
// showDashboard()

// fucntion (a,b, ()={

// })


// map filter and reduce

a = [1,2,3, 4, 5, 6,7,8,9,10]
// console.log(a)

function mycallbackfun(ele){
    console.log(ele)
}

// a.map(mycallbackfun)


a.map( (ele)=>console.log(ele))

// filter function 

// a =a.filter((ele)=>  ele%2 ==0 )
// console.log(a)

//reduce function

// a =a.reduce((a,b)=> a*b,0)
// console.log(a)

// reduce function

