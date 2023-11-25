# OpenAPI client generator

This project shows how to set up openapi-generator in Angular application.

## Setup

Run `npm install` to install all necessary dependencies

## OpenAPI

Run `npm run generate-openapi-clients` that will generate client services in typescript.
All clients are generated under `/openapi/clients` folder.

Current example configured to use `/yaml/petstore.yaml` api and in order to add new service, simply add new entry to `/openapi/openapi-config.json` configuration file in key/value format where key is irrelevant and value should be in the following format: 
`npx @openapitools/openapi-generator-cli generate -i src/app/openapi/yaml/YOUR_YAML_FILE.yaml -g typescript-angular -o src/app/openapi/clients/YOUR_NAME`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
