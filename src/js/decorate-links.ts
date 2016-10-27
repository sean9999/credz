export function handleAnchors(){
    /**
     * onhover styles get copied to all links pointing to same resource
     **/
    const anchors = document.querySelectorAll('a[href]');
    Array.from(anchors).forEach(anchor => {
        anchor.addEventListener('mouseover', ev => {
            Array.from(anchors).forEach(a => {
                let thisAnchor = <HTMLAnchorElement>ev.target;
                if (a.getAttribute('href') === thisAnchor.href) {
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
    });
};
