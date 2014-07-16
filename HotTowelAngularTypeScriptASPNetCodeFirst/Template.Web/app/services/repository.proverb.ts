interface proverb {
    id: number;
    userId: number;
    user: sage;
    text: string;
}

interface repositoryProverb {
    getAll: () => ng.IPromise<proverb[]>;
}

(function () {
    "use strict";

    var serviceId = "repository.proverb";
    angular.module("app").factory(serviceId, ["$http", "common", "config", repositoryProverb]);

    function repositoryProverb($http: ng.IHttpService, common: common, config: config) {

        var log = common.logger.getLogFn(serviceId);
        var rootUrl = config.remoteServiceRoot;

        var service: repositoryProverb = {
            getAll: getAll
        };

        return service;

        function getAll() {
            return $http.get<proverb[]>(rootUrl + "proverb").then(response => {
                var proverbs = response.data;
                log(proverbs.length + " Proverbs loaded");
                return proverbs;
            });
        }
    }
})();