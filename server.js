const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://odilboooy10:iGPnQF9hDo7nHiSF@cluster0.qm7g9fm.mongodb.net/Reja";

mongodb.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}, (err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connection Succeed");
        module.exports = client;
        
        const app = require("./app");
        const server = http.createServer(app);
let PORT = 8006;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
});
}
});
