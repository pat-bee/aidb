function initClient() {
    gapi.client.init({
        'apiKey': 'AIzaSyBkd15kwevnsuIMktUsseBSp72L48zN3Kk',
        'clientId': 'AIzaSyBkd15kwevnsuIMktUsseBSp72L48zN3Kk',
        'scope': 'https://www.googleapis.com/auth/spreadsheets.readonly',
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4']
    }).then(function () {
        GoogleAuth = gapi.auth2.getAuthInstance();
        // Listen for sign-in state changes.
        GoogleAuth.isSignedIn.listen(updateSigninStatus);
    });
}

function fetchSheetData() {
    if (GoogleAuth.isSignedIn.get()) {
        gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: '1Y3MW_-ryZjv2JNBtGBs2BK-tASocBKUB0IjgLVb57CQ',
            range: 'MASTER!F:L',
        }).then(function(response) {
            var range = response.result;
            if (range.values.length > 0) {
                // Process and display the data
                for (i = 0; i < range.values.length; i++) {
                    var row = range.values[i];
                    // Assume row[0] is Name, row[1] is URL, row[2] is Description
                    // Add your code to display this information
                }
            } else {
              console.log('No data found.');
            }
        }, function(response) {
            console.log('Error: ' + response.result.error.message);
        });
    } else {
        console.log("User not signed in.");
    }
}
