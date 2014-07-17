var controllers;
(function (controllers) {
    "use strict";

    var SageEdit = (function () {
        function SageEdit($routeParams, common, datacontext) {
            this.$routeParams = $routeParams;
            this.common = common;
            this.datacontext = datacontext;
            this.sage = undefined;
            this.title = "Sage Edit";

            var getLogFn = common.logger.getLogFn;
            this.log = getLogFn(controllerId);

            this.activate();
        }
        // Prototype methods
        SageEdit.prototype.activate = function () {
            var _this = this;
            var id = this.$routeParams.id;
            var dataPromises = [this.getSage(id)];

            this.common.activateController(dataPromises, controllerId).then(function () {
                _this.log("Activated Sage Edit View");
                _this.title = "Sage Edit: " + _this.sage.name;
            });
        };

        SageEdit.prototype.getSage = function (id) {
            var _this = this;
            return this.datacontext.sage.getById(id).then(function (data) {
                return _this.sage = data;
            });
        };
        SageEdit.$inject = ["$routeParams", "common", "datacontext"];
        return SageEdit;
    })();

    var controllerId = "sageEdit";
    angular.module("app").controller(controllerId, SageEdit);
})(controllers || (controllers = {}));
//# sourceMappingURL=sageEdit.js.map
