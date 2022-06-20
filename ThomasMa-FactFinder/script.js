var fact1 = "<i> Did you know? </i> <br> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp The sentence, <strong> <i> the quick brown fox jumps over a lazy dog, </i> </strong> uses <strong> every letter </strong> in the English alphabet?";
var fact2 = "<i> Did you know? </i> <br> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp The book, <strong> <i> Green Eggs and Ham </i> </strong> started as a bet? Yes, the Dr. Seuss classic grew out of a bet with his editor that he could not write a book using <strong> fewer than 50 different words. </strong> Dr. Seuss proved Bennett Cerf wrong, and <strong> won $50! </strong>";
var fact3 = "<i> Did you know? </i> <br> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Hot water <strong> freezes faster </strong> than cold water?";
var fact4 = "<i> Did you know? </i> <br> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Sea otters hold hands while they <strong> sleep? </strong>";
var fact5 = "<i> Did you know? </i> <br> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp The <strong> heart </strong> of a shrimp is located in its <strong> head? </strong> ";

function facta(){
	document.getElementById('factdisplay').innerHTML = fact1 + "<img src='images/foxJumpsOverDog.png' alt='This is a <i> creative commons lincense </i> image of a quick fx jumping over a lazy dog.'>";
	document.querySelector('main').style.borderColor = "#FB6602"; 
	document.querySelector('#factdisplay').style.borderColor = "#773304"; 
	document.querySelector('#factdisplay').style.backgroundColor = "#47A025"; 
	document.querySelector('body').style.backgroundColor = "#F6A705"; 
	document.querySelector('form').style.borderColor = "#773304"; 
	document.querySelector('form').style.backgroundColor = "#1AC8ED"; 
}	// facta

function factb(){
	document.getElementById("factdisplay").innerHTML = fact2 + "<img src='images/greenEggsAndHam.jpg' alt='This is a <i> creative commons lincense </i> image of Dr. Seuss classic <strong> <i> Green Eggs and Ham. </i> </strong>'>";	
	document.querySelector('main').style.borderColor = "#47A025"; 
	document.querySelector('#factdisplay').style.borderColor = "#40CC58"; 
	document.querySelector('#factdisplay').style.backgroundColor = "#FFFFFF"; 
	document.querySelector('body').style.backgroundColor = "#FC6A03"; 
	document.querySelector('form').style.borderColor = "#40CC58"; 
	document.querySelector('form').style.backgroundColor = "#FFFFFF";
}	// factb

function factc(){
	document.getElementById("factdisplay").innerHTML = fact3 + "<img src='images/hotColdWater.jfif' alt='This is a <i> creative commons lincense </i> image of water.'>";	
	document.querySelector('main').style.borderColor = "#0F5E9C"; 
	document.querySelector('#factdisplay').style.borderColor = "#1CA3EC"; 
	document.querySelector('#factdisplay').style.backgroundColor = "#FFFFFF"; 
	document.querySelector('body').style.backgroundColor = "#B3E9C7";
	document.querySelector('form').style.borderColor = "#FFFFFF"; 
	document.querySelector('form').style.backgroundColor = "#1CA3EC"; 
}	//factc

function factd(){
	document.getElementById("factdisplay").innerHTML = fact4 + "<img src='images/seaOtters.jpg' alt='This is a <i> creative commons lincense </i> image of two sea otters holding hands while sleeping.'>";	;	
	document.querySelector('main').style.borderColor = "#522D11"; 
	document.querySelector('#factdisplay').style.borderColor = "#3A506B"; 
	document.querySelector('#factdisplay').style.backgroundColor = "#6FFFE9"; 
	document.querySelector('body').style.backgroundColor = "#5BC0BE"; 
	document.querySelector('form').style.borderColor = "#773304";  
	document.querySelector('form').style.backgroundColor = "#1CA3EC"; 
}	// factd

function facte(){
	document.getElementById("factdisplay").innerHTML = fact5 + "<img src='images/shrimp.jpg' alt='This is a <i> creative commons lincense </i> image of a shrimp.'>";	;	
	document.querySelector('main').style.borderColor = "#1CA3EC"; 
	document.querySelector('#factdisplay').style.borderColor = "#E26D4A";
	document.querySelector('#factdisplay').style.backgroundColor = "#FF9F9F";
	document.querySelector('body').style.backgroundColor = "#0F5E9C";  
	document.querySelector('form').style.borderColor = "#FCF6F5"; 
	document.querySelector('form').style.backgroundColor = "#FF9F9F"; 
}	// facte
