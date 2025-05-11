import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodeBuildStep, CodePipeline, CodePipelineSource } from 'aws-cdk-lib/pipelines';


export class TestpipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const demopipeline = new CodePipeline (this, "idDemo",{
      pipelineName: "DEMO",
      synth: new CodeBuildStep('SynthesisStep',{
        commands: ["npm ci", "npm run build", "npx cdk synth"],
        input: CodePipelineSource.connection('somenathghosh04/demo-cdkpipeline', 'main', {
          connectionArn: "arn:aws:codeconnections:us-east-1:471303021863:connection/30510401-5307-466f-869f-5162f1dbe115" 
        }),

      }),

    }

    );
}
}
