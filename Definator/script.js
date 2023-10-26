function writeDefinition(e) {
    let definition = document.getElementById('definition');
    let showword = document.getElementById('showword')
    let word = document.getElementById('word').value;
    showword.innerText = word;
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/dictionary?word=' + word,
        headers: { 'X-Api-Key': 'Enter your API Key' },
        contentType: 'application/json',
        success: function (result) {
            definition.innerText = (result.definition)
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });

}