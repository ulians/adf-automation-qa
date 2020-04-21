var SettingsPage = function () {}

SettingsPage.prototype = Object.create({}, {
        //Access to http://qaexercise.envalfresco.com/settings
		//Change Provider to ECM
        //Click Apply
        
        providerOptions: {get: function() {return element(by.css('#adf-provider-selector > div > div.mat-select-value'))}},
		bpmProvider: {get: function () { return element(by.css('#mat-option-0 > span')) } },
		ecmProvider: {get: function () { return element(by.css('#mat-option-1 > span')) } },
		allProvider: {get: function () { return element(by.css('#mat-option-2 > span')) } },
		applyBtn: {get: function () { return element(by.css('#host-button > span')) } }
})

module.exports = SettingsPage