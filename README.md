# AWS Fargate & Node Exploration

## Local Docker Setup
1. Use `docker compose up` to create & run the Docker image `express-app`.

## AWS Docker Setup
1. Use `docker build . -t express-app_aws` to create the Docker image `express-app_aws`.
2. Use `docker run -d -p 3000:3000 --name express-app_aws express-app_aws` to run the Docker image.

## There Are 2 Endpoints - GET & POST both at root
* The GET returns "Hello World".
* The POST takes a JSON object with a `name` property and returns "Hello `name`"
