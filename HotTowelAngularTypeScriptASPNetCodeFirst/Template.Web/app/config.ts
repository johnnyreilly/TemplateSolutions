interface config {
    appErrorPrefix: string;
    docTitle: string;
    events: {
        controllerActivateSuccess: string;
        spinnerToggle: string;
    };
    imageSettings?: {
        imageBasePath: string;
        unknownPersonImageSource: string;
    }
    remoteServiceRoot: string;
    version: string;
}

interface commonConfig {
    config: {
        controllerActivateSuccessEvent: string;
        spinnerToggleEvent: string;
    };
}

(function () {
    'use strict';

    var app = angular.module('app');

    // Configure Toastr
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = "toast-bottom-right";

    // For use with the HotTowel-Angular-Breeze add-on that uses Breeze
    var remoteServiceRoot = "/api/";

    var events = {
        controllerActivateSuccess: 'controller.activateSuccess',
        spinnerToggle: 'spinner.toggle'
    };

    var config: config = {
        appErrorPrefix: '[Error] ', //Configure the exceptionHandler decorator
        docTitle: 'Proverb: ',
        events: events,
        remoteServiceRoot: remoteServiceRoot,
        version: '1.0.0'
    };

    app.value('config', config);
    
    app.config(['$logProvider', function ($logProvider: ng.ILogProvider) {
        // turn debugging off/on (no info or warn)
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
    }]);
    
    //#region Configure the common services via commonConfig
    app.config(['commonConfigProvider', function (cfg: commonConfig) {
        cfg.config.controllerActivateSuccessEvent = config.events.controllerActivateSuccess;
        cfg.config.spinnerToggleEvent = config.events.spinnerToggle;
    }]);
    //#endregion
})();