function addTask() {
    $('#alltasks').val($('#alltasks').val() + $('#tasklist1').val() + "\n");
    localStorage.setItem(
        "alltasks", $('#alltasks').val()
    )
}

function loadData() {
    const getstoragedata = localStorage.getItem("alltasks");
    $('#alltasks').val(getstoragedata);
}

function clear() {
    $('#alltasks').val('');
}

$(document).ready(function () {
    loadData();
    $('#add').click(addTask);
    $('#clear').click(clear);
});