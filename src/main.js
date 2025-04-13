document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabs = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (event) {
            const tabTarget = event.target.dataset.tabButton;
            const tabToShow = document.querySelector(`[data-tab-id="${tabTarget}"]`);

            escondeTodasAbas();
            tabToShow.classList.add('shows__list--is-active');

            removeBotaoAtivo();
            event.target.classList.add('shows__tabs__button--is-active');
        });
    }

    function removeBotaoAtivo() {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('shows__tabs__button--is-active');
        }
    }

    function escondeTodasAbas() {
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('shows__list--is-active');
        }
    }
});
