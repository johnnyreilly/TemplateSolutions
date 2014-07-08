interface proverbsVm {
    proverbs: proverb[];
    title: string;
}

(function () {
    'use strict';

    var controllerId = 'proverbs';

    angular.module('app').controller(controllerId,
        ['common', 'datacontext', proverbs]);

    function proverbs(common: common, datacontext: datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm: proverbsVm = this;
        vm.proverbs = [];
        vm.title = 'Proverbs';

        activate();

        function activate() {
            common.activateController([getProverbs()], controllerId).then(() => log('Activated Proverbs View'));
        }

        function getProverbs() {
            return datacontext.getProverbs().then(data => vm.proverbs = data);
        }
    }
})();
