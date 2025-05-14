import { CfnOutput, Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Function, Code, Runtime, FunctionUrl, FunctionUrlAuthType } from 'aws-cdk-lib/aws-lambda';

export class myappstack extends Stack {
  
    // public readonly functionurl: CfnOutput;

    constructor(scope: Construct, id: string, props?: StackProps) {
      super(scope, id, props);

    // defining my application - lambda function
        const myapp = new Function(this, 'myapphandler', {
           code: Code.fromAsset("lambda"),
           handler: "myapp.handler", // myapp is the filename and handler is the function name
           runtime: Runtime.NODEJS_22_X
        });

        // const fnurl = new FunctionUrl(this, 'myappurl', {
        //     function: myapp,
        //     authType: FunctionUrlAuthType.NONE  // This makes the function publicly accessible
        // });

        // // Output the function URL
        // this.functionurl = new CfnOutput(this, 'FunctionUrl', {
        //     value: fnurl.url
        // });

    }

}