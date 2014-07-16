(function () {
    "use strict";

    var serviceId = "repository.sage";
    angular.module("app").factory(serviceId, ["$http", "common", repositorySage]);

    function repositorySage($http, common) {
        var log = common.logger.getLogFn(serviceId);
        var rootUrl = "/api/";

        var service = {
            getById: getById,
            getAll: getAll
        };

        return service;

        function getById(id) {
            return $http.get(rootUrl + "sage/" + id).then(function (response) {
                var sage = response.data;
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
