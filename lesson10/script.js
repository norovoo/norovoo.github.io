const width = 750;
const height = 330;
const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = 100 + Math.floor(Math.random() * 256);
    var z = 50 + Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";
}

const defaultWidht = 50;
const defaultGrowth = 5;
const defaultGrowRate = 250;
const defaultCircleNum = 1;

function addCircle() {
    let circleWidth = $('#txt_width').val();
    if (!$.isNumeric(circleWidth)) circleWidth = defaultWidht;
    let growSize = $('#txt_growth').val();
    if (!$.isNumeric(growSize)) growSize = defaultGrowth;
    let growRate = $('#txt_grow_rate').val();
    if (!$.isNumeric(growRate)) growRate = defaultGrowRate;
    let circleNum = $('#txt_number').val();
    if (!$.isNumeric(circleNum)) circleNum = defaultCircleNum;

    for (let i = 1; i <= circleNum; i++) {
        $('.circleBox').append(
            $('<div>').attr('class', 'circle').attr('id', 'circle' + i)
                .css('width', circleWidth + 'px')
                .css('height', circleWidth + 'px')
                .css('top', getRandom(0, height) + 'px')
                .css('left', getRandom(0, width) + 'px')
                // .css('background-color', '#' + Math.floor(Math.random() * 16777215).toString(16))
                .css('background-color', random_bg_color())
                .click(function () {
                    $('#circle' + i).remove();
                })
        );
    }

    setInterval(function () {
        for (let i = 1; i <= circleNum; i++) {
            const oldVal = parseInt($('#circle' + i).css('width'));
            const oldTop = parseInt($('#circle' + i).css('top'));
            const oldLeft = parseInt($('#circle' + i).css('left'));
            $('#circle' + i)
                .css('top', (oldTop - growSize / 2) + 'px')
                .css('left', (oldLeft - growSize / 2) + 'px')
                .css('width', (oldVal + parseInt(growSize)) + 'px')
                .css('height', (oldVal + parseInt(growSize)) + 'px');
        }
    }, growRate);

}

$(document).ready(function () {
    $('#start').click(addCircle);
});