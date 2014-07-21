var controllers;
(function (controllers) {
    "use strict";

    var SageEdit = (function () {
        function SageEdit($routeParams, $scope, common, datacontext) {
            this.$routeParams = $routeParams;
            this.$scope = $scope;
            this.common = common;
            this.datacontext = datacontext;
            this.log = common.logger.getLogFn(controllerId);
            this.sage = undefined;
            this.title = "Sage Edit";

            this._isSaving = false;

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
                _this.sage = data;
            });
        };

        Object.defineProperty(SageEdit.prototype, "hasChanges", {
            // Properties
            get: function () {
                return this.$scope.form.$dirty;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(SageEdit.prototype, "canSave", {
            get: function () {
                return this.hasChanges && !this._isSaving && this.$scope.form.$valid;
            },
            enumerable: true,
            configurable: true
        });
        SageEdit.$inject = ["$routeParams", "$scope", "common", "datacontext"];
        return SageEdit;
    })();

    var controllerId = "sageEdit";
    angular.module("app").controller(controllerId, SageEdit);
})(controllers || (controllers = {}));
//# sourceMappingURL=sageEdit.js.map
