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
        sectionsColor: ['#fffff1', 'grey', '#212427'],
    });
})