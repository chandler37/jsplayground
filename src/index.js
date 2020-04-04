var sha1Module = require("sha1");

export function adder(a, b) {
    return a + b + 1;
}

export function sha1(someBytes) {
    return sha1Module(someBytes);
}
