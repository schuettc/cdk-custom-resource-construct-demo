[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=443233366)

# CDK Custom Resource Construct Demo

This is a complementary CDK to the [npm package](https://www.npmjs.com/package/cdk-custom-resource-construct-example) example.

### Requirements

- yarn

### Instructions

```bash
git clone https://github.com/schuettc/cdk-custom-resource-construct-demo
cd cdk-custom-resource-construct-demo
yarn
yarn run build
yarn cdk deploy
```

### Results

Once deployed, the CDK will create a Custom Resource that will simply multiply the [input](https://github.com/schuettc/cdk-custom-resource-construct-demo/blob/6b460937b269ef7343fa0cc3e10cfd6404c358a5/lib/cdk-custom-resource-construct-demo-stack.ts#L10) and return a response. This response will be presented as the CloudFormation Output.
