---
title: 'Using Firebase Admin SDK with Netlify Lambda.'
slug: using-firebase-admin-sdk-with-netlify-lambda
date: 2019-10-11 14:00:00 +0000
description: this will be a description
tags:
- firebase
- lambda
---

I'm a huge fan of Netlify and I've been recently leaning into spinning up applications with Nuxt, Firebase and Netlify. However, I've always had the odd thing I've needed to spin a server up for that feels a waste, such as sending mail, taking stripe payments, etc.

I use Netlify Lambda functions because my use case doesn't justify the $25 fee for the upgrade to Firebase quite yet (as Firebase blocks external requests until you are on one paid plan). Netlify doesn't block outbound requests on the free plan, and for my use case, is quite generous.

First things first, let's setup what we need to get started with Firebase Admin SDK and Netlify Lambda.

Project Structure

```
.config
functions
	test
		test.js
		package.json
.gitignore
netlify.toml
package.json
```

## Create a Function

To keep things seperate and contained to each function, we're going to build our functions whilst utilising a seperate seperate `package.json` per each file. This may seem a little cumbersome if you have multiple functions but I believe a seperation to be a better practise in keeping the code relative to each element.

#### Setup

```
mkdir functions
mkdir functions/test
touch functions/test/package.json
touch functions/test/test.js

# Add firebase admin
cd functions/test
yarn add firebase-admin
```

Example package.json

```json
{
  "name": "functions",
  "version": "1.0.0",
  "description": "",
  "main": "test.js",
  "scripts": {},
  "author": "",
  "license": "ISC",
  "dependencies": {
    "firebase-admin": "^8.6.0"
  }
}

```

#### Firebase Admin Authentiation

Before we can actually use the Firebase Admin SDK we'll need to generate the authentication file which allows for us to authenticate our request

1. Login to google console
2. Generate a key
3. download
4. rename the file to something readable such as `serviceAccountKey.json`
5. add it into your functions/test folder.

#### Writing an Example Script

The following code below is a quick code which will add a new record with a randomly generated ID to a collection. 

```js
const admin = require('firebase-admin')
const serviceAccount = require('./serviceAccountKey.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://<YOUR-APP-URL>.firebaseio.com'
})

const db = admin.firestore()

exports.handler = async (event, context, callback) => {
  await db.collection('YOUR_COLLECTION_NAME').add({
    name: 'Test'
  })

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      data: `Test data added successfully`
    })
  })
}

```

Don't forget to update the "YOUR_COLLECTION_NAME" and "YOUR-APP-URL" placeholders in the file.



## Making sure things work when deployed

When we deploy the code the Netlify it will currently have no idea that any of this exists and therefore we'll ned to create a `netlify.toml` file to tell Netlify what to do with out directory. 

```toml
[build]
command = "yarn functions"
functions = "functions"
```

The above tells Netlify that the `functions` folder contains all of our functions and that we want to run the `yarn functions` command on initial deploy, which we will set up now. 

In our root directory, create or edit your `package.json` file with following information.

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

#### Environment Variables

Firebase Admin SDK requires Node v10 for it to work on Netlify Lambda, to ensure that we are using Node V10+ we need to add an environment variable under our admin panel.



## Deploy



Commit everything to your Git repository and push everything to a Netlify site. If ev

Now.. if you deploy said 