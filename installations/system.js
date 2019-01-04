/**
 * @class
 * Constructor for class for system installation
 */
function SystemInstaller(){
    this.spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    this.system_spreadsheet = this.spreadsheet.getSheetByName(SHEETS.system.name);
}
SystemInstaller.prototype.uninstall = function(){
    var selected_sheet = this.spreadsheet.getSheetByName(SHEETS.system.name);
    this.spreadsheet.deleteSheet(selected_sheet);
}
SystemInstaller.prototype.install = function(){
    this.spreadsheet.insertSheet(SHEETS.system.name);
    this.system_spreadsheet = this.spreadsheet.getSheetByName(SHEETS.system.name);
    var sheet = new GoogleSheet(this.spreadsheet, SHEETS.system.name, SHEETS.system.headers);
    sheet.appendObject({
        key: 'date', value: '=TODAY()'
    });
}