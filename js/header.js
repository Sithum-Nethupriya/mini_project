


document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
 
    <header>
        <h1 id="banner">Los Angeles: Explore, Experience, Enjoy</h1>
        <div class="rflex">
            <a href="./index.html">Home</a>
            <a href="./gallery.html">Gallery</a>
            <a href="./weather.html">Weather</a>
            <a href="./bookhotel.html">Stay</a>
            <a href="./maps.html">Maps</a>
            <a href="./events.html">Events</a>
            <a href="./notice.html">Notices</a>
            <a href="./tourism.html">Tourism</a>
            <a href="./culture.html">Culture</a>
            <a href="./travel.html">Travel</a>
            <a href="./administration.html">Administration</a>
        </div>
    </header>
`;

const footerHTML = `
<footer>
    <div class="rflex">
        <a href="#">Website by : Sitham</a>
        <a href="#">⮝</a>
        <a href="./about.html">About</a>
    </div>
</footer>
`;

    
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  });