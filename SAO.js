/*document.getElementById("Heading").addEventListener("click",function SAO1(){
    document.getElementById("Rock").innerHTML = "This is SAO"
})
*/
/*
* document.getElementById("Heading").innerHTML -> Can you access the data in this variable?
* Ans: Yes
* if (<condition>) { }
*
* 
*/
//Function Modifies the Heading.
function SAO1() {
    
    if(document.getElementById("Heading").innerHTML=="Boku no Namaiva SAO des!") {
        document.getElementById("Heading").innerHTML = "Welcome to SAO!";
    } else {
        document.getElementById("Heading").innerHTML = "Boku no Namaiva SAO des!";
    }

}

function textChanged() {
    //document.getElementById("something").value
    //document.getElementById("something").innerHTML

    document.getElementById("Heading").innerHTML = "Welcome to SAO!" + document.getElementById("times").value;
    document.body.style.color = 'red';
    document.getElementById("times").value=null;
}
function sum() {
    // parseInt("1"); => 1
    // valie = "1"
    // parseInt(value) => 1
    document.getElementById("sum").value = parseInt(document.getElementById("number-one").value) + parseInt(document.getElementById("number-two").value) ;
}

/*
Write a Field where I take in the operator and do the operation based on the operator
number-one: 1
number-two: 2
operator: +
sum: 3
*/


// window.addEventListener('onchange', (event) => {
//     document.getElementById("Heading").innerHTML = "Welcome to SAO!" + document.getElementById("times").innerHTML;
//     //Entered Data should be concatinated with the Heading
//     //WElcome to SAO, Sumanth!
//     // "Sumanth" + " Balusu" = "Sumanth Balusu"
// });