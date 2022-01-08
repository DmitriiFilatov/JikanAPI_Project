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
            <div class="card-img">
                <a href=${item.url}>
                    <img class="item-img" src="${item.image_url}" alt="123">
                </a>
            </div>
            <p class="card-title">${item.title}</p>
            <div class="card-descr">
                    <div class="descr-field">
                        <i class="far fa-star descr-icon1"></i>
                        <p>Score: ${item.score}</p>
                    </div>
                    <div class="descr-field">
                        <i class="fas fa-book-open descr-icon2"></i>
                        <p>Episodes: ${item.episodes}</p>
                    </div>
                    <div class="descr-field">
                        <i class="fas fa-clock descr-icon3"></i>
                        <p>Aired: ${item.start_date} - ${item.end_date}</p>
                    </div>
                    <div class="descr-field">
                        <i class="fas fa-users descr-icon4"></i>
                        <p>MAL Members: ${item.members}</p>
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
            <div class="card-img">
                <a href=${item.url}>
                    <img class="item-img" src="${item.image_url}" alt="123">
                </a>
            </div>
            <p class="card-title">${item.title}</p>
            <div class="card-descr">
                <div class="descr-field">
                    <i class="far fa-star descr-icon1"></i>
                    <p>Score: ${item.score}</p>
                </div>
                <div class="descr-field">
                    <i class="fas fa-clock descr-icon3"></i>
                    <p>Published: ${item.start_date} - ${item.end_date}</p>
                </div>
                <div class="descr-field">
                    <i class="fas fa-users descr-icon4"></i>
                    <p>MAL Members: ${item.members}</p>
                </div>
            </div>
        </div>`;
    }

    renderTopItem(item, type) {
        if (type == 'anime'){
            this.display.innerHTML +=  
            `<div class="item-card">
                <div class="card-img">
                    <a href=${item.url}>
                        <img class="item-img" src="${item.image_url}" alt="123">
                    </a>
                </div>
                <p class="card-title">${item.title}</p>
                <div class="card-descr">
                    <div class="descr-field">
                        <i class="far fa-star descr-icon1"></i>
                        <p>Score: ${item.score}</p>
                    </div>
                    <div class="descr-field">
                        <i class="fas fa-book-open descr-icon2"></i>
                        <p>Episodes: ${item.episodes}</p>
                    </div>
                    <div class="descr-field">
                        <i class="fas fa-clock descr-icon3"></i>
                        <p>Aired: ${item.start_date} - ${item.end_date}</p>
                    </div>
                    <div class="descr-field">
                        <i class="fas fa-users descr-icon4"></i>
                        <p>MAL Members: ${item.members}</p>
                    </div>
                </div>
            </div>`;
        } else if (type == 'manga') {
            if (item.end_date === null) {
                item.end_date = "Currently Publishing";
            }
            this.display.innerHTML +=  
            `<div class="item-card">
                <div class="card-img">
                    <a href=${item.url}>
                        <img class="item-img" src="${item.image_url}" alt="123">
                    </a>
                </div>
                <p class="card-title">${item.title}</p>
                <div class="card-descr">
                    <div class="descr-field">
                        <i class="far fa-star descr-icon1"></i>
                        <p>Score: ${item.score}</p>
                    </div>
                    <div class="descr-field">
                        <i class="fas fa-clock descr-icon3"></i>
                        <p>Published: ${item.start_date} - ${item.end_date}</p>
                    </div>
                    <div class="descr-field">
                        <i class="fas fa-users descr-icon4"></i>
                        <p>MAL Members: ${item.members}</p>
                    </div>
                </div>
            </div>`;
        }
        
    }
}