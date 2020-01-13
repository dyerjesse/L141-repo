"use strict";
exports.__esModule = true;
var fs = require("fs");
var child_process_1 = require("child_process");
function rmdir(path) {
    try {
        var files = fs.readdirSync(path);
    }
    catch (e) {
        return;
    }
    if (files.length > 0) {
        for (var i = 0; i < files.length; i++) {
            var filePath = path + '/' + files[i];
            if (fs.statSync(filePath).isFile()) {
                fs.unlinkSync(filePath);
            }
            else {
                rmdir(filePath);
            }
        }
    }
    fs.rmdirSync(path);
}
function mkdir(path) {
    fs.mkdirSync(path);
}
function cldir(path) {
    rmdir(path);
    mkdir(path);
}
function exec(cmd) {
    child_process_1.execSync(cmd, undefined);
}
function clean() {
    console.log("Cleaning...");
    cldir("./pub");
    cldir("./lib");
}
function compile() {
    console.log("Compiling...");
    exec("tsc");
}
function bundle(debug) {
    console.log("Bundling...");
    exec("cp ./build/src/lib/* ./lib");
    exec("cp ./src/pub/style.css ./pub");
    if (debug) {
        exec("browserify ./build/src/pub/viewer.js -s viewer > ./pub/viewer.js");
    }
    else {
        exec("browserify ./build/src/pub/viewer.js -s viewer | uglifyjs --screw-ie8 > ./pub/viewer.js");
    }
}
function build(debug) {
    var t0 = Date.now();
    clean();
    compile();
    bundle(debug);
    console.log("Build completed in " + (Date.now() - t0) + " ms");
}
build(true);
