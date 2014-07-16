(function () {
    "use strict";

    var serviceId = "repository.proverb";
    angular.module("app").factory(serviceId, ["$http", "common", repositoryProverb]);

    function repositoryProverb($http, common) {
        var log = common.logger.getLogFn(serviceId);
        var rootUrl = "/api/";

        var service = {
            getAll: getAll
        };

        return service;

        function getAll() {
            return $http.get(rootUrl + "proverb").then(function (response) {
                var proverbs = response.data;
                log(proverbs.length + " Proverbs loaded");
                return proverbs;
            });
        }
    }
})();
//# sourceMappingURL=repository.proverb.js.map
