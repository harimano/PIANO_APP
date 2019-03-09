var main = {}
var scripts = ['arm', 'piano', 'notes', 'translators/translator', 'translators/retranslator', 'db/music_list', 'DOM/window_fnc', 'DOM/index']
var keys = ['arm', 'piano', 'notes', 'trans', 'retrans', 'mus_sheet', 'window_fnc', null]
var append = [['random', 'select', 'drag'], null, null, null, null, null, ['win_fnc', 'rec'], null]
for (var i = 0; i < scripts.length; i++) {
  if (keys[i]) {
    global[keys[i]] = require(`${__dirname}/${scripts[i]}`)
    main[keys[i]] = global[keys[i]]
  } else {
    require(`${__dirname}/${scripts[i]}.js`)
  }
  if (append[i]) {
    for (var j = 0; j < append[i].length; j++) {
      global[append[i][j]] = main[keys[i]][append[i][j]]
      main[append[i][j]] = main[keys[i]][append[i][j]]
    }
  }
}
var play = module.exports = function (arg) {
  main.piano.stp = !0
  document.getElementById("s1").value = arg
  main.piano.recplay()
}
module.exports.keyListener = function (event) {
  var string = String.fromCharCode(event.keyCode).toLowerCase()
  if (event.shiftKey) string = string.toUpperCase()
  play(string)
}
for (var i in main) {
  module.exports[i] = main[i]
}
