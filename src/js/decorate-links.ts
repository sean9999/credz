const handleAnchors = () => {
    /**
     * onhover styles get copied to all links pointing to same resource
     **/
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
    });
};