module controllers {

    "use strict";

    interface sageEditRouteParams extends ng.route.IRouteParamsService {
        id: number;
    }

    class SageEdit {

        log: loggerFunction;
        sage: sage;
        title: string;

        static $inject = ["$routeParams", "$scope", "common", "datacontext"];
        constructor(
            private $routeParams: sageEditRouteParams,
            private $scope: ng.IScope,
            private common: common,
            private datacontext: datacontext
            ) {

            this.sage = undefined;
            this.title = "Sage Edit";

            this.log = common.logger.getLogFn(controllerId);

            this.activate();
        }

        // Prototype methods

        activate() {
            var id = this.$routeParams.id;
            var dataPromises: ng.IPromise<any>[] = [this.getSage(id)];

            this.common.activateController(dataPromises, controllerId)
                .then(() => {
                    this.log("Activated Sage Edit View");
                    this.title = "Sage Edit: " + this.sage.name;
                });
        }

        getSage(id: number) {
            return this.datacontext.sage.getById(id).then(data => this.sage = data);
        }
    }

    var controllerId = "sageEdit";
    angular.module("app").controller(controllerId, SageEdit);
}
