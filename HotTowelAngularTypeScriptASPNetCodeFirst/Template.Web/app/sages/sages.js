(function () {
    "use strict";

    var controllerId = "sages";

    angular.module("app").controller(controllerId, ["common", "datacontext", sages]);

    function sages(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.sages = [];
        vm.title = "Sages";

        activate();

        function activate() {
            common.activateController([getSages()], controllerId).then(function () {
                return log("Activated Sages View");
            });
        }

        function getSages() {
            return datacontext.sage.getAll().then(function (data) {
                return vm.sages = data;
            });
        }
    }
})();
//# sourceMappingURL=sages.js.map
