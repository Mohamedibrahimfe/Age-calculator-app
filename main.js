// Function to calculate age based on input values
function calculateAge() {
    var day = parseInt(document.querySelector('.day').value);
    var month = parseInt(document.querySelector('.month').value);
    var year = parseInt(document.querySelector('.year').value);

    var inputDate = new Date(year, month - 1, day);
    var today = new Date();

    var daysDiff = today.getDate() - inputDate.getDate();
    var monthsDiff = today.getMonth() - inputDate.getMonth();
    var yearsDiff = today.getFullYear() - inputDate.getFullYear();
    // Check if any input is empty
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert("Please enter all fields");
        return;
    }
    if(day > 31 || day < 1){
        alert("Please enter valid day");
        return;
    };
    if(month > 12 || month < 1){
        alert("Please enter valid month");
        return;
    };
    if(year < 1900||year>today.getFullYear()){
        alert("Please enter valid year");
        return;
    };
    if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
        yearsDiff--;
        monthsDiff += 12;
    }

    if (daysDiff < 0) {
        var lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
        daysDiff += lastMonth.getDate();
        monthsDiff--;
    }

    return { years: yearsDiff, months: monthsDiff, days: daysDiff };
}

// Function to update the display with calculated age
function updateDisplay(age) {
    document.querySelector('.first').textContent = age.days;
    document.querySelector('.seconed').textContent = age.months;
    document.querySelector('.third').textContent = age.years;
}

// Event listener for the button click
document.querySelector('button').addEventListener('click', function() {
    var age = calculateAge();
    updateDisplay(age);
});
