# Serverless Web Application Deployment on AWS

This project is a serverless web application designed to manage employee data using AWS services. The application allows users to input employee information and view stored employee data through a simple and efficient web interface. The backend leverages several AWS services to provide a scalable and cost-effective solution.

## Table of Contents

- [Technologies and Services Used](#technologies-and-services-used)
- [Architecture](#architecture)
- [Development Process](#development-process)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Results and Learnings](#results-and-learnings)
- [Contributing](#contributing)
- [License](#license)

## Technologies and Services Used

- **AWS Lambda:** For serverless compute.
- **Amazon DynamoDB:** For NoSQL database storage.
- **Amazon API Gateway:** To create and manage RESTful APIs.
- **AWS IAM:** To manage permissions and roles.
- **Amazon S3:** For frontend storage.
- **AWS CodePipeline:** For continuous integration and deployment.
- **Amazon CloudFront:** For content delivery and security.

## Architecture

![Architecture Diagram](https://github.com/Dom7k/Employee-AWS-Serverless-App/blob/main/Images/architecture%20diagram.jpg)

The architecture consists of the following components:
1. DynamoDB for data storage.
2. Lambda functions for data processing (insert and retrieve operations).
3. API Gateway for creating RESTful APIs.
4. S3 for frontend hosting.
5. CodePipeline for CI/CD.
6. CloudFront for secure content delivery.

## Development Process

1. **DynamoDB:** Created a DynamoDB table to store employee data.
2. **AWS Lambda:**
   - Developed a Lambda function to insert data into the DynamoDB table.
   - Created another Lambda function to retrieve data from the table.
3. **IAM Role:** Configured an IAM role to allow the Lambda functions to interact securely with the DynamoDB table.
4. **API Gateway:** Set up a REST API with API Gateway to expose the Lambda functions, using POST and GET methods for data interaction.
5. **CI/CD with CodePipeline & S3:**
   - Utilized AWS CodePipeline to automate the continuous integration and deployment of the frontend application code from GitHub to an S3 bucket.
6. **CloudFront:** Used CloudFront DNS to secure and distribute the web application efficiently.

![Deployment Pipeline](https://github.com/Dom7k/Employee-AWS-Serverless-App/blob/main/Images/deployment%20pipeline.png)

## Setup and Installation

### Prerequisites
- AWS account

### Steps
1. **Clone the repository:**
    ```sh
    git clone https://github.com/Dom7k/Employee-AWS-Serverless-App.git
    cd Employee-AWS-Serverless-App
    ```

2. **Set up AWS resources:**
    - Create a DynamoDB table.
    - Deploy Lambda functions.
    - Configure API Gateway.
    - Set up IAM roles.

3. **Deploy the frontend:**
    - Use CodePipeline to deploy the frontend application code from GitHub to an S3 bucket.

4. **Set up CloudFront:**
    - Configure CloudFront to distribute your web application.

## Usage

### Running the application
1. **Start the backend services:**
    - Ensure all AWS resources (Lambda, DynamoDB, API Gateway) are deployed and running.

2. **Access the frontend:**
    - Open the URL provided by CloudFront in your web browser.

3. **Interacting with the application:**
    - Use the web interface to input employee information.
    - View stored employee data through the interface.

![Web App](https://github.com/Dom7k/Employee-AWS-Serverless-App/blob/main/Images/web%20app.png)

### API Endpoints
- **POST /employees:** Add new employee data.
- **GET /employees:** Retrieve all employee data.

## Results and Learnings

This application is now highly scalable and requires minimal operational overhead.

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

Please ensure your code follows the project's coding standards and includes relevant tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
