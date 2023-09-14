window.addEventListener('load', function () {

    history.replaceState( //this removes the #anchor from the URL on page load so the user can navigate using buttons again!
        '',
        document.title,
        window.location.origin + window.location.pathname + window.location.search
    );

    new fullpage('#fullpage', { //FullPage.js Setup
        licenseKey: 'gplv3-license', //use only with open source projects.
        autoScrolling:true,
        scrollHorizontally: true,
        anchors:['top', 'middle', 'bottom'],
        sectionsColor: ['#fffff1', '#54b3d6', '#5472d6'],
    });


    //animations on view

    const gameTile0 = this.document.getElementsByClassName("gameTile")[0];
    const observer0 = new IntersectionObserver(entries => {
        gameTile0.classList.toggle('slideRight', entries[0].isIntersecting);
    });
    observer0.observe(gameTile0);

    const gameTile1 = this.document.getElementsByClassName("gameTile")[1];
    const observer1 = new IntersectionObserver(entries => {
        gameTile1.classList.toggle('slideUpRight', entries[0].isIntersecting);
    });
    observer1.observe(gameTile1);

    const gameTile2 = this.document.getElementsByClassName("gameTile")[2];
    const observer2 = new IntersectionObserver(entries => {
        gameTile2.classList.toggle('slideLeft', entries[0].isIntersecting);
    });
    observer2.observe(gameTile2);

    const gameTile3 = this.document.getElementsByClassName("gameTile")[3];
    const observer3 = new IntersectionObserver(entries => {
        gameTile3.classList.toggle('slideUpLeft', entries[0].isIntersecting);
    });
    observer3.observe(gameTile3);
})