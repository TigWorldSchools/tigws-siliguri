# Google Sheets Integration Setup

## Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "TIGWS Application Forms"
4. In Row 1, add these headers:
   ```
   Timestamp | Parent Name | Student Name | Phone | Email | Grade | City | Source
   ```

## Step 2: Set up Google Apps Script

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete the default `myFunction()` code
3. Copy the code from `google-apps-script.js` file
4. Paste it into the Apps Script editor
5. Save the project (Ctrl+S)
6. Name it "TIGWS Form Handler"

## Step 3: Deploy as Web App

1. Click **Deploy > New deployment**
2. Choose type: **Web app**
3. Description: "TIGWS Application Form Handler"
4. Execute as: **Me**
5. Who has access: **Anyone**
6. Click **Deploy**
7. Copy the **Web app URL** (it looks like: `https://script.google.com/macros/s/SCRIPT_ID/exec`)

## Step 4: Update the React App

1. Open `src/utils/googleSheets.js`
2. Replace `YOUR_SCRIPT_ID` with your actual script URL:
   ```javascript
   const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec';
   ```

## Step 5: Test the Integration

1. Submit a test form on your website
2. Check your Google Sheet to see if the data appears
3. If there are issues, check the Apps Script logs: **Executions** tab

## Security Notes

- The web app is set to "Anyone" access for form submissions
- No sensitive data should be collected beyond what's in the form
- Consider adding additional validation in the Apps Script if needed

## Troubleshooting

- **CORS errors**: Normal with `no-cors` mode, form should still work
- **No data appearing**: Check Apps Script deployment settings
- **Permission errors**: Ensure the script has permission to access the sheet