import * as cdk from '@aws-cdk/core';
import * as ec2 from "@aws-cdk/aws-ec2";
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class VpcStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new ec2.Vpc(this, "MyVPC", {
      cidr: "10.0.0.0/16",
    })
    // example resource
    // const queue = new sqs.Queue(this, 'VpcQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
