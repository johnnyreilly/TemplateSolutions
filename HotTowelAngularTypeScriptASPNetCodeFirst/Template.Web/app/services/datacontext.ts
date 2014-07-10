interface person {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

interface proverb {
    id: number;
    userId: number;
    user: sage;
    text: string;
}

interface sage {
    id: number;
    name: string;
    username: string;
    email: string;
}

interface datacontext {
    getMessageCount: () => ng.IPromise<number>;
    getPeople: () => ng.IPromise<person[]>;
    getProverbs: () => ng.IPromise<proverb[]>;
    getSages: () => ng.IPromise<sage[]>;
}

(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('app').factory(serviceId, ['$http', 'common', datacontext]);

    function datacontext($http: ng.IHttpService, common: common) {

        var $q = common.$q;
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(serviceId);
        var logError = getLogFn(serviceId, 'error');
        var logSuccess = getLogFn(serviceId, 'success');
        var rootUrl = "/api/";

        var service: datacontext = {
            getMessageCount: getMessageCount,
            getPeople: getPeople,
            getProverbs: getProverbs,
            getSages: getSages
        };

        return service;


        function getMessageCount() { return $q.when(72); }

        function getPeople() {
            var people = [
                { firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida' },
                { firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California' },
                { firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York' },
                { firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota' },
                { firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota' },
                { firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina' },
                { firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming' }
            ];
            return $q.when(people);
        }

        function getProverbs() {
            return $http.get<proverb[]>(rootUrl + "proverbs").then(response => {
                var proverbs = response.data;
                log(proverbs.length + " Proverbs loaded");
                return proverbs;
            });
        }

        function getSages() {
            return $http.get<sage[]>(rootUrl + "sages").then(response => {
                var sages = response.data;
                log(sages.length + " Sages loaded");
                return sages;
            });
        }
    }
})();