#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { TestpipelineStack } from '../lib/testpipeline-stack';

const app = new cdk.App();
new TestpipelineStack(app, 'CDKPipelineStack', {
  env: {
    account: '471303021863', // pipeline account
    region: 'us-east-1'
  }
});