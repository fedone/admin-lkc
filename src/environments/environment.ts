// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
   firebase: {
    apiKey: "AIzaSyBZLjO1z3cmykyqPCnAofpB0S_K0l3FdAs",
    authDomain: "lambrate-firebase-console.firebaseapp.com",
    databaseURL: "https://lambrate-firebase-console.firebaseio.com",
    projectId: "lambrate-firebase-console",
    storageBucket: "lambrate-firebase-console.appspot.com",
    messagingSenderId: "180088518330"
  }
};
