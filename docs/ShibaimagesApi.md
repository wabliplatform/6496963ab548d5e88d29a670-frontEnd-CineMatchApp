# TempApi.ShibaimagesApi

All URIs are relative to *https://83.212.100.226:6011/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createshibaimages**](ShibaimagesApi.md#createshibaimages) | **POST** /shibaimages | Creates the data
[**deleteshibaimages**](ShibaimagesApi.md#deleteshibaimages) | **DELETE** /shibaimages/{shibaimagesId} | Delete the element
[**getAllshibaimages**](ShibaimagesApi.md#getAllshibaimages) | **GET** /shibaimages/getAll | Get all the data
[**getByParamsshibaimages**](ShibaimagesApi.md#getByParamsshibaimages) | **GET** /shibaimages/getByParams | Get all the data based on user query
[**getshibaimages**](ShibaimagesApi.md#getshibaimages) | **GET** /shibaimages/{shibaimagesId} | Get the element
[**updateshibaimages**](ShibaimagesApi.md#updateshibaimages) | **PUT** /shibaimages/{shibaimagesId} | Updates the element



## createshibaimages

> Shibaimages createshibaimages(shibaimages)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ShibaimagesApi();
let shibaimages = new TempApi.Shibaimages(); // Shibaimages | data to be created
apiInstance.createshibaimages(shibaimages, (error, data, response) => {
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
 **shibaimages** | [**Shibaimages**](Shibaimages.md)| data to be created | 

### Return type

[**Shibaimages**](Shibaimages.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteshibaimages

> deleteshibaimages(shibaimagesId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ShibaimagesApi();
let shibaimagesId = "shibaimagesId_example"; // String | the Id parameter
apiInstance.deleteshibaimages(shibaimagesId, (error, data, response) => {
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
 **shibaimagesId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllshibaimages

> [Shibaimages] getAllshibaimages()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ShibaimagesApi();
apiInstance.getAllshibaimages((error, data, response) => {
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

[**[Shibaimages]**](Shibaimages.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getByParamsshibaimages

> [Shibaimages] getByParamsshibaimages(filter)

Get all the data based on user query

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ShibaimagesApi();
let filter = "filter_example"; // String | the query based on which the search is performed
apiInstance.getByParamsshibaimages(filter, (error, data, response) => {
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

[**[Shibaimages]**](Shibaimages.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getshibaimages

> Shibaimages getshibaimages(shibaimagesId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ShibaimagesApi();
let shibaimagesId = "shibaimagesId_example"; // String | the Id parameter
apiInstance.getshibaimages(shibaimagesId, (error, data, response) => {
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
 **shibaimagesId** | **String**| the Id parameter | 

### Return type

[**Shibaimages**](Shibaimages.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateshibaimages

> Shibaimages updateshibaimages(shibaimagesId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ShibaimagesApi();
let shibaimagesId = "shibaimagesId_example"; // String | the Id parameter
let opts = {
  'shibaimages': new TempApi.Shibaimages() // Shibaimages | data to be updated
};
apiInstance.updateshibaimages(shibaimagesId, opts, (error, data, response) => {
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
 **shibaimagesId** | **String**| the Id parameter | 
 **shibaimages** | [**Shibaimages**](Shibaimages.md)| data to be updated | [optional] 

### Return type

[**Shibaimages**](Shibaimages.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

