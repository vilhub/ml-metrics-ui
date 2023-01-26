// calculate f1 score 
function calculateF1Score(predictions, groundTruth) {
    if (predictions.length === 0 | groundTruth.length === 0 | predictions.length !== groundTruth.length) {
        return 'Predictions and ground truths need to be of equal length > 0';
    }
    let truePositives = {'A': 0, 'B': 0, 'C': 0};
    let falsePositives = {'A': 0, 'B': 0, 'C': 0};
    let falseNegatives = {'A': 0, 'B': 0, 'C': 0};
    let classes = ['A','B','C'];

    for (let i = 0; i < predictions.length; i++) {
        if (predictions[i] === groundTruth[i]) {
            truePositives[predictions[i]]++;
        } else {
            falsePositives[predictions[i]]++;
            falseNegatives[groundTruth[i]]++;
        }
    }

    let precision = 0;
    let recall = 0;
    let f1Score = 0;
    for(let cl of classes){
        precision += truePositives[cl] / (truePositives[cl] + falsePositives[cl]);
        recall += truePositives[cl] / (truePositives[cl] + falseNegatives[cl]);
    }

    precision /= classes.length;
    recall /= classes.length;

    f1Score = 2 * ((precision * recall) / (precision + recall));

    return f1Score;
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
    selectedPredictions.value = predictions.join(', ');
    updateScore();
});
document.getElementById("groundTruthSelect").addEventListener("change", function () {
    groundTruth.push(this.value);
    selectedGroundTruth.value = groundTruth.join(', ');
    updateScore();
});