angular.module('resume', ['ui.router'])

    .config(function($stateProvider) {
        let about = {
            name: 'about',
            url: '/about',
            templateUrl: ''
        }

        let skills = {
            name: 'skills',
            url: '/skills',
            templateUrl: ''
        }

        let pf = {
            name: 'portfolio',
            url: '/portfolio',
            templateUrl: ''
        }

        let exp = {
            name: 'experience',
            url: '/exp',
            templateUrl: ''
        }

        let contactForm = {
            name: 'contact form',
            url: '/contact',
            templateUrl: ''
        }

        $stateProvider.state(helloState);
        $stateProvider.state(aboutState);
    });
    