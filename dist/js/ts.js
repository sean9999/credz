(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
function dog() {
    console.log('w00f!');
}
exports.dog = dog;

},{}],2:[function(require,module,exports){
"use strict";
function handleAnchors() {
    /**
     * onhover styles get copied to all links pointing to same resource
     **/
    const anchors = document.querySelectorAll('a[href]');
    Array.from(anchors).forEach(anchor => {
        anchor.addEventListener('mouseover', ev => {
            Array.from(anchors).forEach(a => {
                let thisAnchor = ev.target;
                if (a.getAttribute('href') === thisAnchor.href) {
                    a.classList.add('hovering');
                }
                else {
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
}
exports.handleAnchors = handleAnchors;
;

},{}],3:[function(require,module,exports){
"use strict";
const decorate_links_1 = require('./decorate-links');
const dogs_1 = require('../components/dogs/dogs');
const init = () => {
    decorate_links_1.handleAnchors();
    dogs_1.dog();
};
switch (document.readyState) {
    case 'interactive':
    case 'complete':
        init();
        break;
    case 'loading':
        window.addEventListener('DOMContentReady', init);
        break;
}

},{"../components/dogs/dogs":1,"./decorate-links":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29tcG9uZW50cy9kb2dzL2RvZ3MudHMiLCJzcmMvanMvZGVjb3JhdGUtbGlua3MudHMiLCJzcmMvanMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNBQTtJQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDekIsQ0FBQztBQUZlLFdBQUcsTUFFbEIsQ0FBQTs7OztBQ0ZEO0lBQ0k7O1FBRUk7SUFDSixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckQsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTTtRQUM5QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDbkMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDekIsSUFBSSxVQUFVLEdBQXNCLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0JBQzlDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQzdDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNoQyxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUNsQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN6QixDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNuQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBdEJlLHFCQUFhLGdCQXNCNUIsQ0FBQTtBQUFBLENBQUM7Ozs7QUN0QkYsaUNBQThCLGtCQUFrQixDQUFDLENBQUE7QUFFakQsdUJBQW9CLHlCQUF5QixDQUFDLENBQUE7QUFFOUMsTUFBTSxJQUFJLEdBQUc7SUFDWiw4QkFBYSxFQUFFLENBQUM7SUFDYixVQUFHLEVBQUUsQ0FBQztBQUNWLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQzFCLEtBQUssYUFBYSxDQUFDO0lBQ25CLEtBQUssVUFBVTtRQUNmLElBQUksRUFBRSxDQUFDO1FBQ1AsS0FBSyxDQUFDO0lBQ04sS0FBSyxTQUFTO1FBQ2QsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hELEtBQUssQ0FBQztBQUNWLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGZ1bmN0aW9uIGRvZygpe1xuICAgIGNvbnNvbGUubG9nKCd3MDBmIScpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUFuY2hvcnMoKXtcbiAgICAvKipcbiAgICAgKiBvbmhvdmVyIHN0eWxlcyBnZXQgY29waWVkIHRvIGFsbCBsaW5rcyBwb2ludGluZyB0byBzYW1lIHJlc291cmNlXG4gICAgICoqL1xuICAgIGNvbnN0IGFuY2hvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZdJyk7XG4gICAgQXJyYXkuZnJvbShhbmNob3JzKS5mb3JFYWNoKGFuY2hvciA9PiB7XG4gICAgICAgIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBldiA9PiB7XG4gICAgICAgICAgICBBcnJheS5mcm9tKGFuY2hvcnMpLmZvckVhY2goYSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRoaXNBbmNob3IgPSA8SFRNTEFuY2hvckVsZW1lbnQ+ZXYudGFyZ2V0O1xuICAgICAgICAgICAgICAgIGlmIChhLmdldEF0dHJpYnV0ZSgnaHJlZicpID09PSB0aGlzQW5jaG9yLmhyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgYS5jbGFzc0xpc3QuYWRkKCdob3ZlcmluZycpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGEuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXJpbmcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGV2ID0+IHtcbiAgICAgICAgICAgIEFycmF5LmZyb20oYW5jaG9ycykuZm9yRWFjaChhID0+IHtcbiAgICAgICAgICAgICAgICBhLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyaW5nJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuIiwiaW1wb3J0IHsgaGFuZGxlQW5jaG9ycyB9IGZyb20gJy4vZGVjb3JhdGUtbGlua3MnO1xuXG5pbXBvcnQgeyBkb2cgfSBmcm9tICcuLi9jb21wb25lbnRzL2RvZ3MvZG9ncyc7XG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG5cdGhhbmRsZUFuY2hvcnMoKTtcbiAgICBkb2coKTtcbn07XG5cbnN3aXRjaCAoZG9jdW1lbnQucmVhZHlTdGF0ZSkge1xuICAgIGNhc2UgJ2ludGVyYWN0aXZlJzpcbiAgICBjYXNlICdjb21wbGV0ZSc6XG4gICAgaW5pdCgpO1xuICAgIGJyZWFrO1xuICAgIGNhc2UgJ2xvYWRpbmcnOlxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50UmVhZHknLGluaXQpO1xuICAgIGJyZWFrO1xufVxuIl19
