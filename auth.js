var GoogleAuth; // Google Auth object.

function initClient() {
    gapi.client.init({
        'apiKey': 'AIzaSyBkd15kwevnsuIMktUsseBSp72L48zN3Kk',
        'clientId': '631106624759-n4q4eqavd2h4vqc1q9pbii2p8tvlrte7.apps.googleusercontent.com',
        'scope': 'https://www.googleapis.com/auth/spreadsheets.readonly',
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4']
    }).then(function () {
        GoogleAuth = gapi.auth2.getAuthInstance();
        // Listen for sign-in state changes.
        GoogleAuth.isSignedIn.listen(updateSigninStatus);
    });
}

function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        console.log("Signed In");
        // Perform API call to fetch data from Sheets
    } else {
        console.log("Not Signed In");
        // Handle not signed in
    }
}

function handleAuthClick() {
    if (GoogleAuth.isSignedIn.get()) {
        GoogleAuth.signOut();
    } else {
        GoogleAuth.signIn();
    }
}

// Load the API client and auth library
gapi.load('client:auth2', initClient);
