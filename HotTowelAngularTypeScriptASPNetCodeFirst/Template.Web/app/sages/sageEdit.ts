module controllers {

    "use strict";

    interface sageEditRouteParams extends ng.route.IRouteParamsService {
        id: number;
    }

    interface sageEditScope extends ng.IScope {
        form: ng.IFormController;
    }

    class SageEdit {

        log: loggerFunction;
        sage: sage;
        title: string;

        private _hasChanges: boolean;
        private _isSaving: boolean;

        static $inject = ["$routeParams", "$scope", "common", "datacontext"];
        constructor(
            private $routeParams: sageEditRouteParams,
            private $scope: sageEditScope,
            private common: common,
            private datacontext: datacontext
            ) {

            this.log = common.logger.getLogFn(controllerId);
            this.sage = undefined;
            this.title = "Sage Edit";

            this._hasChanges = false;
            this._isSaving = false;

            this.wireUpWatches();

            this.activate();
        }

        // Prototype methods

        wireUpWatches() {
            this.$scope.$watchCollection(() => this.sage, (newSage: sage, oldSage: sage) => {
                if (newSage && oldSage && !angular.equals(newSage, oldSage)) {
                    this._hasChanges = true;
                }
            });
        }

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
            return this.datacontext.sage.getById(id).then(data => {
                this.sage = data;
                this._hasChanges = false;
            });
        }

        // Properties

        get hasChanges(): boolean {
            return this._hasChanges;
        }

        get canSave(): boolean {
            return this._hasChanges && !this._isSaving && this.$scope.form.$valid;
        }
    }

    var controllerId = "sageEdit";
    angular.module("app").controller(controllerId, SageEdit);
}
