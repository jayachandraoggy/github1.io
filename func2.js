var n=prompt("Enter no. :");
var tgp=0;
var tgg=0;
var agp=0;
var i=0;
function addnew(){
	
	if(i<n){
	var gp = document.getElementById("gp");
	var gg=document.getElementById("gg");
	tgp=Number(tgp)+Number(gp.value);
	tgg=Number(tgg)+Number(gg.value);
	alert("Entered Gold Price " +  gp.value + "\nEntered Bought Gold of grams "+ gg.value);
	i++;
	}
	else{
		agp=tgp/n;
		alert("Average Gold price " + agp + "\nTotal Gold in Locker " + tgg);
	}
}
function finish()
{
	for(var i=0; i<t; i++)
	{
		//wait(1000);
		//alert(gpa[i]+gga[i]);
		var te=gpa[i];
		//alert(t);
		agp=agp+te;
		tgg=tgg+gga[i];
		
	}
	//alert(agp);
	alert(agp);
}