var input = document.querySelector('textarea');
var btnTranslate = document.querySelector('#btn-translate');
var output = document.querySelector('#output');

var url ="https://api.funtranslations.com/translate/pirate.json";

function urlBuilder(inputText) {
    return url + "?text=" + inputText;
}

function clickHandler() {
    // fetch the translation from API 
    fetch(urlBuilder(input.value))
    .then(res => res.json())
    .then(json => {
        // show the translated output 

        output.innerText = json.contents.translated;
    
    }) // catching error 
    .catch(err => alert(err +" occured please try after sometime"))
}
btnTranslate.addEventListener('click', clickHandler);