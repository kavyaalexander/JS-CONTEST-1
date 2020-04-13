// You can add your codes here 

function percentage() {
    var a = Number(document.getElementById("mark1").value);
    var b = Number(document.getElementById("mark2").value);
    var c = Number(document.getElementById("mark3").value);
    var name = document.getElementById("name").value;
    var sum = a + b + c;
    var perc = (sum / 300) * 100;
    alert("Percentage obtained:" + perc);


}