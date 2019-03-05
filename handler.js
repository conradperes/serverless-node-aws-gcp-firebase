'use strict';
const firebase = require("firebase-admin");

firebase.initializeApp({
  credential: firebase.credential.cert(require('./credentials.json')),
  databaseURL: 'https://fir-7550d.firebaseio.com'
});

exports.create = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false
  const database = firebase.database()
  const ref = database.ref('/messages')
  const message = JSON.parse(event.body)
  ref.push(message)
    .then(() => callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message
      })
    }))
    .catch(callback)
}

exports.list = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false

  const database = firebase.database()
  const ref = database.ref('/messages')

  ref.once('value')
  .then(snapshot => {
    const messages =[]

    snapshot.forEach(child => messages.push(Object.assign({
      id: child.key
    },child.val())))
    
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(messages)
    })
  })
  .catch(callback)
}
