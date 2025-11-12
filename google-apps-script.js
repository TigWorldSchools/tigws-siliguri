/**
 * Google Apps Script for TIGWS Application Form
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a new Google Sheet
 * 2. Go to Extensions > Apps Script
 * 3. Replace the default code with this script
 * 4. Save and deploy as web app
 * 5. Copy the deployment URL and update googleSheets.js
 * 
 * SHEET HEADERS (Row 1):
 * Timestamp | Parent Name | Student Name | Phone | Email | Grade | City | Source
 */

function doPost(e) {
  try {
    // Replace 'YOUR_SHEET_ID' with your actual Google Sheet ID
    const SHEET_ID = '1nvh3yJ35QmfcjNjuC6aIQy-6JQA0eug7UsGh5_t9d-k';
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    // Parse the JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Create IST timestamp
    const now = new Date();
    const istTime = new Date(now.getTime() + (5.5 * 60 * 60 * 1000)); // Add 5.5 hours for IST
    const readableTimestamp = istTime.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
    
    // Prepare the row data
    const rowData = [
      readableTimestamp,
      data.parentName || '',
      data.studentName || '',
      data.phone || '',
      data.email || '',
      data.grade || '',
      data.city || '',
      data.source || 'TIGWS Application Form'
    ];
    
    // Add the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Data saved successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ message: 'TIGWS Application Form Handler is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}