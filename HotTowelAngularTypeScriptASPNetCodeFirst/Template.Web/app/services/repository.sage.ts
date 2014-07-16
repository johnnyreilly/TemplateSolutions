interface sage {
    id: number;
    name: string;
    username: string;
    email: string;
}

interface repositorySage {
    getById: (id: number) => ng.IPromise<sage>;
    getAll: () => ng.IPromise<sage[]>;
}

(function () {
    "use strict";

    var serviceId = "repository.sage";
    angular.module("app").factory(serviceId, ["$http", "common", repositorySage]);

    function repositorySage($http: ng.IHttpService, common: common) {

        var log = common.logger.getLogFn(serviceId);
        var rootUrl = "/api/";

        var service: repositorySage = {
            getById: getById,
            getAll: getAll
        };

        return service;


        function getById(id: number) {
            return $http.get<sage>(rootUrl + "sage/" + id).then(response => {
                var sage = response.data;
                log("Sage [" + sage.id + "] loaded");
                return sage;
            });
        }

        function getAll() {
            return $http.get<sage[]>(rootUrl + "sage").then(response => {
                var sages = response.data;
                log(sages.length + " Sages loaded");
                return sages;
            });
        }
    }
})();