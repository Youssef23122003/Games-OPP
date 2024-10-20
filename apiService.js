export default class ApiService {
    constructor(apiKey, apiHost) {
        this.apiKey = apiKey;
        this.apiHost = apiHost;
        this.baseUrl = 'https://free-to-play-games-database.p.rapidapi.com/api';
    }

    async fetchGames(category) {
        const url = `${this.baseUrl}/games?category=${category}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': this.apiKey,
                'x-rapidapi-host': this.apiHost
            }
        };
        try {
            $('.layer-spinner').removeClass('d-none')
            const response = await fetch(url, options);
            const games = await response.json();
            return games;
        } catch (error) {
            console.error("Error fetching games data:", error);
        }
        finally{
            $('.layer-spinner').addClass('d-none')
        }
    }

    async fetchGameDetails(id) {
        const url = `${this.baseUrl}/game?id=${id}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': this.apiKey,
                'x-rapidapi-host': this.apiHost
            }
        };
        try {
            $('.layer-spinner').removeClass('d-none')
            const response = await fetch(url, options);
            const gameDetails = await response.json();
            return gameDetails;
        } catch (error) {
            console.error("Error fetching game details:", error);
            $('.layer-spinner').addClass('d-none')
        }
    }
}
