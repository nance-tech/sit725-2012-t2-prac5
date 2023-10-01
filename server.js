let express = require('express');
const http = require("http");
const { Server } = require("socket.io");
const router = require('./routers/routers');
require('./dbConnection');

let app = express();
let port = process.env.port || 5000;
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.get('/', function (req, res) {
    res.render('index.html');
});

app.use("/api", router)

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    setInterval(() => {
        socket.emit('number', parseInt(Math.random() * 10));
    }, 1000);
});


server.listen(port, () => {
    console.log('server started');
});