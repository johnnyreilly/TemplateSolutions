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
