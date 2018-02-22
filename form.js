function formValidation() {

    var firstname = document.getElementById('firstname');
	var lastname = document.getElementById('lastname');
	var email = document.getElementById('email');
	var mobile = document.getElementById('mobile');
	var address = document.getElementById('address');
	var city = document.getElementById('city');
	var state = document.getElementById('state');
	var pin = document.getElementById('pin');
	var country = document.getElementById('country');
	var percent1 = document.getElementById('percent1');
	var percent2 = document.getElementById('percent2');
	var percent3 = document.getElementById('percent3');
	var percent4 = document.getElementById('percent4');
	var year1 = document.getElementById('year1');
	var year2 = document.getElementById('year2');
	var year3 = document.getElementById('year3');
	var year4 = document.getElementById('year4');
	var board1 = document.getElementById('board1');
	var board2 = document.getElementById('board2');
	var board3 = document.getElementById('board3');
	var board4 = document.getElementById('board4');
	var others = document.getElementById('others');

	if (firstname.value.length == 0) {
		document.getElementById('head').innerText = "* All fields are mandatory *"; 
		firstname.focus();
		return false;
	}

	if(inputAlphabet(firstname,"* For your name please use alphabets only *")){
		if(inputAlphabet(lastname,"* For your lastname please use alphabets only *")){
			if(emailValidation(email,"* Please enter a valid email address *")){
				if(textNumeric(mobile,"* Please use only numbers *")){
					if(textNumeric(pin,"* Please enter a valid pin code *")){
						if(textNumeric(percent1,"* Please use only numbers *")){
							if(textNumeric(percent2,"* Please use only numbers *")){
								if(textNumeric(percent3,"* Please use only numbers *")){
									if(textNumeric(year1,"* Please use only numbers *")){
										if(textNumeric(year1,"* Please use only numbers *")){
											if(textNumeric(year2,"* Please use only numbers *")){
												if(textNumeric(year3,"* Please use only numbers *")){
													return true;
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	else	return false;

	document.getElementById('reset').addEventListener("click",function(e){
		firstname.innerText = "";
		lastname.innerText = "";
		email.innerText = "";
		mobile.innerText = "";
		address.innerText = "";
		city.innerText = "";
		pin.innerText = "";
		state.innerText = "";
		country.innerText = "";
		board1.innerText = "";
		board2.innerText = "";
		board3.innerText = "";
		board4.innerText = "";
		percent1.innerText = "";
		percent2.innerText = "";
		percent3.innerText = "";
		percent4.innerText = "";
		year1.innerText = "";
		year2.innerText = "";
		year3.innerText = "";
		year4.innerText = "";
		others.innerText = "";
	},false);
}

function inputAlphabet(inputtext, alertMsg) {
	var alphaExp = /^[a-zA-Z]+$/;
	if (inputtext.value.match(alphaExp)) {
		return true;
	} 
	else {
		document.getElementById('p1').innerText = alertMsg;
		inputtext.focus();
		return false;
	}
}

function textNumeric(inputtext, alertMsg) {
	var numericExpression = /^[0-9]+$/;
	if (inputtext.value.match(numericExpression)) {
		return true;
	} 
	else {
		document.getElementById('p2').innerText = alertMsg;
		inputtext.focus();
		return false;
	}
}


function emailValidation(inputtext, alertMsg) {
	var emailExp = /^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
	if (inputtext.value.match(emailExp)) {
		return true;
	} 
	else {
		document.getElementById('p3').innerText = alertMsg;
		inputtext.focus();
		return false;
	}
}

document.getElementById('submit').addEventListener("click",function(e){
	formValidation();
},false);
