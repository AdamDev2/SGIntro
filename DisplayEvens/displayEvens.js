

function clearErrors() {
    for (var i = 0; i < document.forms["displayEvens"].elements.length; i++) {
        if (document.forms["displayEvens"].elements[i].parentElement.parentElement.className.indexOf("has-") != -1) {
            document.forms["displayEvens"].elements[i].parentElement.parentElement.className = "form-group";
        }
    }

}

function partialReset() {
    var evensDisplayed = document.getElementById("resultsDisplayEvens").getElementsByTagName("h4");

    if (evensDisplayed.length <= 0) {
        //alert("h4 with class evens does not exist")

    } else {

        while (evensDisplayed[0]) {
            evensDisplayed[0].parentNode.removeChild(evensDisplayed[0]);
        }
        document.getElementById("results").style.display = "none";
    }

}

function resetForm() {
    clearErrors();
    document.forms["displayEvens"]["inputNumberStart"].value = "";
    document.forms["displayEvens"]["inputNumberEnd"].value = "";
    document.forms["displayEvens"]["inputNumberStep"].value = "";
    document.getElementById("results").style.display = "none";
    document.forms["displayEvens"]["inputNumberStart"].focus();
}

function validateForm() {
    clearErrors();
    partialReset();
    var numStart = document.forms["displayEvens"]["inputNumberStart"].value;
    var numEnd = document.forms["displayEvens"]["inputNumberEnd"].value;
    var numStep = document.forms["displayEvens"]["inputNumberStep"].value;

    // validation for Starting Number
    if (numStart === "" || isNaN(numStart)) {
        alert("Starting Number must be filled in with a number.");
        document.forms["displayEvens"]["inputNumberStart"].parentElement.parentElement.className = "form-group has-error";
        document.forms["displayEvens"]["inputNumberStart"].focus();
        return false;
    }

    // validation for Ending Number
    if (numEnd === "" || isNaN(numEnd) || Number(numStart) >= Number(numEnd)) {
        alert("Ending Number must be filled in with a number that is bigger than the starting number.");
        document.forms["displayEvens"]["inputNumberEnd"].parentElement.parentElement.className = "form-group has-error";
        document.forms["displayEvens"]["inputNumberEnd"].focus();
        return false;
    }

    // validation for Step Number
    if (numStep === "" || isNaN(numStep) || Number(numStep) < 0) {
        alert("Step Number must be filled in with a positive number.");
        document.forms["displayEvens"]["inputNumberStep"].parentElement.parentElement.className = "form-group has-error";
        document.forms["displayEvens"]["inputNumberStep"].focus();
        return false;
    }

    // display the input values for Starting Number, Ending Number, and Step Number
    document.getElementById("startResult").innerText = Number(numStart);
    document.getElementById("endResult").innerText = Number(numEnd);
    document.getElementById("stepResult").innerText = Number(numStep);
    document.getElementById("results").style.display = "block";

    // for loop to determine which even numbers to display
    for (var i = Number(numStart); i < Number(numEnd); i += Number(numStep)) {
        //console.log(i);
        if (i % 2 === 0) {
            // create an <h4> element
            var node = document.createElement("h4")
            // add a class of evens
            node.className = "evens";
            // get the elemeent by id and append the <h4> element and change the value to that of i - should be an even number
            document.getElementById("resultsDisplayEvens").appendChild(node).innerText = Number(i);
        }

    }
    node = null;
    return false;
}