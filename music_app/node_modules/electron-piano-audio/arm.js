module.exports = {}
function getById(n) {
    return document.getElementById(n)
}
function random(n, t) {
    return t == undefined && (t = n, n = 0), Math.floor(Math.random() * (t - n + 1)) + n
}
module.exports.random = random

function select(n, t, i) {
    if (t == i && t == undefined) return [getById(n).selectionStart, getById(n).selectionEnd];
    t == -1 && i == undefined && (t = getById(n).value.length, i = t);
    i == undefined && t != undefined && (i = getById(n).value.length);
    t > i && (t = t - i, i = t + i, t = i - t);
    getById(n).selectionStart = t;
    getById(n).selectionEnd = i;
    getById(n).focus()
}
module.exports.select = select
drag = function () {
    return {
        startMoving: function (n, t) {
            n = n || window.event;
            var f = n.clientX,
                e = n.clientY,
                u = getById(t),
                i = u.style.top,
                r = u.style.left;
            i = i.replace("px", "");
            r = r.replace("px", "");
            diffX = f - r;
            diffY = e - i;
            document.onmousemove = function (n) {
                n = n || window.event;
                var i = n.clientX,
                    r = n.clientY,
                    u = i - diffX,
                    f = r - diffY;
                drag.move(t, u, f)
            }
        },
        stopMoving: function (n) {
            var t = getById(n);
            document.onmousemove = function () { };
        },
        move: function (n, t, i) {
            var r = getById(n);
            r.style.left = t + "px";
            r.style.top = i + "px"
        }
    }
}();
module.exports.drag = drag
