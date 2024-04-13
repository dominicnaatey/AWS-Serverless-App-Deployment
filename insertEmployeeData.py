import json
import boto3

# Create a DynamoDB object using the AWS SDK
dynamodb = boto3.resource('dynamodb')
# Use the DynamoDB object to select our table
table = dynamodb.Table('employeeData')

# Define the handler function that the Lambda service will use as an entry point
def lambda_handler(event, context):
    # Extract values from the event object we got from the Lambda service and store in variables
    employee_id = event['employeeid']
    name = event['name']
    employee_role = event['role']
    age = event['age']
    
    # Write employee data to the DynamoDB table and save the response in a variable
    response = table.put_item(
        Item={
            'employeeid': employee_id,
            'name': name,
            'role': employee_role,
            'age': age
        }
    )
    
    # Return a properly formatted JSON object
    return {
        'statusCode': 200,
        'body': json.dumps('Employee data saved successfully!')
    }

# Test event
# {
#     "employeeid": 1,
#     "name": "James Clare",
#     "role": "Data Analyst",
#     "age": 26
# }