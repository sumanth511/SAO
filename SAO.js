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
/*function sum() {
    // parseInt("1"); => 1
    // valie = "1"
    // parseInt(value) => 1
    document.getElementById("sum").value = parseInt(document.getElementById("number-one").value) + parseInt(document.getElementById("number-two").value) ;
}*/
function operation() {
    if (document.getElementById("EnterTheOperator").value == "+" ){
        document.getElementById("operator").value = parseInt(document.getElementById("number-one").value) + parseInt(document.getElementById("number-two").value);
    } else if (document.getElementById("EnterTheOperator").value == "-") {
            document.getElementById("operator").value = parseInt(document.getElementById("number-one").value) - parseInt(document.getElementById("number-two").value);
        } else if (document.getElementById("EnterTheOperator").value == "/"){
                document.getElementById("operator").value = parseInt(document.getElementById("number-one").value) / parseInt(document.getElementById("number-two").value);
            } else if (document.getElementById("EnterTheOperator").value == "*"){
                    document.getElementById("operator").value = parseInt(document.getElementById("number-one").value) * parseInt(document.getElementById("number-two").value);
                }else {
                        alert("Give correct operator");
                    }
    
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


//DOM manupulation.
async function callAPI1() {
    // Have to make an API call.
    var data = null;
    var response = await fetch("https://api.covid19india.org/raw_data1.json", {mode: 'cors'});
    if(response.ok) {
        data = await response.text();
    }
    document.getElementById("ip-infoLink1").innerHTML = data;
}
async function callAPI2() {
    // Have to make an API call.
    var data1 = null;
    var response1 = await fetch("https://api.covid19india.org/v4/timeseries.json", {mode: 'cors'});
    if (response1.ok) {
        data1 = await response1.text();
    }
    document.getElementById("ip-infoLink2").innerHTML = data1;
}
async function callAPI3(){
    var data2 = null;
    var responce2 = await fetch("https://jsonplaceholder.typicode.com/posts", {mode: 'cors'} );
    if (responce2.ok){
        data2 = await responce2.json();
    }
    var x = data2.length
    for(i=0; i < x; i++) {
        document.getElementById("ip-infoLink3").innerHTML += "<br>" +data2[i].title;
    }    
}

async function exercise1() {
    var bla = null;
    var blu = await fetch("https://jsonplaceholder.typicode.com/posts", {mode:"cors"});
    if(blu.ok){
        bla = await blu.json();
    }
    var y = bla.length;
    for (i = 0; i < y; i++) {
        document.getElementById("exer1").innerHTML += "<br>" + bla[i].userId + "<br>" + bla[i].id + "<br>" + bla[i].title + "<br>" + bla[i].body + "<br>" + Array(150).join("-");
    }

}

async function exercise2() {
    var bla1 = null;
    var blu1 = await fetch("https://jsonplaceholder.typicode.com/posts", {mode: "cors"});
    if (blu1.ok) {
        bla1 = await blu1.json();
    }
    var n = bla1.length;
    for (i = 0; i < n; i++) {
        document.getElementById("exer2").innerHTML += Array(150).join("-") + "<br>" + bla1[i].userId + "<br>" + bla1[i].id + "<br>" + bla1[i].title + "<br>" + bla1[i].body + "<br>";
    }
    document.getElementById("exer2").innerHTML += Array(150).join("-");
}

async function random1() {
    let num = null; 
    num = document.getElementById("exer3").value;
    if(!isNaN(num) && num <= 100 && num >= 0){
        document.getElementById("exer5").innerHTML="VALID";
        var point = document.getElementById("exer3").value;
        var bla2 = null;
        var blu2 = await fetch("https://jsonplaceholder.typicode.com/posts", { mode: "cors" });
        if (blu2.ok) {
            bla2 = await blu2.json();
        }
        document.getElementById("exer").innerHTML += '<br>' + bla2[point - 1].id + "<br>" + bla2[point - 1].userId + '<br>' + bla2[point - 1].title + '<br>' + bla2[point - 1].body;
    }else{
        document.getElementById("exer").innerHTML="NOT VALID";
        document.body.style.color = 'red';
    }
}



/*
Primary Task

user-id = 1
id = 1
title = sunt aut facere repellat provident occaecati excepturi optio reprehenderit
body = quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto

----------------------------------------------------------------------------------------------------------------------------

user-id = 1
id = 2
title = qui est esse
body =  est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

/*
Secondary Task
------------------------------------------------------------------------------------------------------------------------------------------------------
user-id = 1
id = 1
title = sunt aut facere repellat provident occaecati excepturi optio reprehenderit
body = quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto
--------------------------------------------------------------------------------------------------------------------------------------------
user-id = 1
id = 1
title = sunt aut facere repellat provident occaecati excepturi optio reprehenderit
body = quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto
----------------------------------------------------------------------------------------------------------------------------------------------------------------
************************************* END **********************************************************
*/

/*
Third Task
Input Would be a number b/w -99999999999999-100, a-z, A-Z, !@#$%%
Valid: 0-100 
Not Valid (Red Color)
In case of valid Number Data should filtered based on ID.
*/

/*
https://api.covid19india.org/raw_data1.json
https://api.covid19india.org/v4/timeseries.json

Call the link If I click on Link 1 Call the first link
if I click on second link call the second link.
*/
