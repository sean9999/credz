import { handleAnchors } from './decorate-links';

import { dog } from '../components/dogs/dogs';

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
