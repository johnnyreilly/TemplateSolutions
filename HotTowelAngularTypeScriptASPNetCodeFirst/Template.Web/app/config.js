(function (appConfig) {
    "use strict";

    var app = angular.module("app");

    // Configure Toastr
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = "toast-bottom-right";

    var events = {
        controllerActivateSuccess: "controller.activateSuccess",
        spinnerToggle: "spinner.toggle"
    };

    var config = {
        appErrorPrefix: "[Error] ",
        docTitle: "Proverb: ",
        events: events,
        remoteServiceRoot: appConfig.remoteServiceRoot,
        version: appConfig.version
    };

    app.value("config", config);

    app.config([
        "$logProvider", function ($logProvider) {
            // turn debugging off/on (no info or warn)
            if ($logProvider.debugEnabled) {
                $logProvider.debugEnabled(appConfig.inDebug);
            }
        }]);

    //#region Configure the common services via commonConfig
    app.config([
        "commonConfigProvider", function (cfg) {
            cfg.config.controllerActivateSuccessEvent = config.events.controllerActivateSuccess;
            cfg.config.spinnerToggleEvent = config.events.spinnerToggle;
            cfg.config.remoteServiceRoot = config.remoteServiceRoot;
            cfg.config.version = config.version;
        }]);
    //#endregion
})(window["appConfig"]);
//# sourceMappingURL=config.js.map
