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
//# sourceMappingURL=proverbs.js.map
