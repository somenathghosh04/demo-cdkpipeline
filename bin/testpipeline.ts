#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { TestpipelineStack } from '../lib/testpipeline-stack';

const app = new cdk.App();
new TestpipelineStack(app, 'TestpipelineStack', {

});