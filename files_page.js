var FilesPage = function () {}

FilesPage.prototype = Object.create({}, {
    contentServicesBtn: {get: function () { return element(by.css('body > app-root > div > ng-component > adf-sidenav-layout > div > adf-layout-container > mat-sidenav-container > mat-sidenav > div > mat-nav-list > mat-list-item.app-sidenav-link.mat-list-item.mat-list-item-avatar.mat-list-item-with-avatar.ng-star-inserted.app-sidenav-link--active')) } },
    addFolderBtn: {get: function () { return element(by.css('#document-list-container > adf-upload-drag-area > div > adf-toolbar > mat-toolbar > div > button:nth-child(2)')) } },
    newFolderNameFld: {get: function () { return element(by.id('adf-folder-name-input')) } },
    createFolderBtn: {get: function () { return element(by.id('adf-folder-create-button')) } },
    recentFilesBtn: {get: function() { return element(by.css('#mat-expansion-panel-header-0 > span > mat-panel-title'))}}
})

module.exports = FilesPage