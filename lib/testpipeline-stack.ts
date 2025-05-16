import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodeBuildStep, CodePipeline, CodePipelineSource, ManualApprovalStep } from 'aws-cdk-lib/pipelines';
import { testpipelinestage } from './testpipeline-stage';


export class TestpipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const cdkpipeline = new CodePipeline (this, "CDKPipeline",{
      pipelineName: "DEMO",
      synth: new CodeBuildStep('SynthesisStep',{
        commands: ["npm ci", "npm run build", "npx cdk synth"],
        input: CodePipelineSource.connection('somenathghosh04/demo-cdkpipeline', 'main', {
          connectionArn: "arn:aws:codeconnections:us-east-1:471303021863:connection/30510401-5307-466f-869f-5162f1dbe115" 
        }),
        

      }),
      crossAccountKeys: true,
      

    }

    );

    // deploys to pipeline account
    cdkpipeline.addStage(new testpipelinestage(this, 'In-Pipeline'));

    // deploys to dev account

    cdkpipeline.addStage(new testpipelinestage(this, 'In-Dev', {
      env: { account: '345990532018', region: 'us-east-1' }
    }),
      {
        pre: [new ManualApprovalStep('PromoteToDev')]
      });
   

}
}
