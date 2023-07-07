# TempApi.UsersApi

All URIs are relative to *https://83.212.100.226:6011/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createusers**](UsersApi.md#createusers) | **POST** /users | Creates the data
[**deleteusers**](UsersApi.md#deleteusers) | **DELETE** /users/{usersId} | Delete the element
[**getAllusers**](UsersApi.md#getAllusers) | **GET** /users/getAll | Get all the data
[**getByParamsusers**](UsersApi.md#getByParamsusers) | **GET** /users/getByParams | Get all the data based on user query
[**getusers**](UsersApi.md#getusers) | **GET** /users/{usersId} | Get the element
[**updateusers**](UsersApi.md#updateusers) | **PUT** /users/{usersId} | Updates the element



## createusers

> Users createusers(users)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.UsersApi();
let users = new TempApi.Users(); // Users | data to be created
apiInstance.createusers(users, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **users** | [**Users**](Users.md)| data to be created | 

### Return type

[**Users**](Users.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteusers

> deleteusers(usersId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.UsersApi();
let usersId = "usersId_example"; // String | the Id parameter
apiInstance.deleteusers(usersId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usersId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllusers

> [Users] getAllusers()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.UsersApi();
apiInstance.getAllusers((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Users]**](Users.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getByParamsusers

> [Users] getByParamsusers(filter)

Get all the data based on user query

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.UsersApi();
let filter = "filter_example"; // String | the query based on which the search is performed
apiInstance.getByParamsusers(filter, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| the query based on which the search is performed | 

### Return type

[**[Users]**](Users.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getusers

> Users getusers(usersId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.UsersApi();
let usersId = "usersId_example"; // String | the Id parameter
apiInstance.getusers(usersId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usersId** | **String**| the Id parameter | 

### Return type

[**Users**](Users.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateusers

> Users updateusers(usersId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.UsersApi();
let usersId = "usersId_example"; // String | the Id parameter
let opts = {
  'users': new TempApi.Users() // Users | data to be updated
};
apiInstance.updateusers(usersId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usersId** | **String**| the Id parameter | 
 **users** | [**Users**](Users.md)| data to be updated | [optional] 

### Return type

[**Users**](Users.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

