# TempApi.AllmoviesApi

All URIs are relative to *https://83.212.100.226:6011/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createallmovies**](AllmoviesApi.md#createallmovies) | **POST** /allmovies | Creates the data
[**deleteallmovies**](AllmoviesApi.md#deleteallmovies) | **DELETE** /allmovies/{allmoviesId} | Delete the element
[**getAllallmovies**](AllmoviesApi.md#getAllallmovies) | **GET** /allmovies/getAll | Get all the data
[**getByParamsallmovies**](AllmoviesApi.md#getByParamsallmovies) | **GET** /allmovies/getByParams | Get all the data based on user query
[**getallmovies**](AllmoviesApi.md#getallmovies) | **GET** /allmovies/{allmoviesId} | Get the element
[**updateallmovies**](AllmoviesApi.md#updateallmovies) | **PUT** /allmovies/{allmoviesId} | Updates the element



## createallmovies

> Allmovies createallmovies(allmovies)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.AllmoviesApi();
let allmovies = new TempApi.Allmovies(); // Allmovies | data to be created
apiInstance.createallmovies(allmovies, (error, data, response) => {
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
 **allmovies** | [**Allmovies**](Allmovies.md)| data to be created | 

### Return type

[**Allmovies**](Allmovies.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteallmovies

> deleteallmovies(allmoviesId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.AllmoviesApi();
let allmoviesId = "allmoviesId_example"; // String | the Id parameter
apiInstance.deleteallmovies(allmoviesId, (error, data, response) => {
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
 **allmoviesId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllallmovies

> [Allmovies] getAllallmovies()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.AllmoviesApi();
apiInstance.getAllallmovies((error, data, response) => {
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

[**[Allmovies]**](Allmovies.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getByParamsallmovies

> [Allmovies] getByParamsallmovies(filter)

Get all the data based on user query

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.AllmoviesApi();
let filter = "filter_example"; // String | the query based on which the search is performed
apiInstance.getByParamsallmovies(filter, (error, data, response) => {
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

[**[Allmovies]**](Allmovies.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getallmovies

> Allmovies getallmovies(allmoviesId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.AllmoviesApi();
let allmoviesId = "allmoviesId_example"; // String | the Id parameter
apiInstance.getallmovies(allmoviesId, (error, data, response) => {
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
 **allmoviesId** | **String**| the Id parameter | 

### Return type

[**Allmovies**](Allmovies.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateallmovies

> Allmovies updateallmovies(allmoviesId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.AllmoviesApi();
let allmoviesId = "allmoviesId_example"; // String | the Id parameter
let opts = {
  'allmovies': new TempApi.Allmovies() // Allmovies | data to be updated
};
apiInstance.updateallmovies(allmoviesId, opts, (error, data, response) => {
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
 **allmoviesId** | **String**| the Id parameter | 
 **allmovies** | [**Allmovies**](Allmovies.md)| data to be updated | [optional] 

### Return type

[**Allmovies**](Allmovies.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

