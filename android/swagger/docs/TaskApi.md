# TaskApi

All URIs are relative to *http://localhost:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTask**](TaskApi.md#createTask) | **POST** /task | Add a new task
[**deleteTask**](TaskApi.md#deleteTask) | **DELETE** /task/{taskId} | Deletes a task
[**getTaskById**](TaskApi.md#getTaskById) | **GET** /task/{taskId} | Find task by ID
[**readTasks**](TaskApi.md#readTasks) | **GET** /tasks | Finds all the tasks
[**updateTask**](TaskApi.md#updateTask) | **PUT** /task/{taskId} | Updates a task


<a name="createTask"></a>
# **createTask**
> createTask(body)

Add a new task



### Example
```java
// Import classes:
//import io.swagger.client.api.TaskApi;

TaskApi apiInstance = new TaskApi();
Task body = new Task(); // Task | Task object that needs to be added
try {
    apiInstance.createTask(body);
} catch (ApiException e) {
    System.err.println("Exception when calling TaskApi#createTask");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Task**](Task.md)| Task object that needs to be added |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTask"></a>
# **deleteTask**
> deleteTask(taskId)

Deletes a task



### Example
```java
// Import classes:
//import io.swagger.client.api.TaskApi;

TaskApi apiInstance = new TaskApi();
String taskId = "taskId_example"; // String | Task id to delete
try {
    apiInstance.deleteTask(taskId);
} catch (ApiException e) {
    System.err.println("Exception when calling TaskApi#deleteTask");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| Task id to delete |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTaskById"></a>
# **getTaskById**
> Task getTaskById(taskId)

Find task by ID

Returns a single task

### Example
```java
// Import classes:
//import io.swagger.client.api.TaskApi;

TaskApi apiInstance = new TaskApi();
String taskId = "taskId_example"; // String | ID of task to return
try {
    Task result = apiInstance.getTaskById(taskId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TaskApi#getTaskById");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| ID of task to return |

### Return type

[**Task**](Task.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readTasks"></a>
# **readTasks**
> List&lt;Task&gt; readTasks()

Finds all the tasks

### Example
```java
// Import classes:
//import io.swagger.client.api.TaskApi;

TaskApi apiInstance = new TaskApi();
try {
    List<Task> result = apiInstance.readTasks();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TaskApi#readTasks");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List&lt;Task&gt;**](Task.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateTask"></a>
# **updateTask**
> updateTask(taskId, body)

Updates a task



### Example
```java
// Import classes:
//import io.swagger.client.api.TaskApi;

TaskApi apiInstance = new TaskApi();
String taskId = "taskId_example"; // String | ID of task that needs to be updated
Task body = new Task(); // Task | Task object that needs to be added
try {
    apiInstance.updateTask(taskId, body);
} catch (ApiException e) {
    System.err.println("Exception when calling TaskApi#updateTask");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| ID of task that needs to be updated |
 **body** | [**Task**](Task.md)| Task object that needs to be added |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

