function showCases()
{
event.preventDefault();
var country=document.getElementById("country").value;
var starts=document.getElementById("start").value;
var end=document.getElementById("end").value;

var confirmed=document.getElementById("confirmed");
var active=document.getElementById("active");
var deaths=document.getElementById("deaths");

console.log(starts);

if(country=='' || starts=='' || end==''){
alert("enter the required field");
}

else
{
    var url="https://api.covid19api.com/country/"+country+"?from="+starts+"T00:00:00Z&to="+end+"T00:00:00Z";

    fetch(url)
    .then((result) => result.json())
    .then((result) => {
        console.log(result);
        var length=result.length;
        var index=length-1;

        var c=result[index].Confirmed;
        var a=result[index].Active;
        var d=result[index].Deaths;

        confirmed.innerHTML=c;
        active.innerHTML=a;
        deaths.innerHTML=d;

        document.getElementById("result").style.display="block";
        
    })
}
}