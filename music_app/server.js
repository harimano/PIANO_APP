
var express = require("express");
var path = require("path");
var app = express();
// var Tone = require("Tone");
var server =app.listen(8000);
var io = require('socket.io')(server);
// var synth = new tone.Synth().connect(gain);
// const synth = new Tone.AMSynth().toMaster()

app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("index");
})

io.on('connection', function (socket){//2
    console.log("new CLient is connected");//3
    // socket.emit('play');//4
    //      console.log("play");
    // socket.emit('end_play');
    

    socket.on('sound', function (data) { 
        console.log("listening"); 
        socket.broadcast.emit('trigger', data);
        console.log(data);
    });    

    socket.on('sound-off', function (data) {
        console.log('hmmm');
        socket.broadcast.emit('trigger-off', data);
        console.log(data);
    });


});

