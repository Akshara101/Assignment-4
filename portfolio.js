window.addEventListener("load", () => {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {

        mainContent.style.display = 'block';
        loader.style.display = 'none';
    });
});
