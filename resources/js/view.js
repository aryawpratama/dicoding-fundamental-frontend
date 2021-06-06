import { country } from "./controller.js";
import { home } from "./controller.js";
import $ from "jquery";
const view = () => {
    let width = window.innerWidth;
    $(window).resize(function() {
        width = window.innerWidth;
        if (width > 550) {
            $(".menu").removeClass("down")
        }
    });
    $("#home").on("click", function() {
        console.log("home");
        $(".option").removeClass("active");
        $("#home").addClass("active");
        if (width < 550) {
            $(this).parent().toggleClass("down")
        }
        home();
    });
    $("#country").on("click", function() {
        console.log("country");
        $(".option").removeClass("active");
        $("#country").addClass("active");
        if (width < 550) {
            $(this).parent().toggleClass("down")
        }
        country();
    });
    $(".bar").on("click", function() {
        $(".menu").toggleClass("down");

    });
}
export default view;