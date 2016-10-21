"use strict";

const handleAnchors = () => {
	const anchors = document.querySelectorAll('a[href]');
	Array.from(anchors).forEach(anchor => {
		anchor.addEventListener('mouseover', ev => {
			Array.from(anchors).forEach(a => {
				if (a.href === ev.target.href) {
					a.classList.add('hovering');
				} else {
					a.classList.remove('hovering');
				}
			});
		});
		anchor.addEventListener('mouseout', ev => {
			Array.from(anchors).forEach(a => {
				a.classList.remove('hovering');
			});
		});
		anchor.addEventListener('click', ev => {
			ev.preventDefault();
			loadFragment(ev.target.href);
		});
	});
};

const loadFragment = (href) => {
	let frag = href.split('/').pop().split('.').shift();
	alert(frag);
};

const init = () => {
	console.log('running init');
	handleAnchors();
};

document.addEventListener('DOMContentLoaded',init);
