// make a function that runs after full page is loaded
$(document).ready(function() {

    // set values for the cats equal to the default display already in the HTML file
    let cats = {Maxwell: 7, Mona: 4, Tenley: 6};

    // create a function for when the user clicks the submit button
    $('#submission').click(function() {

        // determine which radio button is currently selected
        const select = $('input[name="option"]:checked').val();

        // what happens when submit button is clicked while a radio button is selected
        if (select) {

            // add 1 to the count of the radio button
            cats[select] += 1;

            // update the results screen
            $('#maxVote').text(cats['Maxwell']);
            $('#monaVote').text(cats['Mona'])
            $('#tenVote').text(cats['Tenley'])
        }
    });
});