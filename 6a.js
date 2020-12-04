function convert(value, f, c) {
    if (f.checked)
        document.getElementById('result').innerHTML = 'Result is: ' + convertFromF(value).toFixed(2) + "C";
    else if (c.checked)
        document.getElementById('result').innerHTML = 'Result is: ' + convertFromC(value).toFixed(2) + "F";
    else
        document.getElementById('result').innerHTML = 'Please choose what type is this'
}
function convertFromC(value) {
    return value * 9/5 + 32;
}
function convertFromF(value) {
    return (value - 32) * 5/9;
}