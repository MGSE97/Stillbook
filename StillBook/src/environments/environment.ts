// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCtjFz3mPKruxjoKPlcueaMdWBxbxXPLOc',
    authDomain: 'stillbook-e404.firebaseapp.com',
    databaseURL: 'https://stillbook-e404.firebaseio.com',
    projectId: 'stillbook-e404',
    storageBucket: 'stillbook-e404.appspot.com',
    messagingSenderId: '698491580010'
  }
};
