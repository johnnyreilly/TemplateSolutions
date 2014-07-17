var controllers;
(function (controllers) {
    "use strict";

    var Proverbs = (function () {
        function Proverbs($q, common, datacontext) {
            var _this = this;
            this.$q = $q;
            this.common = common;
            this.datacontext = datacontext;
            // Instance methods
            this.bySelectedSage = function (proverb) {
                if (!_this.selectedSage) {
                    return true;
                }
                return proverb.user === _this.selectedSage;
            };
            this.proverbs = [];
            this.sages = [];
            this.selectedSage = undefined;
            this.title = "Proverbs";

            var getLogFn = common.logger.getLogFn;
            this.log = getLogFn(controllerId);

            this.activate();
        }
        // Prototype methods
        Proverbs.prototype.activate = function () {
            var _this = this;
            var dataPromises = [this.getProverbs(), this.getSages()];
            var combinerPromise = this.$q.all(dataPromises).then(function () {
                return _this.combineData();
            });

            this.common.activateController([combinerPromise], controllerId).then(function () {
                return _this.log("Activated Proverbs View");
            });
        };

        Proverbs.prototype.getProverbs = function () {
            var _this = this;
            return this.datacontext.proverb.getAll().then(function (data) {
                return _this.proverbs = data;
            });
        };

        Proverbs.prototype.getSages = function () {
            var _this = this;
            return this.datacontext.sage.getAll().then(function (data) {
                return _this.sages = data;
            });
        };

        Proverbs.prototype.combineData = function () {
            var sageDictionary = {};
            this.sages.forEach(function (sage) {
                return sageDictionary[sage.id] = sage;
            });

            this.proverbs.forEach(function (proverb) {
                return proverb.user = sageDictionary[proverb.userId];
            });
        };
        Proverbs.$inject = ["$q", "common", "datacontext"];
        return Proverbs;
    })();

    var controllerId = "proverbs";
    angular.module("app").controller(controllerId, Proverbs);
})(controllers || (controllers = {}));
//# sourceMappingURL=proverbs.js.map
