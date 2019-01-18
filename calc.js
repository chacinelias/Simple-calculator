"use strict";

var str = "";
var parsed_number = null;
var buffer = null;
var op = null;
var field = $("input");
var clear = false;

//-----FLAGS-----//
var op_flag = false;
var equals_flag = false;
var num_flag = false;

$("button").click(function (e) {
    var elemClicked = e.target;
    var idClicked = e.target.id;
    var classClicked = e.target.className;

    //---------IF NON-NUMBER CLICKED------------//
    if (classClicked === "non-num") {

        if (str) {
            parsed_number = parseInt(str);
        }
        str = '';
        clear = true;

        if (idClicked === "clearButton") {//CLEAR
            clearAll();
        }

        else if (idClicked == "equalsButton") {//EQUALS

            operate(buffer, parsed_number, op);
            showResult();

            equals_flag = true;
        }

        else {//OPERATIONS

            if (op_flag) {

                if (num_flag && !equals_flag) {
                    operate(buffer, parsed_number, op);
                    showResult();
                } else {
                    equals_flag = false;
                }
            } else {
                buffer = parsed_number;
                op_flag = true;
            }
            op = idClicked;
        }
        num_flag = false;
    }

    //-----------------IF NUMBER CLICKED----------------//
    else {
        str += elemClicked.value;

        if (clear) {
            field.val("");
            clear = false;
        }
        field.val(field.val() + $(elemClicked).val());
        num_flag = true;
    }

    //DEBUG
    $("#output1").html("operation: " + op);
    $("#output2").html("buffer: " + buffer);
    $("#output7").html("str: " + str);
    $("#output3").html("parsed_number: " + parsed_number);
    $("#output4").html("num_flag: " + num_flag);
    $("#output5").html("op_flag: " + op_flag);
    $("#output6").html("equals_flag: " + equals_flag);
});

function clearAll() {
    op = null;
    buffer = null;
    parsed_number = null;
    field.val("");
    op_flag = false;
    equals_flag = false;
    num_flag = false;
}

function operate(a, b, o) {
    switch (o) {
        case "addButton":
            buffer = a + b;
            break;

        case "subtractButton":
            buffer = a - b;
            break;

        case "multiplyButton":
            buffer = a * b;
            break;

        case "divideButton":
            buffer = a / b;
            break;
    }
}

function showResult() {
    field.val(buffer);
}


//EQUALS BACKUP
// if (num_flag && !equals_flag && op_flag) {
//     operate(buffer, parsed_number, op);
//     showResult();
//     equals_flag = true;
// }