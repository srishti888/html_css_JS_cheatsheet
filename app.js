// JavaScript code
function hello() {
    document.getElementById("intro").innerHTML = "namastey";
}
function undo(){
    document.getElementById("intro").innerHTML = "simple paragraph"; 
}
const myObject = {
    name: 'srushti',
    midname: 'padurang',
    surname: 'chewale'
};
console.log(myObject.name, myObject.midname, myObject.surname);
//light dark mode below
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  } 

// $(document).ready(function (){
//     $("form").submit(function(event){
//         event.preventDefault() 

//         var firstname = document.getElementById( "firstname").value
//         var lastname = document.getElementById( "lastname").value
//         var result = document.getElementById( "result");

//         $.post("process.php", { firstname: firstname, lastname: lastname }, function(data) {
//             console.log(data);
//             result.innerHTML = data;
//         });
        
//     })
// })