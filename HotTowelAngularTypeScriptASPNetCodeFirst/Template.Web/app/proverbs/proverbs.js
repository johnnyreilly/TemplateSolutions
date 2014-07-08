(function () {
    'use strict';

    var controllerId = 'proverbs';

    angular.module('app').controller(controllerId, ['common', 'datacontext', proverbs]);

    function proverbs(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.proverbs = [];
        vm.title = 'Proverbs';

        activate();

        function activate() {
            common.activateController([getProverbs()], controllerId).then(function () {
                return log('Activated Proverbs View');
            });
        }

        function getProverbs() {
            return datacontext.getProverbs().then(function (data) {
                return vm.proverbs = data;
            });
        }
    }
})();
//# sourceMappingURL=proverbs.js.map
