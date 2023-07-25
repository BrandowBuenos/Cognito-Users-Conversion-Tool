# Cognito Users Conversion Tool

This tool allows you to convert a list of users obtained from Amazon Cognito User Pools into a CSV format. You can retrieve the user list in JSON or TABLE format using the AWS CLI, and then use this tool to convert it into a CSV file.

## Obtaining the User List

You can use the AWS CLI to obtain the user list from Amazon Cognito User Pools. There are two output formats available:

### JSON Format

To obtain the user list in JSON format, use the following AWS CLI command:

```bash
aws cognito-idp list-users --region <region> --user-pool-id <userPoolId> --output json > users.json
```

Replace <region> with your AWS region code (e.g., us-east-1) and <userPoolId> with the ID of your Cognito User Pool.

### TABLE Format

To obtain the user list in TABLE format, use the following AWS CLI command:

```bash
aws cognito-idp list-users --region <region> --user-pool-id <userPoolId> --output table > users.txt
```

Replace <region> with your AWS region code (e.g., us-east-1) and <userPoolId> with the ID of your Cognito User Pool.

## Usage

1. Retrieve the user list from Amazon Cognito using the AWS CLI as explained above.

2. Save the JavaScript code into a file, e.g., `convert.js`.

3. Open a terminal, navigate to the folder containing `convert.js` and `users.json`, and run the script using Node.js:

```bash
node convert.js
```


The script will process the user list and create a users.csv file in the same folder.

