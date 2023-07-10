document.getElementById("calculate").addEventListener("click", function() {
    var totalBillAmount = parseFloat(document.getElementById("totalBillAmount").value);
    var totalPeople = parseInt(document.getElementById("totalPeople").value);

    if (totalBillAmount <= 0 || isNaN(totalBillAmount) || totalPeople <= 0 || isNaN(totalPeople)) {
        alert("Please enter valid values.");
        return;
    }

    var amountPerPerson = (totalBillAmount / totalPeople).toFixed(2);

    document.getElementById("amountPerPerson").textContent = "$" + amountPerPerson;
});
