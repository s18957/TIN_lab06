function check(num, email) {
    let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]+/;
    if (isNaN(Number(num)) || num === '') {
        document.getElementById('num-box').style.border = "2px solid red";
        document.getElementById('num-box').style.borderRadius = "3px";

        document.getElementById('result').innerHTML = "Number is not valid";
        return false;
    }
    if (!emailRegex.test(email)) {
        document.getElementById('email-box').style.border = "2px solid red";
        document.getElementById('email-box').style.borderRadius = "3px";

        document.getElementById('result').innerHTML = "Email is not valid";
        return false;
    }
    return true;
}