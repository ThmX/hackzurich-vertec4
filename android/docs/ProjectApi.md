# ProjectApi

All URIs are relative to *http://hackzurich-vertec4.local/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProject**](ProjectApi.md#createProject) | **POST** /project | Add a new project
[**deleteProject**](ProjectApi.md#deleteProject) | **DELETE** /project/{projectId} | Deletes a project
[**getProjectById**](ProjectApi.md#getProjectById) | **GET** /project/{projectId} | Find project by ID
[**readProjects**](ProjectApi.md#readProjects) | **GET** /projects | Finds all the projects
[**updateProject**](ProjectApi.md#updateProject) | **PUT** /project/{projectId} | Updates a project


<a name="createProject"></a>
# **createProject**
> createProject(body)

Add a new project



### Example
```java
// Import classes:
//import io.swagger.client.api.ProjectApi;

ProjectApi apiInstance = new ProjectApi();
Project body = new Project(); // Project | Project object that needs to be added
try {
    apiInstance.createProject(body);
} catch (ApiException e) {
    System.err.println("Exception when calling ProjectApi#createProject");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Project**](Project.md)| Project object that needs to be added |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteProject"></a>
# **deleteProject**
> deleteProject(projectId)

Deletes a project



### Example
```java
// Import classes:
//import io.swagger.client.api.ProjectApi;

ProjectApi apiInstance = new ProjectApi();
Long projectId = 789L; // Long | Project id to delete
try {
    apiInstance.deleteProject(projectId);
} catch (ApiException e) {
    System.err.println("Exception when calling ProjectApi#deleteProject");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **Long**| Project id to delete |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProjectById"></a>
# **getProjectById**
> Project getProjectById(projectId)

Find project by ID

Returns a single project

### Example
```java
// Import classes:
//import io.swagger.client.api.ProjectApi;

ProjectApi apiInstance = new ProjectApi();
Long projectId = 789L; // Long | ID of project to return
try {
    Project result = apiInstance.getProjectById(projectId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ProjectApi#getProjectById");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **Long**| ID of project to return |

### Return type

[**Project**](Project.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readProjects"></a>
# **readProjects**
> List&lt;Project&gt; readProjects()

Finds all the projects

### Example
```java
// Import classes:
//import io.swagger.client.api.ProjectApi;

ProjectApi apiInstance = new ProjectApi();
try {
    List<Project> result = apiInstance.readProjects();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ProjectApi#readProjects");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List&lt;Project&gt;**](Project.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateProject"></a>
# **updateProject**
> updateProject(projectId, body)

Updates a project



### Example
```java
// Import classes:
//import io.swagger.client.api.ProjectApi;

ProjectApi apiInstance = new ProjectApi();
Long projectId = 789L; // Long | ID of project that needs to be updated
Project body = new Project(); // Project | Project object that needs to be added
try {
    apiInstance.updateProject(projectId, body);
} catch (ApiException e) {
    System.err.println("Exception when calling ProjectApi#updateProject");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **Long**| ID of project that needs to be updated |
 **body** | [**Project**](Project.md)| Project object that needs to be added |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

