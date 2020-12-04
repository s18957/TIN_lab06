function fib(i) {
    if (i <= 1)
        return i;
    return fib(i - 2) + fib(i - 1);
}
function next() {
    let table = document.getElementById('fb-table');
    let prevNum = table.rows[table.rows.length - 1].cells[0].innerHTML;
    let lastRow = table.insertRow(table.rows.length);
    let firstCell = lastRow.insertCell(0);
    let secondCell = lastRow.insertCell(1);
    firstCell.innerHTML = '' + (Number(prevNum) + 1);
    secondCell.innerHTML = fib(Number(prevNum) + 1);
}