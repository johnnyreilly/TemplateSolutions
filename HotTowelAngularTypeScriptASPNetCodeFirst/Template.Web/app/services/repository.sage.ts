interface sage {
    id: number;
    name: string;
    username: string;
    email: string;
}

interface repositorySage {
    getAll: () => ng.IPromise<sage[]>;
    getById: (id: number, forceRemote?: boolean) => ng.IPromise<sage>;
    save: (sage: sage) => ng.IPromise<sage>;
}

(function () {
    "use strict";

    var serviceId = "repository.sage";
    angular.module("app").factory(serviceId, ["$http", "common", "config", repositorySage]);

    function repositorySage($http: ng.IHttpService, common: common, config: config) {

        var log = common.logger.getLogFn(serviceId);
        var rootUrl = config.remoteServiceRoot + "sage";
        var cache: { [id: number]: sage } = {};

        var service: repositorySage = {
            getAll: getAll,
            getById: getById,
            save: save
        };

        return service;

        function getAll() {
            return $http.get<sage[]>(rootUrl).then(response => {
                var sages = response.data;
                log(sages.length + " Sages loaded");
                return sages;
            });
        }

        function getById(id: number, forceRemote?: boolean) {

            var sage: sage;
            if (!forceRemote) {
                sage = cache[id];
                if (sage) {
                    log("Sage " + sage.name + " [" + sage.id + "] loaded from cache");
                    return common.$q.when(sage);
                }
            }

            return $http.get<sage>(rootUrl + "/" + id).then(response => {
                sage = response.data;
                cache[sage.id] = sage;
                log("Sage " + sage.name + " [" + sage.id + "] loaded");
                return sage;
            });
        }

        function save(sage: sage) {
            return $http.post<sage>(rootUrl, sage).then(response => {
                sage = response.data;
                log("Sage " + sage.name + " [" + sage.id + "] saved");
                return sage;
            });
        }
    }
})();