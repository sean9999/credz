"use strict";

self.onmessage = (msg) => {
    let r = msg.data;
    r.push('x');
    r.push('y');
    r.push('z');
    postMessage(r);
};
