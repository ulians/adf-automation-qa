var LoginPage = require('../pages/login_page')
var FilesPage = require('../pages/files_page')

describe('Files Page tests', function() {
var filesPage
var loginPage

    beforeEach(function () {
        filesPage = new FilesPage()
        loginPage = new LoginPage()
        browser.ignoreSynchronization = true
        browser.get('http://qaexercise.envalfresco.com/files')
        browser.sleep(5000)

        expect(loginPage.usernameFld.getText()).toEqual('')
        expect(loginPage.passwordFld.getText()).toEqual('')
		loginPage.usernameFld.sendKeys('guest@example.com')
		loginPage.passwordFld.sendKeys('Password')
        loginPage.loginBtn.click()
        
        browser.sleep(5000)
    })

    afterEach(function () {

    })

    it('should check that adding a new folder runs successfully', function() {

   		//Click on 'create new folder' icon.
		//New folder dialog is displayed.
		//Introduce your Github username (for example in my case) "magemello".
		//Name has been added.
		//Click on 'Create' button.
		//The dialog is closed. Folder with your Github username is created in the current folder.
        filesPage.contentServicesBtn.click()
		filesPage.addFolderBtn.click()
		filesPage.newFolderNameFld.sendKeys('ulians')
        filesPage.createFolderBtn.click()
        
		//Click on 'create new folder' icon.
		//New folder dialog is displayed.
		//Introduce your Github username (for example in my case) "magemello".
		//Name has been added.
		//Click on 'Create' button.
		//The dialog is not closed.
		//The message "There's already a folder with this name. Try a different name" is displayed.

		filesPage.addFolderBtn.click()
		filesPage.newFolderNameFld.sendKeys('ulians')
        filesPage.createFolderBtn.click()
        browser.sleep(1000)
        browser.waitForAngularEnabled(false);
        var EC = protractor.ExpectedConditions
        browser.wait(EC.alertIsPresent(), 5000)
        expect(browser.switchTo().alert().getText()).toEqual("There's already a folder with this name. Try a different name")
        browser.switchTo().alert().accept()
        browser.sleep(5000)

        //filesPage.recentFilesBtn.click()
		//Select the folder with your Github username
		//Open Options window (3 dots)
        //Click delete


    })
})