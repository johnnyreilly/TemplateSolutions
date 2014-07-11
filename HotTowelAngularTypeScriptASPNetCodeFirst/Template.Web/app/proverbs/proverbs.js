(function () {
    'use strict';

    var controllerId = 'proverbs';

    angular.module('app').controller(controllerId, ['$q', 'common', 'datacontext', proverbs]);

    function proverbs($q, common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.bySelectedSage = bySelectedSage;
        vm.proverbs = [];
        vm.sages = [];
        vm.selectedSage = undefined;
        vm.title = 'Proverbs';

        activate();

        function activate() {
            var dataPromises = [getProverbs(), getSages()];

            var combinerPromise = $q.all(dataPromises).then(function (eventArgs) {
                var sageDictionary = {};
                vm.sages.forEach(function (sage) {
                    return sageDictionary[sage.id] = sage;
                });

                vm.proverbs.forEach(function (proverb) {
                    return proverb.user = sageDictionary[proverb.userId];
                });
            });

            common.activateController([combinerPromise], controllerId).then(function () {
                return log('Activated Proverbs View');
            });
        }

        function bySelectedSage(proverb) {
            if (!vm.selectedSage) {
                return true;
            }
            return proverb.user === vm.selectedSage;
        }

        function getProverbs() {
            return datacontext.getProverbs().then(function (data) {
                return vm.proverbs = data;
            });
        }

        function getSages() {
            return datacontext.getSages().then(function (data) {
                return vm.sages = data;
            });
        }
    }
})();
/*
"use strict";
module controllers {
var controllerId = "proverbs";
class Proverbs {
log: (message: string, data?: Object, showToast?: boolean) => void;
proverbs: proverb[];
selectedSage: sage;
sages: sage[];
title: string;
static $inject = ["$q", "common", "datacontext"];
constructor(
private $q: ng.IQService,
private common: common,
private datacontext: datacontext) {
this.proverbs = [];
this.sages = [];
this.selectedSage = undefined;
this.title = "Proverbs";
var getLogFn = common.logger.getLogFn;
this.log = getLogFn(controllerId);
this.activate();
}
activate() {
var dataPromises: ng.IPromise<any>[] = [this.getProverbs(), this.getSages()];
var combinerPromise = this.$q.all(dataPromises).then((eventArgs) => {
var sageDictionary: { [id: number]: sage } = {};
this.sages.forEach(sage => sageDictionary[sage.id] = sage);
this.proverbs.forEach(proverb => proverb.user = sageDictionary[proverb.userId]);
});
this.common.activateController([combinerPromise], controllerId)
.then(() => this.log("Activated Proverbs View"));
}
bySelectedSage = (proverb: proverb) => {
if (!this.selectedSage) { return true; }
return proverb.user === this.selectedSage
}
private getProverbs() {
return this.datacontext.getProverbs().then(data => this.proverbs = data);
}
private getSages() {
return this.datacontext.getSages().then(data => this.sages = data);
}
}
angular.module("app").controller(controllerId, Proverbs);
}
*/
//# sourceMappingURL=proverbs.js.map
