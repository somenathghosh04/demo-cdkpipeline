import { myappstack } from './myapp-stack';
import { Stage, StageProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class testpipelinestage extends Stage {
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    const service = new myappstack(this, "WebService");
  }

}