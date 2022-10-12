## Mandatory assignments

**Assignment 1:**

What is an ARN: `Amazon Resource Names (ARNs) uniquely identify AWS resources. We require an ARN when you need to specify a resource unambiguously across all of AWS, such as in IAM policies, Amazon Relational Database Service (Amazon RDS) tags, and API calls.`

**Assignment 2:**

Response from the command: `'us-east-1' is a supported AWS Region`

**Assignment 3:**

Command to upload file with the AWS CLI: `aws s3 cp ~/environment/hello-world.txt s3://cf-templates-1xqamoqseg9fy-us-east-1`
or `aws s3 sync ~/environment/hello-world.txt s3://cf-templates-1xqamoqseg9fy-us-east-1`

Command to create a presigned URL: `aws s3 presign s3://cf-templates-1xqamoqseg9fy-us-east-1/hello-world.txt`

Command to delete your bucket with the AWS CLI: `aws s3api delete-bucket --bucket hyf-week1-console-divya`

Can you simply delete a CloudFormation bucket? : `Not if there are any folders/files in the bucket. Need to delete the folders/files first. Only empty buckets can be deleted simply!`
