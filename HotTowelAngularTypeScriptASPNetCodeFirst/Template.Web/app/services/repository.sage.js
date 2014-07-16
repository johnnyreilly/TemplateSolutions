(function () {
    "use strict";

    var serviceId = "repository.sage";
    angular.module("app").factory(serviceId, ["$http", "common", "config", repositorySage]);

    function repositorySage($http, common, config) {
        var log = common.logger.getLogFn(serviceId);
        var rootUrl = config.remoteServiceRoot;
        var cache = {};

        var service = {
            getById: getById,
            getAll: getAll
        };

        return service;

        function getById(id, forceRemote) {
            var sage;
            if (!forceRemote) {
                sage = cache[id];
                if (sage) {
                    return common.$q.when(sage);
                }
            }

            return $http.get(rootUrl + "sage/" + id).then(function (response) {
                sage = response.data;
                cache[sage.id] = sage;
                log("Sage [" + sage.id + "] loaded");
                return sage;
            });
        }

        function getAll() {
            return $http.get(rootUrl + "sage").then(function (response) {
                var sages = response.data;
                log(sages.length + " Sages loaded");
                return sages;
            });
        }
    }
})();
//# sourceMappingURL=repository.sage.js.map
