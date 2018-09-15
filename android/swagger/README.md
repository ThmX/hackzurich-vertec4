# swagger-java-client

## Requirements

Building the API client library requires [Maven](https://maven.apache.org/) to be installed.

## Installation

To install the API client library to your local Maven repository, simply execute:

```shell
mvn install
```

To deploy it to a remote Maven repository instead, configure the settings of the repository and execute:

```shell
mvn deploy
```

Refer to the [official documentation](https://maven.apache.org/plugins/maven-deploy-plugin/usage.html) for more information.

### Maven users

Add this dependency to your project's POM:

```xml
<dependency>
    <groupId>io.swagger</groupId>
    <artifactId>swagger-java-client</artifactId>
    <version>1.0.0</version>
    <scope>compile</scope>
</dependency>
```

### Gradle users

Add this dependency to your project's build file:

```groovy
compile "io.swagger:swagger-java-client:1.0.0"
```

### Others

At first generate the JAR by executing:

    mvn package

Then manually install the following JARs:

* target/swagger-java-client-1.0.0.jar
* target/lib/*.jar

## Getting Started

Please follow the [installation](#installation) instruction and execute the following Java code:

```java

import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.ProjectApi;

import java.io.File;
import java.util.*;

public class ProjectApiExample {

    public static void main(String[] args) {
        
        ProjectApi apiInstance = new ProjectApi();
        Project body = new Project(); // Project | Project object that needs to be added
        try {
            apiInstance.createProject(body);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProjectApi#createProject");
            e.printStackTrace();
        }
    }
}

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:8080/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ProjectApi* | [**createProject**](docs/ProjectApi.md#createProject) | **POST** /project | Add a new project
*ProjectApi* | [**deleteProject**](docs/ProjectApi.md#deleteProject) | **DELETE** /project/{projectId} | Deletes a project
*ProjectApi* | [**getProjectById**](docs/ProjectApi.md#getProjectById) | **GET** /project/{projectId} | Find project by ID
*ProjectApi* | [**readProjects**](docs/ProjectApi.md#readProjects) | **GET** /projects | Finds all the projects
*ProjectApi* | [**updateProject**](docs/ProjectApi.md#updateProject) | **PUT** /project/{projectId} | Updates a project
*TaskApi* | [**createTask**](docs/TaskApi.md#createTask) | **POST** /task | Add a new task
*TaskApi* | [**deleteTask**](docs/TaskApi.md#deleteTask) | **DELETE** /task/{taskId} | Deletes a task
*TaskApi* | [**getTaskById**](docs/TaskApi.md#getTaskById) | **GET** /task/{taskId} | Find task by ID
*TaskApi* | [**readTasks**](docs/TaskApi.md#readTasks) | **GET** /tasks | Finds all the tasks
*TaskApi* | [**updateTask**](docs/TaskApi.md#updateTask) | **PUT** /task/{taskId} | Updates a task


## Documentation for Models

 - [Project](docs/Project.md)
 - [ProjectState](docs/ProjectState.md)
 - [Task](docs/Task.md)
 - [TaskState](docs/TaskState.md)


## Documentation for Authorization

All endpoints do not require authorization.
Authentication schemes defined for the API:

## Recommendation

It's recommended to create an instance of `ApiClient` per thread in a multithreaded environment to avoid any potential issues.

## Author



