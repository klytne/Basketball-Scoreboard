let count = 0

function addPoints(scoreId, points) {
    count += points
    document.getElementById(scoreId).innerText= count
}


function reset(scoreId) {
    count = 0
    document.getElementById(scoreId).innerText = 0
}