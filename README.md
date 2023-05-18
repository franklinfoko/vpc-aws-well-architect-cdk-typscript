# Welcome to your CDK TypeScript project

This is a project for CDK development with TypeScript.

This project builds a well-architected Amazon VPC. Amazon VPC includes private and public subnets in up to three Availability Zones in a Region, and configures NAT gateways in each Availability Zone.

The following AWS CDK demonstration will guide you through steps in which you create AWS resources. Depending on how much of your AWS Free Tier you have used, following along might incur charges to your AWS account. To minimize any potential charges, remove the newly created AWS CDK stack created as part of this demonstration.

We highly recommends that you follow the destroy step at the end of this demonstration to ensure that you do not continue to incur charges after completing this lesson.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
