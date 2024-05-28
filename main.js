const checkBox = document.getElementById("menuclick").value;
const text = document.getElementById("menu_container");
//const ne = document.getElementById("phook");
function menufunction() {
	if (checkBox.checked == true) {
		text.style.display == "block";
	}
	else {
		text.style.display == "none";
	}
}
function menufunction() {
  if (checkBox.checked == true){
    text.style.marginLeft = "6px";
  } 
  else if (checkBox.checked == false) {
  	text.style.marginLeft = "10px";
  }
  else {
     text.style.marginLeft = "10px";
  }
}
const email = document.getElementById("mail_sender").value;
const massage = document.getElementById("commented_text")
.value;
const strmail = email.toString();
const strmassage = massage.toString();
const form_comment = document.getElementById("commented");
const outformcomment = document.getElementById("consiletoform");
form_comment.addEventListener("submit", function myfunctionatcomment(){
	event.preventDefault();
	if (strmail == ""){
		var see = "sucessfully sent!";
		outformcomment.style.color = "red";
		outformcomment.style.backgroundColor = "yellow";
		outformcomment.style.padding = "3px";
		outformcomment.style.transition = "1s";
		//return false;
	}
	else {
	    var see = "sucessfully sent!";
	    outformcomment.style.color = "blue";
	    outformcomment.style.backgroundColor = "yellow";
	    outformcomment.style.padding = "3px";
	    outformcomment.style.transition = "1s";
	    //email.style.display = "flex";
	//    massage.style.display = "none";
	    
	    
	    
	}
	outformcomment.innerHTML = see;
});
  document.onkeydown = function(e) {
    if(e.keyCode == 123) {
     return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
     return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
     return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
     return false;
    }

    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
     return false;
    }      
 }