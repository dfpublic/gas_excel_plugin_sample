function onOpen() {
  var UI = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  var AccountingMenu = UI.createMenu('Accounting');
  AccountingMenu
    .addItem('Reports', 'showReportsSidebar')
    .addSeparator()
    .addItem('Install', 'install')
    .addSeparator()
    .addSubMenu(UI.createMenu('Sub-menu')
      .addItem('Settings', 'showSettings'))
    .addToUi();
}

function showReportsSidebar() {
  var html = HtmlService.createTemplateFromFile('sheets/sidebar.html')
    .evaluate()
    .setTitle('Reports')
    .setWidth(300);
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
    .showSidebar(html);
}

function showSettings() {
  var UI = SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
  UI.alert('You clicked the second menu item!');
}

function install() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var UI = SpreadsheetApp.getUi();
  var system_sheet = spreadsheet.getSheetByName('system');
  if (system_sheet == null) {
    installer.install();
  } else {
    var selection = UI.alert('Confirm installation', 'A system sheet was already found. Installation will delete and reinitialize this. Do you want to proceed?', UI.ButtonSet.YES_NO);
    switch (selection) {
      case UI.Button.YES:
        var installer = new SystemInstaller();
        installer.uninstall();
        installer.install();
        break;
      case UI.Button.NO:
        UI.alert('no');
        break;
      case UI.Button.CLOSE:
        UI.alert('close');
        break;
      default:
        UI.alert('unknown');
        break;
    }

  }
}