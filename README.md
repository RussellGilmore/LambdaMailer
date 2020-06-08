# Lambda Mailer

This demo uses a variety of AWS cloud services and uses the Serverless framework as the interface between AWS Lambda and the local dev environment. The demo sends a email object to SQS and is then fetched and sent via SES to a recipient.

## Tools and Services
[Serverless](https://www.serverless.com/)

Develop, deploy, troubleshoot and secure your serverless applications with radically less overhead and cost by using the Serverless Framework. The Serverless Framework consists of an open source CLI and a hosted dashboard. Together, they provide you with full serverless application life cycle management.

[Lambda](https://aws.amazon.com/lambda/)

With Lambda, you can run code for virtually any type of application or backend service - all with zero administration. Just upload your code and Lambda takes care of everything required to run and scale your code with high availability. You can set up your code to automatically trigger from other AWS services or call it directly from any web or mobile app.

[SQS](https://aws.amazon.com/sqs/)

Amazon Simple Queue Service (SQS) is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. SQS eliminates the complexity and overhead associated with managing and operating message oriented middleware, and empowers developers to focus on differentiating work.

[SES](https://aws.amazon.com/ses/)

Amazon Simple Email Service (Amazon SES) is a cloud-based email sending service designed to help digital marketers and application developers send marketing, notification, and transactional emails. It is a reliable, cost-effective service for businesses of all sizes that use email to keep in contact with their customers.

[S3](https://aws.amazon.com/s3/)

Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance. 

## Note
You must fill in the account id where applicable for this to work. 