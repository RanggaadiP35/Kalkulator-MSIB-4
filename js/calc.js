function tambah() {
    var myForm = window.document.getElementById("form1");
    var x = eval(myForm.x.value);
    var y = eval(myForm.y.value);
    var z = x + y

    myForm.hasil.value = z;

    
}

function kurang() {
    var myForm = window.document.getElementById("form1");
    var x = eval(myForm.x.value);
    var y = eval(myForm.y.value);
    var z = x - y

    myForm.hasil.value = z;
}

function kali() {
    var myForm = window.document.getElementById("form1");
    var x = eval(myForm.x.value);
    var y = eval(myForm.y.value);
    var z = x * y

    myForm.hasil.value = z;
}

function bagi() {
    var myForm = window.document.getElementById("form1");
    var x = eval(myForm.x.value);
    var y = eval(myForm.y.value);
    var z = x / y

    myForm.hasil.value = z;
}

function pangkat() {
    var myForm = window.document.getElementById("form1");
    var x = eval(myForm.x.value);
    var y = eval(myForm.y.value);
    var z = x ** y

    myForm.hasil.value = z;
}