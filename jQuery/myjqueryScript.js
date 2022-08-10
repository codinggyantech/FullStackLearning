console.log("Jquery")
console.log($)
console.log(jQuery)

/**
 * Selectors:
 * 1. Tag selector
 * 2. Id selector
 * 3 class seletor
 */

let heading = document.getElementsByTagName("h1")
heading[0].innerHTML = "new"
console.log(heading)

console.log($('h1').text("updated by jquery"))
$('h1').text("updated by jquery")

let d = $("#id").text("i am heading 3")
 d = $(".cls").text("update para")

// let body = $('body').html("hi")

console.log(d)

// Events in Jquery 

$('h1').click()

function clickedfun(){
    console.log("clicked movue",this)
}
function dblclickedfun(){
    console.log("double click workd",this)
}
function mousefun(){
    console.log("mouse entered")
}
$('h1').click(clickedfun)
$('h1').dblclick(dblclickedfun)

// $('h1').click()
// $('h1').click()
// $('h1').click()
// $('h1').click()
$('h1').mouseenter(mousefun)


$('h1').mouseenter( ()=>{
    console.log("mouse entered diff")
})


//Other funcs in jquery 
// $("#p").hide()
// $("#p").show()

$("#btn").click(()=>{

    $("#p").toggle()
})
/**
 * $('#p').addClass("mycls")
S.fn.init [p#p.mycls]
$('#p').removeClass("mycls")
S.fn.init [p#p]
$('#p').addClass("mycls")
S.fn.init [p#p.mycls]
$('#p').removeClass("mycls")
S.fn.init [p#p]
$('#p').toggleClass("mycls")
S.fn.init [p#p.mycls]
$('#p').toggleClass("mycls")
S.fn.init [p#p]
$('#p').toggleClass("mycls")
S.fn.init [p#p.mycls]
$('#p').toggleClass("mycls")
 */



$('h3').click(this).slideUp()


$("#img")