---
title: Using Firebase Admin SDK with Netlify Lambda.
slug: using-firebase-admin-sdk-with-netlify-lambda
date: 2019-10-11T14:00:00.000+00:00
description: this will be a description
tags:
- firebase
- lambda

---
I've been recently leaning into spinning up applications with Nuxt and Firebase. These are pretty straight forward applications that handle user authentication and creating/reading of data. However, I've recently come into a case where I needed to send out a request to a third party service and write that back to the database. You could do this within Firebase Functions, but it would require you to be signed up onto one of the paid plans - which I'm not quite ready for yet.

Enter Netlify Lambda Functions, on the free plan you're given a generous amount of resources and it allows you to send requests to third parties. This article is designed to run through a very basic setup of a Netlify Function and how to communicate with Firebase.

## 1. Structure

We're going to use a very barebones project structure for this demo that has no frontend and only really is used to deploy the functions. These files can easily be transferred into your working directory and the setup would remain the same.

The structure will look a little something like the following:

    .config
    functions
    	test
    		test.js
    		package.json
    .gitignore
    netlify.toml
    package.json

To get started, create a new directory somewhere on your local machine. Inside of the directory we'll need to create a couple of folders.

First, the functions folder which is where any function you wish to run on Netlify will be housed.

     mkdir functions

Next, let us make a directory for the function, the directory should be named whatever you want the endpoint URL to be accessed from. For this demo, we'll name this **test**. We'll also require two files, a JavaScript file named the same as the folder (which will be what Netlify tries to access) and a package.json to keep all of our requirements contained.

Create the folder and files like so:

    mkdir functions/test
    cd functions/test
    touch package.json
    touch test.js

Update your package.json with the following:

    {
      "name": "functions",
      "version": "1.0.0",
      "description": "",
      "main": "test.js",
      "scripts": {},
      "author": ""
    }

This is the basic scaffolding you'll need for any function your try and spin up (where you will use npm packages). If you don't plan to use any npm packages, you can not add a package.json.

## 2. Working with Firebase Admin

Now for the fun part, getting out function to communicate with the Firebase Admin SDK. The following example will feature a very basic creation of a document to show how everything would work, in your actual function you'll probably take this further.

In our `functions/test` add in the Firebase Admin SDK, like so:

    yarn add firebase-admin

Which should add the following to your `package.json`

```json
"dependencies": {
  "firebase-admin": "^8.6.0"
}
```

We can then call this in our `test.js` file by declaring it at the top of the document

    const admin = require('firebase-admin')

#### Firebase Admin Authentication

To actually connect to Firebase we'll need to authenticate the account, this will require the generation of an authentication file from Firebase. This file should be kept **private** and never uploaded to a public Git repository.

To generate the authentication file, follow these steps:

1. Log in to the Google Console at [https://console.firebase.google.com](https://console.firebase.google.com "https://console.firebase.google.com")
2. Click into the project you want to use the Admin SDK with, or create a new project.
3. Head to the project settings.
4. Click the "**Service Accounts**" tab.
5. Click **Firebase Admin SDK**.
6. On this tab, you'll see "Admin SDK Configuration snippet". Check the **node.js** option and click "**Generate new private key**"
7. A modal should pop up, click **"generate key"** again and this will download a JSON file.
8. Move the JSON file into your project structure in the `functions/test` folder and rename it to `serviceAccountKey.json`.
9. Update your `.gitignore` if you have one to ensure that this file does not get tracked.

#### Writing our Script

To bring everything together and integrate the Firebase Admin SDK with our script we'll need to set up a few more things.

Firstly, we need to configure the script to authenticate the Admin SDK with our firebase credentials. To do this update our `test.js` file with the following:

    const admin = require('firebase-admin')
    const serviceAccount = require('./serviceAccountKey.json') // Update this to your file
    
    // Initialise the admin with the credentials
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: 'https://<YOUR-APP-URL>.firebaseio.com'
    })

Update `<YOUR-APP-URL>` with the actual URL of your app. If you don't know this it can be seen in the Firebase Console.

Next, we'll write a small script that adds a new record to the Firestore database and returns a message once complete. To ensure that data is processed before the response is returned we'll take advantage of `async/await`. See the example below:

```js
// Set up an instance of the DB
const db = admin.firestore()

// exports.handler is required by netlify to process.
exports.handler = async (event, context, callback) => {
  // wait for the record to be added
  await db.collection('COLLECTION').add({
    name: 'Test'
  })

  // Return a callback witha 200 response and a message.
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      data: `Test data added successfully`
    })
  })
}
```

Don't forget to update the `COLLECTION` placeholder with the name of the collection you want to add a record to, if you are purely testing you can just use `test` here.

## 3. Deployment Configuration

When we deploy the code the Netlify it will currently have no idea that any of this exists and therefore we'll need to create a `netlify.toml` file to tell Netlify what to do without directory.

```toml
[build]
command = "yarn functions"
functions = "functions"
```

The above tells Netlify that the `functions` folder contains all of our functions and that we want to run the `yarn functions` command on initial deploy, which we will set up now.

In our root directory, create or edit your `package.json` file with the following information.

```json
{
  "dependencies": {
    "netlify-lambda": "^1.6.3"
  },
  "scripts": {
    "functions": "cd functions/test && yarn install"
  }
}
```

Firstly, this tells Netlify we'll be using Lambda. Secondly, since we have opted for putting a package.json in each function separately, we'll need to make sure it installs everything and the `node_modules` directory exists on the server. The `functions` script does this for our example. It'll `cd` into the directory and install everything required before Netlify pushing it to the Lambda stack.

#### Environment Variables

Firebase Admin SDK requires Node v10 for it to work on Netlify Lambda, to ensure that we are using Node V10+ we need to add an environment variable under our admin panel.

## Deploy

Commit everything to your Git repository and push everything to a Netlify site. If ev

Now.. if you deploy said