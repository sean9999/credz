
import { handleAnchors } from 'docorate-links.ts';

import dog from '../components/dogs/dogs.js';

const init = () => {
	handleAnchors();
    dog();
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
