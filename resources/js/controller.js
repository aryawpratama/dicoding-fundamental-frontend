import fetchCountry from './fetch.js'
import $ from "jquery";
const home = () => {
    $(".container").html(`
    <div class="banner">
    <div class="title">
    <h1>Covid-19</h1>
    <h1>Information Center</h1>
    </div>
    <div class="desc">
<p>Covid-19 Information Center merupakan pusat informasi</p>
                <p>mengenai Covid-19 di seluruh dunia</p>
    </div>       
    </div>`);
}
const country = () => {
    $.ajax({
        type: "GET",
        url: "https://covid19.mathdro.id/api/countries/",
        dataType: "json",
        success: function(data) {
            const countries = data.countries;
            let li = ``
            $.each(countries, function(i, item) {
                li += `<li class="li" id="${countries[i].iso2}">${countries[i].name}</li>`
            })
            $(".container").html(`
            <h1 class="head-info">Pilih negara untuk mendapatkan informasi</h1>
            <div class="render">
            <ul class="columns" data-columns="3">
            ${li}
            </ul>
            </div>
            `);
            $(".li").on("click", function() {
                let id = $(this).attr("id");
                let name = $(this).text();
                if (id == "undefined") {
                    alert("Data tidak tersedia");
                } else {
                    fetchCountry(id, name);
                }
            });
        }
    });

}
const contact = () => {
    $(".container").html(`<h1>Contact</h1>`);

}
export { country, home, contact };