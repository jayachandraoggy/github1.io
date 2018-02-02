var t=0;
function addnew(){
	//array initialization
	var gp=document.getElementById("gp");
	var gg=document.getElementById("gg");
	
	//var result=str.value();
	
	if(t == 0){
		var gpa= new Array(gp);
		alert(t);
		t++;
		return;
	}
	if(t != 0){
		alert(t);
		gpa[t++]=gp;
		alert(t);
	}
}
function finish()
{

}