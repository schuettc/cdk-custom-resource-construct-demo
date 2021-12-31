import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CustomResourceExample } from 'cdk-custom-resource-construct-example';

export class CdkCustomResourceConstructDemoStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const result = new CustomResourceExample(this, 'customResourceResult', {
      customResourceNumber: 5,
    });

    new CfnOutput(this, 'customResourceOutput', {
      value: result.customResourceResult,
    });
  }
}
