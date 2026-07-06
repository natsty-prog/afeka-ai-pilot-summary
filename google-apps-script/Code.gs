// יש להדביק את הקוד הזה בעורך ה-Apps Script המחובר לגיליון האקסל (ראו README.md).

const HEADERS = [
  "תאריך שליחה",
  "שם פרטי ומשפחה",
  "בית ספר יחידה",
  "בית ספר יחידה - אחר",
  "השתתפות בפיילוט",
  "היגד מתאים",
  "היגד מתאים - אחר",
  "היגד1_כלים בקורסים",
  "היגד2_שימושיים",
  "היגד3_עמיתים",
  "היגד4_הצטרפות",
  "היגד5_התנסות בכיתה",
  "בחירת היחידה וההתנסות",
  "שינוי אופן ההערכה",
  "צורך נוסף",
];

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }

  const data = JSON.parse(e.postData.contents);
  const row = HEADERS.map((header) => data[header] || "");
  sheet.appendRow(row);

  return ContentService.createTextOutput(
    JSON.stringify({ result: "success" })
  ).setMimeType(ContentService.MimeType.JSON);
}
