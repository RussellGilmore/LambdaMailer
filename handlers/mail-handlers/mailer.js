'use strict';
const AWS = require('aws-sdk');
const NODEMAILER = require('nodemailer');
AWS.config.update({
    region: 'us-east-1'
});
const ses = new AWS.SES();
const s3 = new AWS.S3();

/**
 * @param {*} bucket Takes the name of the bucket being referenced. 
 * @param {*} key The name of the file be referenced. 
 */
function getS3File(bucket, key) {
    return new Promise(function (resolve, reject) {
        s3.getObject({
                Bucket: bucket,
                Key: key
            },
            function (err, data) {
                if (err) {
                    return reject(err);
                } else {
                    return resolve(data);
                }
            }
        );
    })
}

/**
 * @param {*} callback Returns error info back to caller.
 * @param {*} event Source JSON.
 * @param {*} context Current state of function execution.
 */
function handler(event, context, callback) {
    //Pull required info from SQS object.
    const bodies = event.Records.map(record => JSON.parse(record.body));
    const content = bodies[0];


    getS3File('dev-email-attachment-bucket', content.Attachment)
        .then(function (fileData) {
            const params = {
                from: content.Sender,
                subject: content.Title,
                html: content.Text,
                to: [content.Destination],
                attachments: [{
                    filename: content.Attachment,
                    content: fileData.Body
                }]
            };

            // Nodemailer interface.
            const transporter = NODEMAILER.createTransport({
                SES: ses
            });

            // Build email with nodemailer interface and send using SES.
            transporter.sendMail(params, function (err, data) {
                if (err) {
                    console.log(err, err.stack);
                    callback(err);
                } else {
                    context.success(data.Payload);
                    callback(null);
                }
            });
        })
        .catch(function (err) {
            console.log(err, err.stack);
            callback(err);
        });
}

exports.handler = handler;