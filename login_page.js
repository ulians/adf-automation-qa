var LoginPage = function () {}

LoginPage.prototype = Object.create({}, {
    usernameFld: {get: function () { return element(by.id('username')) } },
    passwordFld: {get: function () { return element(by.id('password')) } },
    loginBtn: {get: function () { return element(by.id('login-button')) } },

})

module.exports = LoginPage