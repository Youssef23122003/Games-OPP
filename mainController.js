import ApiService from './apiService.js';
import UI from './ui.js';

class MainController {
    constructor() {
        this.apiService = new ApiService(
            'e8a9150e66msh58f87262c2f14b1p14eab1jsn9dee3d4437f1', 
            'free-to-play-games-database.p.rapidapi.com'
        );
        this.display = new UI();
        this.init();
    }

    init() {
        this.addNavEventListeners();
        this.fetchGames('MMORPG'); 
    }

    async fetchGames(category) {
        const games = await this.apiService.fetchGames(category);
        if (games) {
            this.display.displayGames(games);
        }
    }

    async showGameDetails(id) {
        document.querySelector('.layer-spinner').classList.remove('d-none');
        const game = await this.apiService.fetchGameDetails(id);
        if (game) {
            this.display.displayGameDetails(game);
            document.querySelector('.layer-spinner').classList.add('d-none');
        }
    }

    addNavEventListeners() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                document.querySelector('.nav-link.active').classList.remove('active');
                e.target.classList.add('active');
                const category = e.target.innerHTML.trim();
                this.fetchGames(category);
                $('.layer-spinner').removeClass('d-none');
            }); 
        });
    }
    
}

document.addEventListener('DOMContentLoaded', () => {
    window.controller = new MainController();
});
