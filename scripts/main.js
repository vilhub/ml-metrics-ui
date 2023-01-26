// calculate f1 score 
function calculateF1Score(predictions, groundTruth) {
    // your code for calculating f1 score
    return 1.0;
}

// update score on page
function updateScore() {
    let predictions = ["A", "B", "C", "A", "B"];
    let groundTruth = ["A", "A", "C", "A", "B"];
    let score = calculateF1Score(predictions, groundTruth);
    document.getElementById("score").innerHTML = score;
}

let predictionsSelect = document.getElementById("predictionsSelect");
let groundTruthSelect = document.getElementById("groundTruthSelect");
let selectedPredictions = document.getElementById("selectedPredictions");
let selectedGroundTruth = document.getElementById("selectedGroundTruth");
let score = document.getElementById("score");

predictionsSelect.addEventListener("change", function() {
  selectedPredictions.value = predictionsSelect.value;
  updateScore();
});

groundTruthSelect.addEventListener("change", function() {
  selectedGroundTruth.value = groundTruthSelect.value;
  updateScore();
});