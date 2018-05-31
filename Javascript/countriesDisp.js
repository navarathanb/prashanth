var country = ["select country","India","Japan","China"];
var india = ["ap","up","ts"];
var japan = ["hiroshima","nagasaki"];
var china = ["beijing","china2"];
var ap = ["ap1","ap2","ap3"];
function selcountry(){
	//alert("Test");
	for(i=0;i<country.length;i++){
		var obj = document.createElement("option"); // <option value="">text</option>
		obj.value = country[i];
		obj.text = country[i];
		document.getElementById("selCountry").options.add(obj);
		
	}
	
	
}

function selstate(val){
	document.getElementById("selState").options.length = 1;
	if(val == 'select country'){
		document.getElementById("selState").disabled = true;
	}
	else{
		document.getElementById("selState").disabled = false;
		
	}
	if(val == 'India'){
		for(i=0;i<india.length;i++){
		var obj = document.createElement("option"); // <option value="">text</option>
		obj.value = india[i];
		obj.text = india[i];
		document.getElementById("selState").options.add(obj);
		
	}
	}
	if(val == 'Japan'){
		for(i=0;i<japan.length;i++){
		var obj = document.createElement("option"); // <option value="">text</option>
		obj.value = japan[i];
		obj.text = japan[i];
		document.getElementById("selState").options.add(obj);
		
	}
	}
	if(val == 'China'){
		for(i=0;i<china.length;i++){
		var obj = document.createElement("option"); // <option value="">text</option>
		obj.value = china[i];
		obj.text = china[i];
		document.getElementById("selState").options.add(obj);
		
	}
	}
}

function selcity(){
	
}