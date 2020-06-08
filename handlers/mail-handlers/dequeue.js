'use strict';
const AWS = require('aws-sdk');
AWS.config.update({
    region: 'us-east-1'
});
const mailer = new AWS.Lambda();
/**
 * @param {*} callback Returns error info back to caller.
 * @param {*} event Source JSON.
 * @param {*} context Current state of function execution.
 */
function handler (event, context, callback) {
    var params = {
        FunctionName: 'lambda-mail-service-dev-mailer',
        Payload: JSON.stringify(event)
    };
    //Consume SQS object and invoke mailer lambda. 
    mailer.invoke(params, function (err, data) {
        if (err) {
            console.log(err, err.stack);
            callback(err);
        } else {
            context.succeed(data.Payload);
            callback(null);
        }
    });
}

exports.handler = handler;