'use strict';
var str = '';
var parsed_number;
var stored_number = null;
var op = null;
var field = $('input');
var clear = false;

$('button').click(function (e) {
    var elemClicked = e.target;
    var idClicked = e.target.id;
    var classClicked = e.target.className;

    str += elemClicked.value;
    parsed_number = parseInt(str);

    if (classClicked === 'non-num') { //IF NON-NUMBER CLICKED
        str = '';
        clear = true;

        if (idClicked === 'clearButton') {
            op = null;
            stored_number = null;
            field.val('');

        } else if (idClicked == 'equalsButton') {

            switch (op) {
                case 'addButton':
                    stored_number = stored_number + parsed_number;
                    field.val(stored_number);
                    break;

                case 'subtractButton':
                    stored_number = stored_number - parsed_number;
                    field.val(stored_number);
                    break;

                case 'multiplyButton':
                    stored_number = stored_number * parsed_number;
                    field.val(stored_number);
                    break;

                case 'divideButton':
                    stored_number = stored_number / parsed_number;
                    field.val(stored_number);
                    break;
            }
        } else {
            op = idClicked;
            if(parsed_number){
                stored_number = parsed_number;
            }
        }
    } else { //IF NUMBER CLICKED
        if (clear) {
            field.val('');
            clear = false;
        }
        field.val(field.val() + $(elemClicked).val());
    }

    //DEBUG
    $('#output1').html('operation: ' + op);
    $('#output2').html('stored: ' + stored_number);
});

