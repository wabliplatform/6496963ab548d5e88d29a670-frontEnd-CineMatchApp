# TempApi.TrendingmoviesApi

All URIs are relative to *https://83.212.100.226:6011/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createtrendingmovies**](TrendingmoviesApi.md#createtrendingmovies) | **POST** /trendingmovies | Creates the data
[**deletetrendingmovies**](TrendingmoviesApi.md#deletetrendingmovies) | **DELETE** /trendingmovies/{trendingmoviesId} | Delete the element
[**getAlltrendingmovies**](TrendingmoviesApi.md#getAlltrendingmovies) | **GET** /trendingmovies/getAll | Get all the data
[**getByParamstrendingmovies**](TrendingmoviesApi.md#getByParamstrendingmovies) | **GET** /trendingmovies/getByParams | Get all the data based on user query
[**gettrendingmovies**](TrendingmoviesApi.md#gettrendingmovies) | **GET** /trendingmovies/{trendingmoviesId} | Get the element
[**updatetrendingmovies**](TrendingmoviesApi.md#updatetrendingmovies) | **PUT** /trendingmovies/{trendingmoviesId} | Updates the element



## createtrendingmovies

> Trendingmovies createtrendingmovies(trendingmovies)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TrendingmoviesApi();
let trendingmovies = new TempApi.Trendingmovies(); // Trendingmovies | data to be created
apiInstance.createtrendingmovies(trendingmovies, (error, data, response) => {
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
 **trendingmovies** | [**Trendingmovies**](Trendingmovies.md)| data to be created | 

### Return type

[**Trendingmovies**](Trendingmovies.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletetrendingmovies

> deletetrendingmovies(trendingmoviesId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TrendingmoviesApi();
let trendingmoviesId = "trendingmoviesId_example"; // String | the Id parameter
apiInstance.deletetrendingmovies(trendingmoviesId, (error, data, response) => {
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
 **trendingmoviesId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAlltrendingmovies

> [Trendingmovies] getAlltrendingmovies()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TrendingmoviesApi();
apiInstance.getAlltrendingmovies((error, data, response) => {
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

[**[Trendingmovies]**](Trendingmovies.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getByParamstrendingmovies

> [Trendingmovies] getByParamstrendingmovies(filter)

Get all the data based on user query

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TrendingmoviesApi();
let filter = "filter_example"; // String | the query based on which the search is performed
apiInstance.getByParamstrendingmovies(filter, (error, data, response) => {
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

[**[Trendingmovies]**](Trendingmovies.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gettrendingmovies

> Trendingmovies gettrendingmovies(trendingmoviesId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TrendingmoviesApi();
let trendingmoviesId = "trendingmoviesId_example"; // String | the Id parameter
apiInstance.gettrendingmovies(trendingmoviesId, (error, data, response) => {
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
 **trendingmoviesId** | **String**| the Id parameter | 

### Return type

[**Trendingmovies**](Trendingmovies.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatetrendingmovies

> Trendingmovies updatetrendingmovies(trendingmoviesId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TrendingmoviesApi();
let trendingmoviesId = "trendingmoviesId_example"; // String | the Id parameter
let opts = {
  'trendingmovies': new TempApi.Trendingmovies() // Trendingmovies | data to be updated
};
apiInstance.updatetrendingmovies(trendingmoviesId, opts, (error, data, response) => {
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
 **trendingmoviesId** | **String**| the Id parameter | 
 **trendingmovies** | [**Trendingmovies**](Trendingmovies.md)| data to be updated | [optional] 

### Return type

[**Trendingmovies**](Trendingmovies.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

