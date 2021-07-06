function calculate() {
    var billamt = document.getElementById("billamt").value;
    var serviceamt = document.getElementById("service").value;
    var peopleamt = document.getElementById("noOfPeople").value;

    if (billamt === '' || serviceamt === 0) {
        alert("Please enter value");
        return;
    }

    var total = (billamt * serviceamt) / peopleamt;

    total = Math.round(total * 100) / 100;

    total = total.toFixed(2);

    document.getElementById("totaltip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

};


