const loginText = document.querySelector(".title-text .title");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector(".signuplink a");
signupBtn.onclick = (() => {
	loginForm.style.marginLeft = "-50%";
	loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
	loginForm.style.marginLeft = "0%";
	loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
	signupBtn.click();
	return false;
});
function validate() {
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value
	if (username == 'abc' && password == "xyz") {
		let text = "Login successful\nProceed?";
		if(confirm(text) == true) {
			reload();
		} else {
			window.location.reload(true);
		}
	} else {
		alert('Login failed');
	}
}
function svalidate() {

	var spassword = document.getElementById("spassword").value
	var sspassword = document.getElementById("sspassword").value
	if (spassword == sspassword) {
		alert('Signed up sucessfully');
		return false
	}
	else {
		alert('Signup failed');
	}
}
function reload() {
	location.href = "homepage.html";
}
