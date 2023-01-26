// calculate f1 score 
function calculateF1Score(predictions, groundTruth) {
    // your code for calculating f1 score
    return 1.0;
}

let predictions = [];
let groundTruth = [];
let predictionsSelect = document.getElementById("predictionsSelect");
let groundTruthSelect = document.getElementById("groundTruthSelect");
let selectedPredictions = document.getElementById("selectedPredictions");
let selectedGroundTruth = document.getElementById("selectedGroundTruth");
let score = document.getElementById("score");


function updateScore() {
    let score = calculateF1Score(predictions, groundTruth);
    document.getElementById("score").value = score;
}

document.getElementById("predictionsSelect").addEventListener("change", function () {
    predictions.push(this.value);
    selectedPredictions.textContent = predictions;
    updateScore();
});
document.getElementById("groundTruthSelect").addEventListener("change", function () {
    groundTruth.push(this.value);
    selectedGroundTruth.textContent = groundTruth;
    updateScore();
});