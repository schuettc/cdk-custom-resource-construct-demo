#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkCustomResourceConstructDemoStack } from '../lib/cdk-custom-resource-construct-demo-stack';

const app = new cdk.App();
new CdkCustomResourceConstructDemoStack(
  app,
  'CdkCustomResourceConstructDemoStack',
  {},
);
