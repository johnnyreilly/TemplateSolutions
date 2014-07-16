(function () {
    'use strict';
    var controllerId = 'dashboard';
    angular.module('app').controller(controllerId, ['common', 'datacontext', dashboard]);

    function dashboard(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.news = {
            title: 'Proverb',
            description: 'The Wisdom of Socrates Aruldas (and The Team)'
        };
        vm.messageCount = 0;
        vm.people = [];
        vm.title = 'Dashboard';

        activate();

        function activate() {
            var promises = [getPeople()];
            common.activateController(promises, controllerId).then(function () {
                return log('Activated Dashboard View');
            });
        }

        //function getMessageCount() {
        //    return datacontext.getMessageCount().then((data) => vm.messageCount = data);
        //}
        function getPeople() {
            return datacontext.sage.getAll().then(function (data) {
                return vm.people = data;
            });
        }
    }
})();
//# sourceMappingURL=dashboard.js.map
