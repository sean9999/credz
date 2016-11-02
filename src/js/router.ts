let view;

switch(location.pathname) {

    case '/':
    view = {
        src: './components/dashboard/index.html'
    };
    break;

    case '/users':
    view = {
        src: './components/users/index.html'
    };
    break;

    default:
    view = {
        src: './components/splash.html'
    };
    break;

}

export default () => {



};