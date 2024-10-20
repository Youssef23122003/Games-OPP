export default class UI {
    constructor() {}

    displayGames(games) {
        let cartona = '';
        games.forEach(game => {
            cartona += `
            <div class="col-xl-3 col-lg-4 col-md-6">
                <div onclick="controller.showGameDetails(${game.id})" class="card h-100 bg-transparent" role="button">
                    <div class="card-body">
                        <figure class="position-relative">
                            <img class="card-img-top object-fit-cover h-100" src="${game.thumbnail}" />
                        </figure>
                        <figcaption>
                            <div class="hstack justify-content-between">
                                <h3 class="h6 small">${game.title}</h3>
                                <span class="badge text-bg-primary p-2">Free</span>
                            </div>
                            <p class="card-text small text-center opacity-50">
                                ${game.short_description.split(" ", 8).join(" ")}
                            </p>
                        </figcaption>
                    </div>
                    <footer class="card-footer small hstack justify-content-between">
                        <span class="badge badge-color">${game.genre}</span>
                        <span class="badge badge-color">${game.platform}</span>
                    </footer>
                </div>
            </div>`;
        });

        document.getElementById('myRow').innerHTML = cartona;
    }

    displayGameDetails(game) {
        let cartona = `
            <div class="col-md-4">
                <img src="${game.thumbnail}" class="w-100" alt="image details" />
            </div>
            <div class="col-md-8 game-data">
                <h3>Title: ${game.title}</h3>
                <p>Category: <span class="badge text-bg-info"> ${game.genre}</span> </p>
                <p>Platform: <span class="badge text-bg-info"> ${game.platform}</span> </p>
                <p>Status: <span class="badge text-bg-info"> ${game.status}</span> </p>
                <p class="small">${game.description}</p>
                <a class="btn btn-outline-warning text-white" target="_blank" href="${game.game_url}">Show Game</a>
            </div>`;

            document.querySelector('.game').innerHTML = cartona;
            $('.layer-spinner').addClass('d-none')
            $('.game-details').removeClass('d-none')
            $('body').css('overflow','hidden')
            $('.game-details').css('overflow','auto')
            $('.fa-xmark').click(function(){
            $('.game-details').addClass('d-none')
            $('body').css('overflow','auto')
        })
        
    }
}
