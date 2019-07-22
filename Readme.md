# API's - Location information 

## Description

### External API

This is an example of an API that enables an external/unknown user to request to describe a location; Including information that contain latitude, longitude and additional/optional data (this is not further defined).

### Internal API


A second API for internal use. The user should be able to consume the data data via two endpoints.

 
- Listing of all location information 

- Details of a location: name, latitude, longitude, all additional data, a calculated distance.

## API Documentation and Live Demo

Demo and Documentation

- [External service](https://apilocation.docs.apiary.io/)
- [Internal service](https://internalapilocation.docs.apiary.io/)

---

## Prerequisites 

### 1.  Serverless Installation 

A powerful, unified experience to develop, deploy, test, secure, and monitor your Serverless applications.

```
# Step 1. Install serverless globally
$ npm install serverless -g
```


## Dev Environment 

Installation

```
# Step 1. Choose API
$ cd [external-service | internal-service]

# Step 3. Install Node JS dependencies
$ npm install

# Step 3. Install DyanamoDB Local
$ sls dynamodb install

# Step 4. Start Dynamo DB Local
$ sls dynamodb start -s dev --migrate

# Step 5. Start Offline mode
$ sls offline -s dev --watch

```

## Running Test

Explanation to how to prepare the environment for automated tests for this APIs.

```
# Step 1. Choose API
$ cd [external-service | internal-service]

# Step 2. Install Node JS dependencies
$ npm install

# Step 3. Install DyanamoDB Local (If it hasn't done yet)
$ sls dynamodb install
```

### Unit Test & Acceptance test

```
npm test
```

### Test Coverage

```
npm run test-cov
```

### And coding styles test

```
npm run lint
```

## Deployment

Deploy to cloud provider (AWS Lambda) 

```
# Step 1. Deploy
$ serverless deploy --stage [dev|prod|test]
```
---

## Built With 

- [Serverless](https://serverless.com)
- [Node JS](https://nodejs.org/en/)
- [Dynamo DB](https://aws.amazon.com/dynamodb/)
- [AWS Lambda](https://aws.amazon.com/lambda/)


## Authors

- Abner Tellez - Initial work - [Github Profile](https://www.github.com/atellezsazo/)
