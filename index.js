//1.	Create an HTML page with two buttons that argue with each other. When one button is clicked, the text "I'm right" should be placed next to it. When the other button is clicked, the text is replaced with, "No, I'm right!"
let whoRight = document.querySelector(".right").addEventListener("click", function(){ 
    document.querySelector(".rightSay").innerHTML = "I'm Right"});
let whoRight2 = document.querySelector(".rightToo").addEventListener("click", function(){ 
    document.querySelector(".rightSay").innerHTML = "No, I'm Right!"});

//2.	Create an HTML page with a large element on the page that says "Don't hover over me" inside of it. When you hover over the element, send an alert to the user that says, "Hey, I told you not to hover over me!
let hover = document.querySelector(".hover");
hover.addEventListener('mouseover', function (){ 
    alert("Hey, I told you not to hover over me!")})

//4.	In a Javascript file, write a program which checks the following things:
// a.	checks that the password is 12345678
// b.	if the password is incorrect, send an alert message
// c.	Your page should also include an <h1> tag. If the information in the form is correct, have Javascript change the text in the <h1>.HTML page.

let click = document.querySelector("form").addEventListener("submit", function () {
        let currentVal = document.getElementById("exampleInputPassword1").value;
        let defaultVal = 12345678;
     
        if (defaultVal == currentVal) 
        {
          document.querySelector(".correct").innerHTML = "Success";
        } else 
        {
          alert("wrong");
        }

 });

//  6.	BONUS: Create an HTML page with a form that asks the user to input the value of a sphere's radius. Write Javascript that gives them back the volume of the sphere. (There are many different ways to execute this. You can give the user information back in another input box on the page, as an alert, or any other way you can think of. You can look up how to use the Javascript Math object to simplify your calculations.)
let sphere = document.getElementById("sphere").addEventListener("submit", function(){
    let radius = document.getElementById('radius').value;
    radius = Math.abs(radius);
    let power = Math.pow(radius,3);
    let volume = (4/3) * Math.PI * power;
    volume = volume.toFixed(4);
    document.getElementById("result").innerHTML = volume;
    return false;

})