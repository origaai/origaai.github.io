"use strict";
! function () {
    var n = !1,
        e = document.getElementById("navbar-toggle"),
        t = document.getElementById("nav-menu"),
        a = "in";
    e.addEventListener("click", function () {
        n ? (t.className = t.className.split(" ").filter(function (n) {
            return n !== a
        }).join(" "), n = !1) : (t.className = [t.className, a].join(" "), n = !0)
    })
}(),
    function () {
        var n = document.getElementById("navbar"),
            e = "faded-out";

        function t() {
            var t = window.scrollY;
            t < 20 && -1 === n.className.indexOf(e) ? n.className = [n.className, e].join(" ") : t >= 20 && n.className.indexOf(e) > -1 && (n.className = n.className.split(" ").filter(a).join(" "))
        }

        function a(n) {
            return n !== e
        }
        window.addEventListener ? window.addEventListener("scroll", t) : window.attachEvent && window.attachEvent("scroll", t), t()
    }();