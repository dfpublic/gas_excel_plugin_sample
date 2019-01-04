var ACTIVE_SHEET = SpreadsheetApp.getActiveSheet();
function doGet(request) {
    return HtmlService.createTemplateFromFile('pages/index/main.html')
        .evaluate();
  }
function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename)
        .getContent();
}