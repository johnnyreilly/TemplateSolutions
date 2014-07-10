"use strict";
var app;
(function (app) {
    (function (controllers) {
        var controllerId = "proverbs";

        var Proverbs = (function () {
            function Proverbs($q, common, datacontext) {
                var _this = this;
                this.$q = $q;
                this.common = common;
                this.datacontext = datacontext;
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
            Proverbs.prototype.activate = function () {
                var _this = this;
                var dataPromises = [this.getProverbs(), this.getSages()];

                var combinerPromise = this.$q.all(dataPromises).then(function (eventArgs) {
                    var sageDictionary = {};
                    _this.sages.forEach(function (sage) {
                        return sageDictionary[sage.id] = sage;
                    });

                    _this.proverbs.forEach(function (proverb) {
                        return proverb.user = sageDictionary[proverb.userId];
                    });
                });

                this.common.activateController([combinerPromise], controllerId).then(function () {
                    return _this.log("Activated Proverbs View");
                });
            };

            Proverbs.prototype.getProverbs = function () {
                var _this = this;
                return this.datacontext.getProverbs().then(function (data) {
                    return _this.proverbs = data;
                });
            };

            Proverbs.prototype.getSages = function () {
                var _this = this;
                return this.datacontext.getSages().then(function (data) {
                    return _this.sages = data;
                });
            };
            Proverbs.$inject = ["$q", "common", "datacontext"];
            return Proverbs;
        })();

        angular.module("app").controller(controllerId, Proverbs);
    })(app.controllers || (app.controllers = {}));
    var controllers = app.controllers;
})(app || (app = {}));
/*
interface proverbsVm {
bySelectedSage: (proverb) => boolean;
proverbs: proverb[];
selectedSage: sage;
sages: sage[];
title: string;
}
(function () {
'use strict';
var controllerId = 'proverbs';
angular.module('app').controller(controllerId,
['$q', 'common', 'datacontext', proverbs]);
function proverbs($q: ng.IQService, common: common, datacontext: datacontext) {
var getLogFn = common.logger.getLogFn;
var log = getLogFn(controllerId);
var vm: proverbsVm = this;
vm.bySelectedSage = bySelectedSage;
vm.proverbs = [];
vm.sages = [];
vm.selectedSage = undefined;
vm.title = 'Proverbs';
activate();
function activate() {
var dataPromises: ng.IPromise<any>[] = [getProverbs(), getSages()];
var combinerPromise = $q.all(dataPromises).then((eventArgs) => {
var sageDictionary: { [id: number]: sage } = {};
vm.sages.forEach(sage => sageDictionary[sage.id] = sage);
vm.proverbs.forEach(proverb => proverb.user = sageDictionary[proverb.userId]);
});
common.activateController([combinerPromise], controllerId)
.then(() => log('Activated Proverbs View'));
}
function bySelectedSage(proverb: proverb) {
if (!vm.selectedSage) { return true; }
return proverb.user === vm.selectedSage
}
function getProverbs() {
return datacontext.getProverbs().then(data => vm.proverbs = data);
}
function getSages() {
return datacontext.getSages().then(data => vm.sages = data);
}
}
})();
*/
//# sourceMappingURL=proverbs.js.map
