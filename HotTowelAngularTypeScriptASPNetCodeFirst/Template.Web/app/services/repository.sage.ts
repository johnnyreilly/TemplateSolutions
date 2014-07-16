interface sage {
    id: number;
    name: string;
    username: string;
    email: string;
}

interface repositorySage {
    getById: (id: number, forceRemote?: boolean) => ng.IPromise<sage>;
    getAll: () => ng.IPromise<sage[]>;
}

(function () {
    "use strict";

    var serviceId = "repository.sage";
    angular.module("app").factory(serviceId, ["$http", "common", "config", repositorySage]);

    function repositorySage($http: ng.IHttpService, common: common, config: config) {

        var log = common.logger.getLogFn(serviceId);
        var rootUrl = config.remoteServiceRoot;
        var cache: { [id: number]: sage } = {};

        var service: repositorySage = {
            getById: getById,
            getAll: getAll
        };

        return service;

        function getById(id: number, forceRemote?: boolean) {

            var sage: sage;
            if (!forceRemote) {
                sage = cache[id];
                if (sage) {
                    return common.$q.when(sage);
                }
            }

            return $http.get<sage>(rootUrl + "sage/" + id).then(response => {
                sage = response.data;
                cache[sage.id] = sage;
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