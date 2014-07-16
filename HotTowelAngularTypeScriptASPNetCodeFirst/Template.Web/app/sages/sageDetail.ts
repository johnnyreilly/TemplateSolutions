"use strict";

module controllers {

    interface sageDetailRouteParams extends ng.route.IRouteParamsService {
        id: number;
    }

    class SageDetail {

        log: (message: string, data?: Object, showToast?: boolean) => void;
        sage: sage;
        title: string;

        static $inject = ["$routeParams", "common", "datacontext"];
        constructor(
            private $routeParams: sageDetailRouteParams,
            private common: common,
            private datacontext: datacontext
            ) {

            this.sage = undefined;
            this.title = "Sage Details";

            var getLogFn = common.logger.getLogFn;
            this.log = getLogFn(controllerId);

            this.activate();
        }

        // Prototype methods

        activate() {
            var id = this.$routeParams.id;
            var dataPromises: ng.IPromise<any>[] = [this.getSage(id)];

            this.common.activateController(dataPromises, controllerId)
                .then(() => {
                    this.log("Activated Sage Details View");
                    this.title = "Sage Details: " + this.sage.name;
                });
        }

        getSage(id: number) {
            return this.datacontext.sage.getById(id, true).then(data => this.sage = data);
        }
    }

    var controllerId = "sageDetail";
    angular.module("app").controller(controllerId, SageDetail);
}
