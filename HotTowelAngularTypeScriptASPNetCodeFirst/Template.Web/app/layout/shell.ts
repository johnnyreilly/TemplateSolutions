module controllers {

    "use strict";

    interface spinnerToggleEvent extends ng.IAngularEvent {
        show: boolean;
    }

    class Shell {

        busyMessage: string;
        isBusy: boolean;
        logSuccess: (message: string, data?: Object, showToast?: boolean) => void;
        spinnerOptions: SpinnerOptions;
        urlSidebar: string;
        urlTopNav: string;

        static $inject = ["$rootScope", "common", "config"];
        constructor(
            private $rootScope: ng.IRootScopeService,
            private common: common,
            private config: config
            ) {

            this.logSuccess = common.logger.getLogFn(controllerId, "success");
            this.busyMessage = "Please wait ...";
            this.isBusy = true;
            this.spinnerOptions = {
                radius: 40,
                lines: 7,
                length: 0,
                width: 30,
                speed: 1.7,
                corners: 1.0,
                trail: 100,
                color: "#F58A00"
            };
            this.urlSidebar = "/app/layout/sidebar.html?v=" + config.version;
            this.urlTopNav = "/app/layout/topnav.html?v=" + config.version;

            this.wireUpEventListeners();
            this.activate();
        }

        // Prototype methods

        activate() {
            this.common.activateController([], controllerId)
                .then(() => {
                    this.logSuccess("Proverb v" + this.config.version + " loaded!", null, true);
                });
        }

        wireUpEventListeners() {

            this.$rootScope.$on("$routeChangeStart",
                (event, next, current) => { this.toggleSpinner(true); });

            this.$rootScope.$on(this.config.events.controllerActivateSuccess,
                (event, data: { controllerId: string }) => {
                    // Deactivate spinner as long as the controller that has been activated is not the shell
                    if (data.controllerId !== controllerId) {
                        this.toggleSpinner(false);
                    }
                });

            this.$rootScope.$on(this.config.events.spinnerToggle,
                (data: spinnerToggleEvent) => { this.toggleSpinner(data.show); });
        }

        toggleSpinner(onOrOff: boolean) {
            this.isBusy = onOrOff;
        }
    }

    var controllerId = "shell";
    angular.module("app").controller(controllerId, Shell);
}
