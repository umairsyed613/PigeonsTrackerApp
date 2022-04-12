// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  bannerId: '',
  // api_token: 'AstraCS:YmpHJIlKpPZkiDEafvWjneiA:04b98311e3194ccfe1681788d20913a74b7be64ca431c03d31421142d50d40d8',
  // api_url: 'https://b2970e86-92d7-463c-b11f-7927d913cb3c-asia-south1.apps.astra.datastax.com/api/rest/v2/namespaces/pt/collections',
  firebaseConfig : {
    apiKey: "AIzaSyDEw6KUvtYDRaPpJ8VPuxVVwYXMdeldcsg",
    authDomain: "pigeonstracker.firebaseapp.com",
    projectId: "pigeonstracker",
    storageBucket: "pigeonstracker.appspot.com",
    messagingSenderId: "32162898136",
    appId: "1:32162898136:web:eec61f5d693df36981f7ad",
    measurementId: "G-ZLVXK36PWP"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
