 function validate(){
	// alert("Check");
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("pwd").value;
	var mobile = document.getElementById("mobile").value;
	var message = document.getElementById("msg").value;
	var male = document.getElementById("male").checked;//true/false
	var female = document.getElementById("female").checked;//true/false
	var crik = document.getElementById("crik").checked;//true/false
	var carrom = document.getElementById("carroms").checked;//true/false
	var state = document.getElementById("state").value;
	
	var namepattern = /^[a-z]+$/;
	var emailpattern = /^[a-z]+[a-z0-9\.\_]+[@]+[a-z\.]+[.]+[a-z]+$/;
	//rathan.basa05@gmail.com
	var passwordpattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%])[a-zA-Z0-9@#$%]+$/;
	var mobilepattern = /^[0-9]+$/;
	//www.google.com [www]+[.]+[a-z\.]+[.]+[a-z]
	if(name.length == 0){
		//alert("Please enter name");
		document.getElementById("error").innerHTML = "Please enter name";
		document.getElementById("name").focus();
		return false;
	}
	if(!name.match(namepattern)){
		document.getElementById("error").innerHTML = "Please enter name and should be small characters";
		document.getElementById("name").focus();
		return false;
	}
	if(email.length == 0){
		//alert("Please enter email");
		document.getElementById("error").innerHTML = "Please enter email";
		document.getElementById("email").focus();
		
		return false;
	} 
	if(!email.match(emailpattern)){
		//alert("Please enter email");
		document.getElementById("error").innerHTML = "Please enter email ex abc@xyz.com";
		document.getElementById("email").focus();
		
		return false;
	} 
	
	if(password.length == 0){
		//alert("Please enter password");
		document.getElementById("error").innerHTML = "Please enter passwrod";
		document.getElementById("pwd").focus();
		return false;
	} 
	if(!password.match(passwordpattern)){
		//alert("Please enter password");
		document.getElementById("error").innerHTML = "Please enter passwrod , it should be atlease 1 small, 1 capital, 1 numeris and any special character @#$%";
		document.getElementById("pwd").focus();
		return false;
	} 
	if(mobile.length != 10 ){
		//alert("Please enter password");
		document.getElementById("error").innerHTML = "Please enter mobile and should be 10";
		document.getElementById("mobile").focus();
		return false;
	} 
	if(!mobile.match(mobilepattern) ){
		//alert("Please enter password");
		document.getElementById("error").innerHTML = "Please enter mobile and should only numberic numbers";
		document.getElementById("mobile").focus();
		return false;
	} 
	if(message.length == 0 ){
		//alert("Please enter password");
		document.getElementById("error").innerHTML = "Please enter message";
		document.getElementById("msg").focus();
		return false;
	} 
	if(male == false && female == false){
		document.getElementById("error").innerHTML = "Please select gender";
		document.getElementById("male").focus();
		return false;
	}
	if(crik == false && carrom == false){
		document.getElementById("error").innerHTML = "Please select atlease one hobby";
		document.getElementById("crik").focus();
		return false;
	}
	if(state == 'Select state'){
		document.getElementById("error").innerHTML = "Please select any state";
		document.getElementById("state").focus();
		return false;
	}
	
 }