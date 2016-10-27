"use strict";

self.onmessage = (msg) => {
    let r = msg.data;
    r.push('x');
    postMessage(r);
};
