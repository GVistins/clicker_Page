console.log("Java script do be working");


document.getElementById("button").addEventListener("click", numberOfClicks);
var a = 0;
function numberOfClicks(){
    console.log("Button got clicked");
    a += 1;
    console.log(a);
}
