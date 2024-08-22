const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const months = { 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, 11: 11, 12: 12, 1: 13, 2: 14 };

function zellerCongruence(d, m, y) {
    if (m === 1 || m === 2) {
        y -= 1;
    }

    m = months[m];
    const K = y % 100;
    const J = Math.floor(y / 100);

    // Zeller's formula
    const x = (d + Math.floor((13 * (m + 1)) / 5) + K + Math.floor(K / 4) + Math.floor(J / 4) + (5 * J)) % 7;
    
    return x;
}

function findDay() {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    const dayIndex = zellerCongruence(day, month, year);
    const resultText = `The date ${day}/${month}/${year} falls on a <span style="color:red;">${days[dayIndex]}</span>.`;
    
    document.getElementById("result").innerHTML = resultText;

    return false; // Prevent form submission
}