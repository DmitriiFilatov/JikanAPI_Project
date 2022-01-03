const api = new JikanAPI();
const ui = new UI();

const searchBtn = document.getElementById('btn_search');

const display = document.getElementById('results');

//Radiobuttons for search query
const radioAnime = document.getElementById('type_anime');
const radioManga = document.getElementById('type_manga');

//Radiobuttons for displaying top lists
const radioTopAnime = document.getElementById('top_anime');
const radioTopManga = document.getElementById('top_manga');

const searchItem = document.getElementById('search_query');

const displayHdr = document.getElementById('display_header');

//Search an item on button press
searchBtn.addEventListener('click', (e) => {
    if (searchItem.value !== '') {
        let type = '';
        if (radioAnime.checked) type = 'anime' 
        else if (radioManga.checked) type = 'manga';
        
        api.searchItem(type, searchItem.value).then(data => {
            display.innerHTML = '';
            if (type == 'anime') data.items.results.forEach(item => ui.renderAnime(item))
            else if (type == 'manga') {
                console.log(data.items.results);
                data.items.results.forEach(item => ui.renderManga(item));
            }
        });
    } else {
        console.log('wtf');
    }
});

//Search an item on enter press
searchItem.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) { // If Enter key is pressed
        e.preventDefault();
        searchBtn.click();
    }
})

function checkRadioButtons() {
    document.querySelector('#type_anime').checked = true;
    document.querySelector('#top_anime').checked = true;
}

//Display top list of selected type
function displayTopList(type) {
    display.innerHTML = '';
    displayHdr.innerHTML = `Top ${type.charAt(0).toUpperCase() + type.slice(1)} Of All Time`;
    api.getTopItems(type).then(data => {
        console.log(data);
        const items = data.itemsArray.splice(0, 15); // Limit to 15 items
        items.forEach(item => ui.renderTopItem(item, type));
    });
}

radioTopAnime.addEventListener('click', (e) => {
    if(e.target.checked) {
        let type = 'anime';
        displayTopList(type);
    }
});

radioTopManga.addEventListener('click', (e) => {
    if(e.target.checked) {
        let type = 'manga';
        displayTopList(type);
    }
});

displayTopList('anime'); //Display top anime on page load
checkRadioButtons();
