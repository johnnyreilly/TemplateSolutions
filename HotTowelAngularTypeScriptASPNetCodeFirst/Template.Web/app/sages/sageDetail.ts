﻿module controllers {

    "use strict";

    interface sageDetailRouteParams extends ng.route.IRouteParamsService {
        id: number;
    }

    class SageDetail {

        log: loggerFunction;
        sage: sage;
        title: string;

        static $inject = ["$location", "$routeParams", "common", "datacontext"];
        constructor(
            private $location: ng.ILocationService,
            private $routeParams: sageDetailRouteParams,
            private common: common,
            private datacontext: datacontext
            ) {

            this.sage = undefined;
            this.title = "Sage Details";

            this.log = common.logger.getLogFn(controllerId);

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

        gotoEdit() {
            this.$location.path("/sages/edit/" + this.sage.id);
        }
    }

    var controllerId = "sageDetail";
    angular.module("app").controller(controllerId, SageDetail);
}
