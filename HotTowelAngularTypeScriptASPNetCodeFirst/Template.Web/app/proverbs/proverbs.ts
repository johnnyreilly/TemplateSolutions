"use strict";

module controllers {

    class Proverbs {

        log: (message: string, data?: Object, showToast?: boolean) => void;
        proverbs: proverb[];
        selectedSage: sage;
        sages: sage[];
        title: string;

        static $inject = ["$q", "common", "datacontext"];
        constructor(
            private $q: ng.IQService,
            private common: common,
            private datacontext: datacontext
            ) {

            this.proverbs = [];
            this.sages = [];
            this.selectedSage = undefined;
            this.title = "Proverbs";

            var getLogFn = common.logger.getLogFn;
            this.log = getLogFn(controllerId);

            this.activate();
        }

        // Prototype methods

        activate() {
            var dataPromises: ng.IPromise<any>[] = [this.getProverbs(), this.getSages()];
            var combinerPromise = this.$q.all(dataPromises).then(() => this.combineData());

            this.common.activateController([combinerPromise], controllerId)
                .then(() => this.log("Activated Proverbs View"));
        }

        getProverbs() {
            return this.datacontext.proverb.getAll().then(data => this.proverbs = data);
        }

        getSages() {
            return this.datacontext.sage.getAll().then(data => this.sages = data);
        }

        combineData() {
            var sageDictionary: { [id: number]: sage } = {};
            this.sages.forEach(sage => sageDictionary[sage.id] = sage);

            this.proverbs.forEach(proverb => proverb.user = sageDictionary[proverb.userId]);
        }

        // Instance methods

        bySelectedSage = (proverb: proverb) => {
            if (!this.selectedSage) { return true; }
            return proverb.user === this.selectedSage
        }
    }

    var controllerId = "proverbs";
    angular.module("app").controller(controllerId, Proverbs);
}
