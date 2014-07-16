interface sagesVm {
    sages: sage[];
    title: string;
}

(function () {
    'use strict';

    var controllerId = 'sages';

    angular.module('app').controller(controllerId,
        ['common', 'datacontext', sages]);

    function sages(common: common, datacontext: datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm: sagesVm = this;
        vm.sages = [];
        vm.title = 'Sages';

        activate();

        function activate() {
            common.activateController([getSages()], controllerId).then(() => log('Activated Sages View'));
        }

        function getSages() {
            return datacontext.sage.getAll().then(data => vm.sages = data);
        }
    }
})();
