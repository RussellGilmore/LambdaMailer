'use strict';
const AWS = require('aws-sdk');
AWS.config.update({
    region: 'us-east-1'
});
const sqs = new AWS.SQS();
// Learn env variables or something for this. 
const QUEUE_URL = 'https://sqs.us-east-1.amazonaws.com/FILL_IN/MailQueue';
/**
 * @param {*} callback Returns error info back to caller.
 * @param {*} event Source JSON.
 * @param {*} context Current state of function execution. 
 */

function handler(event, context, callback) {
    //Mock source provides required email information. 
    var email = {
        Destination: event.destination,
        Title: event.title,
        Text: event.text,
        Sender: event.sender,
        Attachment: event.attachment
    };
    // Prepare SQS object. 
    var params = {
        MessageBody: JSON.stringify(email),
        QueueUrl: QUEUE_URL
    };
    // Pass params for send to SQS queue. 
    sqs.sendMessage(params, function (err, data) {
        if (err) {
            console.log(err, err.stack);
            callback(err);
        } else {
            context.done(data.Payload);
            callback(null);
        }
    });
}

exports.handler = handler;