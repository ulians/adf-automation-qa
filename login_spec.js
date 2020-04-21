var LoginPage = require('../pages/login_page')

describe('Login Page tests', function() {
var loginPage

    beforeEach(function () {
        loginPage = new LoginPage()
        browser.ignoreSynchronization = true
        browser.get('http://qaexercise.envalfresco.com/login')
        browser.sleep(5000)
    })

    afterEach(function () {

    })

    it('should check that login', function() {
		//Navigate to http://qaexercise.envalfresco.com/login
		//Insert Username and Password
		//Username : guest@example.com
		//Password : Password
		//Click Login
		//browser.get("http://qaexercise.envalfresco.com/login")
        expect(loginPage.usernameFld.getText()).toEqual('')
        expect(loginPage.passwordFld.getText()).toEqual('')
		loginPage.usernameFld.sendKeys('guest@example.com')
		loginPage.passwordFld.sendKeys('Password')
		loginPage.loginBtn.click()
    })
})