# AWS Fargate & Node Exploration

1. Use `docker build . -t express-app` to build the Docker image.
2. Use `docker run -p 3000:3000 -d --name express-app express-app` to run the Docker image.

## There Are 2 Endpoints - GET & POST both at root
* The GET returns "Hello World".
* The POST takes a JSON object with a `name` property and returns "Hello `name`"
