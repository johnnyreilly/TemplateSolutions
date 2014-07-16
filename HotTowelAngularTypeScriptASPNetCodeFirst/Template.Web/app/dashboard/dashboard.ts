interface dashboardVm {
    messageCount: number;
    news: {
        title: string;
        description: string;
    }
    people: sage[];
    title: string;
}

(function () {
    'use strict';
    var controllerId = 'dashboard';
    angular.module('app').controller(controllerId, ['common', 'datacontext', dashboard]);

    function dashboard(common: common, datacontext: datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm: dashboardVm = this;
        vm.news = {
            title: 'Proverb',
            description: 'The Wisdom of Socrates Aruldas (and The Team)'
        };
        vm.messageCount = 0;
        vm.people = [];
        vm.title = 'Dashboard';

        activate();

        function activate() {
            var promises: ng.IPromise<any>[] = [/*getMessageCount(), */getPeople()];
            common.activateController(promises, controllerId)
                .then(() => log('Activated Dashboard View'));
        }

        //function getMessageCount() {
        //    return datacontext.getMessageCount().then((data) => vm.messageCount = data);
        //}

        function getPeople() {
            return datacontext.sage.getAll().then((data) => vm.people = data);
        }
    }
})();