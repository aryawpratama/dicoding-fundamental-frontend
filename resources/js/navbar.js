class Navbar extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `<div id="logo" class="logo">
            <img src="http://swarapendidikan.um.ac.id/wp-content/uploads/2020/11/virus.png" alt="covid">
            <h1>Covid-19</h1>
            <h2>Information Center</h2>
        </div>
        <div class="bar">
        <div></div>
        <div></div>
        <div></div>
        </div>
        <div value="home" class="menu">
            <div id="home" class="option active">
                <p>Home</p>
            </div>
            <div id="country" value="country" class="option">
                <p>Negara</p>
            </div>
        </div>`
    }
}
customElements.define("nav-bar", Navbar);