// calculate f1 score 
function calculateF1Score(predictions, groundTruth) {
    // your code for calculating f1 score
    return 1.0;
}

// update score on page
function updateScore() {
    let predictions = [...];
    let groundTruth = [...];
    let score = calculateF1Score(predictions, groundTruth);
    document.getElementById("score").innerHTML = score;
}

updateScore();

// create select elements for predictions and ground truth
let predictionsSelect = document.createElement("select");
let groundTruthSelect = document.createElement("select");

// add options to select elements
let options = ["A", "B", "C"];
for (let option of options) {
    let opt = document.createElement("option");
    opt.value = option;
    opt.innerHTML = option;
    predictionsSelect.appendChild(opt);
    groundTruthSelect.appendChild(opt);
}

// add event listeners to select elements to call updateScore when changed
predictionsSelect.addEventListener("change", updateScore);
groundTruthSelect.addEventListener("change", updateScore);

// add select elements to the page
document.body.appendChild(predictionsSelect);
document.body.appendChild(groundTruthSelect);
