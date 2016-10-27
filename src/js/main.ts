"use strict";

import { * } from 'docrate-links.ts';

const init = () => {
	handleAnchors();
};

switch (document.readyState) {
    case 'interactive':
    case 'complete':
    init();
    break;
    case 'loading':
    window.addEventListener('DOMContentReady',init);
    break;
}
