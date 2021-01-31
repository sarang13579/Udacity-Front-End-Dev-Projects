var table, grid_h, grid_w, rows, cell;
var row_input = $('#inputHeight');
var column_input = $('#inputWeight');
table = $('#pixelCanvas');


// grid generation on user input
function makeGrid() {
    console.log("makeGrid started")

    grid_h = row_input.val();
    grid_w = column_input.val();

    table.children().remove()


    for (x = 0; x < grid_h; x++) {
        table.append('<tr></tr>');
    }

    rows = $('tr');

    for (y = 0; y < grid_w; y++) {
        rows.append('<td></td>');
    }

    cell = table.find('td');

    // When td is clicked by the user, change color of td
    cell.click(function() {
        // Select color input
        console.log("colorPicker block");
        var color;
        color = $("#colorPicker").val();
        $(this).attr('bgcolor', color);
    });

}

// When size is submitted by the user, call makeGrid()
var submitQuery;

submitQuery = $('input[type="submit"]')

submitQuery.click(function(event) {
    event.preventDefault();
    makeGrid();
});