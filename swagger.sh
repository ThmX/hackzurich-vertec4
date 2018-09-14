#!/bin/bash

swagger-codegen generate -i swagger.yml -l android -o android
swagger-codegen generate -i swagger.yml -l nodejs-server -o nodejs
swagger-codegen generate -i swagger.yml -l typescript-angular -o angular/src/swagger
swagger-codegen generate -i swagger.yml -l swift4 -o ios
