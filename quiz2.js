var option;
function yesToAnswer() {
    document.getElementById('ans_img').src = 'https://similesmiles.com/simages/right.png';
}
function noToAnswer() {
    document.getElementById('ans_img').src = 'https://img.pngio.com/wrong-png-98-images-in-collection-page-3-wrong-png-512_512.png';
}
function give_ans(option) {
    var ans = document.getElementById(option).checked;
    document.getElementById('btn_next').disabled = true;
    document.getElementById('btn_reset').disabled = true;
    document.getElementById('btn_next').style.cursor = 'no-drop';
    document.getElementById('btn_reset').style.cursor = 'no-drop';
    return ans;
}
function next() {
    document.getElementById('questions').style.opacity = 0.4;
    document.getElementById('loader').style.display = 'block';
    setTimeout(function hide_que() {
        document.getElementById('questions').style.display = '';
        document.getElementById('questions').style.opacity = 1;
        document.getElementById('loader').style.display = 'none';
        document.getElementById('question1').style.display = 'none';
        document.getElementById('question2').style.display = '';
    }, 3000);
}
function Q1() {
    if (give_ans('Q1option1') === false) {
        noToAnswer();
    }
    else {
        yesToAnswer();
    }
    setTimeout(next, 2000);
}