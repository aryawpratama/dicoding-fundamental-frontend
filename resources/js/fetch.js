import { country } from './controller.js';
import $ from "jquery";
const fetchCountry = (id, name) => {

    $.ajax({
        type: "GET",
        url: `https://covid19.mathdro.id/api/countries/${id}`,
        dataType: "json",
        success: (data) => {
            const dataConfirmed = data.confirmed.value;
            const dataDeath = data.deaths.value;
            const dataRecovered = data.recovered.value;
            const total = dataDeath + dataRecovered + dataConfirmed;

            const death = `${dataDeath / total * 100}%`
            const confirmed = `${dataConfirmed / total * 100}%`
            const recovered = `${dataRecovered / total * 100}%`
            setHtml(death, confirmed, recovered, dataDeath, dataRecovered, dataConfirmed, name)
        },
        error: (data) => {
            alert(`Data tidak tersedia
            Error : ${data.status}`);
        }
    });
}

const setHtml = (...params) => {
    $(".container").html(`
    <div class="inner-country">
        <h1 class="country-title">${params[6]}</h1>
        <div class="graph">
            <div title="${params[0]}" class="death" style="width:${params[0]};"}></div>
            <div title="${params[1]}" class="confirmed" style="width:${params[1]};"></div>
            <div title="${params[2]}" class="recovered" style="width:${params[2]};"></div>
        </div>
            <div class="legend">
            <div class="flex">
            <span class="dea"></span>
            <p>Meninggal</p>
            </div>
            <div class="flex">
                <span class="conf"></span>
                <p>Terkonfirmasi</p>
                </div>
                 <div class="flex">
                <span class="rec"></span>
                <p>Sembuh</p>
                     </div>
            </div>
            <div class="data">
                <h5>Data</h5>
                <p>Meninggal ${params[3]}</p>
                <p>Terkonfirmasi : ${params[5]}</p>
                <p>Sembuh : ${params[4]}</p>
            </div>
                    <button class="back-country">Kembali</button>
    </div>
    `);
    $(".back-country").on("click", function() {
        country();
    });
}
export default fetchCountry;