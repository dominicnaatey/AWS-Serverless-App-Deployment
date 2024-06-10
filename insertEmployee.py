import json
import boto3

dynamodb = boto3.resource('dynamodb', region_name='us-west-2')
table = dynamodb.Table('EmployeeData')

def lambda_handler(event, context):
    employee_id = event['employeeid']
    name = event['name']
    role = event['role']
    age = event['age']
    
    response = table.put_item(
        Item={
            'employeeid': employee_id,
            'name': name,
            'role': role,
            'age': age
        }
    )
    
    return {
        'statusCode': 200,
        'body': json.dumps('Employee data saved successfully!')
    }
