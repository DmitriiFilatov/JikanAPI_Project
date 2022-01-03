class JikanAPI {
    constructor() {
        this.url = "https://api.jikan.moe/v3";
    }

    //Fetch top anime of the current season
    async getSeasonAnime(limit) {
        const seasonAnime = await fetch(`${this.url}/season`).then(response => response.json());
        const animeArray = [];

        seasonAnime.anime.forEach(anime => {
            animeArray.push(anime);
        });
        return animeArray.splice(0, limit);
    }

    async searchItem(type, name) {
        const itemLimit = 6;

        const itemResponse = await fetch(`${this.url}/search/${type}?q=${name}&limit=${itemLimit}`);
        
        const items = await itemResponse.json();
        
        return {
            items
        };
    }

    async getTopItems(type) {
        const resItems = await fetch(`${this.url}/top/${type}/1`);
        
        const items = await resItems.json();

        const itemsArray = [];
    
        items.top.forEach(item => {
            itemsArray.push(item);
        });
        
        return {
            itemsArray
        }
    }
}