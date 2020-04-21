var SettingsPage = require('../pages/settings_page')

describe('Settings Page tests', function() {
var settingsPage

    beforeEach(function () {
        settingsPage = new SettingsPage()
        browser.ignoreSynchronization = true
        browser.get('http://qaexercise.envalfresco.com/settings')
        browser.sleep(5000)
    })

    afterEach(function () {

    })

    it('should check that settings page provider options can be changed', function() {
        settingsPage.providerOptions.click()
        
        expect(settingsPage.bpmProvider.isDisplayed()).toBe(true)
        expect(settingsPage.ecmProvider.isDisplayed()).toBe(true)
		expect(settingsPage.allProvider.isDisplayed()).toBe(true)
        expect(settingsPage.applyBtn.isDisplayed()).toBe(true)

        settingsPage.ecmProvider.click()
		settingsPage.applyBtn.click()
    })
})