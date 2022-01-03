class UI {
    constructor(){
        this.display = document.getElementById('results');
    }

    renderAnime(item) {
        item.start_date = moment(item.start_date).format("MMM Do YYYY");
        if (item.end_date === null) {
            item.end_date = "Currently Airing";
        }
        else {
            item.end_date = moment(item.end_date).format("MMM Do YYYY");
        }
        
        this.display.innerHTML += 
        `<div class="item-card">
            <a href=${item.url}>
                <img class="card-img" src="${item.image_url}" alt="123">
            </a>
            <div class="card-descr">
                <!-- <a href=${item.url} class="card-title">${item.title}</a> -->
                <p class="card-title">${item.title}</p>
                <div class="descr-fields">
                    <p class="descr-text">Score: ${item.score}</p>
                    <p class="descr-text">Episodes: ${item.episodes}</p>
                    <p class="descr-text">Aired: ${item.start_date} - ${item.end_date}</p>
                    <p class="descr-text">MAL Members: ${item.members}</p>
                </div>
            </div>
        </div>`;
    }

    renderManga(item) {
        item.start_date = moment(item.start_date).format("MMM Do YYYY");
        if (item.end_date === null) {
            item.end_date = "Currently Publishing";
        }
        else {
            item.end_date = moment(item.end_date).format("MMM Do YYYY");
        }
        
        this.display.innerHTML += 
        `<div class="item-card">
            <a href=${item.url}>
                <img class="card-img" src="${item.image_url}" alt="123">
            </a>
            <div class="card-descr">
                <!-- <a href=${item.url} class="card-title">${item.title}</a> -->
                <p class="card-title">${item.title}</p>
                <div class="descr-fields">
                    <p class="descr-text">Score: ${item.score}</p>
                    <p class="descr-text">Chapters: ${item.chapters}</p>
                    <p class="descr-text">Published: ${item.start_date} - ${item.end_date}</p>
                    <p class="descr-text">MAL Members: ${item.members}</p>
                </div>
            </div>
        </div>`;
    }

    renderTopItem(item, type) {
        if (type == 'anime'){
            this.display.innerHTML +=  
            `<div class="item-card">
                <a href=${item.url}>
                    <img class="card-img" src="${item.image_url}" alt="123">
                </a>
                <div class="card-descr">
                    <!-- <a href=${item.url} class="card-title">${item.title}</a> -->
                    <p class="card-title">${item.title}</p>
                    <div class="descr-fields">
                        <p class="descr-text">Score: ${item.score}</p>
                        <p class="descr-text">Episodes: ${item.episodes}</p>
                        <p class="descr-text">Aired: ${item.start_date} - ${item.end_date}</p>
                        <p class="descr-text">MAL Members: ${item.members}</p>
                    </div>
                </div>
            </div>`;
        } else if (type == 'manga') {
            if (item.end_date === null) {
                item.end_date = "Currently Publishing";
            }
            this.display.innerHTML +=  
            `<div class="item-card">
                <a href=${item.url}>
                    <img class="card-img" src="${item.image_url}" alt="123">
                </a>
                <div class="card-descr">
                    <!-- <a href=${item.url} class="card-title">${item.title}</a> -->
                    <p class="card-title">${item.title}</p>
                    <div class="descr-fields">
                        <p class="descr-text">Score: ${item.score}</p>
                        <p class="descr-text">Published: ${item.start_date} - ${item.end_date}</p>
                        <p class="descr-text">MAL Members: ${item.members}</p>
                    </div>
                </div>
            </div>`;
        }
        
    }
}