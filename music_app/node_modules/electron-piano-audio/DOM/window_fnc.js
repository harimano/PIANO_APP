function getById(n) {
    return document.getElementById(n)
}
﻿function Windows_FNC() {
    this.coos = ["0px", "5px"];
    this.close = function (n, t, i) {
        rec.exp();
        this.viewer(n, 1);
        this.stop();
        n == "recorder" && (getById("composition").value = "")
    };
    this.stop = function () {
        piano.stp = !0;
    };
    this.viewer = function (n, t) {
        var i = getById("win"),
            r = getById(n);
    };
    this.hider = function () {
    }
}

function Recorder() {
    this.tmp = "";
    var n = getById("s1");
    this.exp = function () {
        var n = getById("expert");
        n.checked ? (getById("hh_vis").style.visibility = "hidden", getById("hh_sep").style.visibility = "hidden", n.checked = !1) : (getById("hh_vis").style.visibility = "visible", getById("hh_sep").style.visibility = "visible", n.checked = !0)
    };
    this.btn = function (n) {
        var t = select("s1"),
            i = getById("s1");
        i.value = i.value.substring(0, t[0]) + n + i.value.substring(t[1]);
        select("s1", t[0] + 1, t[0] + 1)
    };
    this.erase = function () {
        var t = select("s1"),
            n = getById("s1");
        n.value = n.value.substring(0, t[0]) + n.value.substring(t[1])
    };
    this.copy = function () {
        var n = select("s1"),
            t = getById("s1");
        this.tmp = t.value.substring(n[0], n[1])
    };
    this.paste = function () {
        var n = select("s1"),
            t = getById("s1");
        t.value = t.value.substring(0, n[0]) + this.tmp + t.value.substring(n[1]);
        select("s1", n[0] + this.tmp.length, n[0] + this.tmp.length)
    };
    this.brackets = function (n) {
        var t = select("s1"),
            u = [
                ["[", "]"],
                ["{", "}"]
            ],
            i = getById("s1"),
            r;
        if (t[0] == t[1]) i.value = i.value.lastIndexOf(u[n][0]) != -1 && i.value.lastIndexOf(u[n][1], t[0]) > i.value.lastIndexOf(u[n][0], t[0]) || i.value.lastIndexOf(u[n][0], t[0]) == -1 ? i.value.substring(0, t[0]) + u[n][0] + i.value.substring(t[1]) : i.value.substring(0, t[0]) + u[n][1] + i.value.substring(t[1]), select("s1", t[1] + 1, t[1] + 1);
        else {
            for (r = 0; r < 2; r++) i.value = i.value.substring(0, t[r] + r) + u[n][r] + i.value.substring(t[r] + r);
            select("s1", t[1] + 2, t[1] + 2)
        }
    }
}
var win_fnc = new Windows_FNC,
    rec = new Recorder;
module.exports = {}
module.exports.win_fnc = win_fnc
module.exports.rec = rec
var audio = document.createElement("div")
audio.id = "audio"
audio.style.display = "none"
document.body.appendChild(audio)
var s1 = document.createElement("textarea")
s1.id = "s1"
s1.style.display = "none"
document.body.appendChild(s1)
