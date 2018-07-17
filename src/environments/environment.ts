// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBGVK0zzYF_-WPCE2mQuLnt37nyF9SYc-w',
    authDomain: 'stripe-subscription.firebaseapp.com',
    databaseURL: 'https://stripe-subscription.firebaseio.com',
    projectId: 'stripe-subscription',
    storageBucket: 'stripe-subscription.appspot.com',
    messagingSenderId: '903735037504'
  },
  stripe: {
    pkId: 'pk_test_6MSg5YkO5Vv0WgEb6I24fq7A',
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
