/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Users from '../model/Users';

/**
* Users service.
* @module api/UsersApi
* @version 1.0.0
*/
export default class UsersApi {

    /**
    * Constructs a new UsersApi. 
    * @alias module:api/UsersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createusers operation.
     * @callback module:api/UsersApi~createusersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Users} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates the data
     * @param {module:model/Users} users data to be created
     * @param {module:api/UsersApi~createusersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Users}
     */
    createusers(users, callback) {
      let postBody = users;
      // verify the required parameter 'users' is set
      if (users === undefined || users === null) {
        throw new Error("Missing the required parameter 'users' when calling createusers");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Users;
      return this.apiClient.callApi(
        '/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteusers operation.
     * @callback module:api/UsersApi~deleteusersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the element
     * @param {String} usersId the Id parameter
     * @param {module:api/UsersApi~deleteusersCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteusers(usersId, callback) {
      let postBody = null;
      // verify the required parameter 'usersId' is set
      if (usersId === undefined || usersId === null) {
        throw new Error("Missing the required parameter 'usersId' when calling deleteusers");
      }

      let pathParams = {
        'usersId': usersId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/users/{usersId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllusers operation.
     * @callback module:api/UsersApi~getAllusersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Users>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the data
     * @param {module:api/UsersApi~getAllusersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Users>}
     */
    getAllusers(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Users];
      return this.apiClient.callApi(
        '/users/getAll', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getByParamsusers operation.
     * @callback module:api/UsersApi~getByParamsusersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Users>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the data based on user query
     * @param {String} filter the query based on which the search is performed
     * @param {module:api/UsersApi~getByParamsusersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Users>}
     */
    getByParamsusers(filter, callback) {
      let postBody = null;
      // verify the required parameter 'filter' is set
      if (filter === undefined || filter === null) {
        throw new Error("Missing the required parameter 'filter' when calling getByParamsusers");
      }

      let pathParams = {
      };
      let queryParams = {
        'filter': filter
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Users];
      return this.apiClient.callApi(
        '/users/getByParams', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getusers operation.
     * @callback module:api/UsersApi~getusersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Users} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the element
     * @param {String} usersId the Id parameter
     * @param {module:api/UsersApi~getusersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Users}
     */
    getusers(usersId, callback) {
      let postBody = null;
      // verify the required parameter 'usersId' is set
      if (usersId === undefined || usersId === null) {
        throw new Error("Missing the required parameter 'usersId' when calling getusers");
      }

      let pathParams = {
        'usersId': usersId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Users;
      return this.apiClient.callApi(
        '/users/{usersId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateusers operation.
     * @callback module:api/UsersApi~updateusersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Users} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the element
     * @param {String} usersId the Id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/Users} opts.users data to be updated
     * @param {module:api/UsersApi~updateusersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Users}
     */
    updateusers(usersId, opts, callback) {
      opts = opts || {};
      let postBody = opts['users'];
      // verify the required parameter 'usersId' is set
      if (usersId === undefined || usersId === null) {
        throw new Error("Missing the required parameter 'usersId' when calling updateusers");
      }

      let pathParams = {
        'usersId': usersId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Users;
      return this.apiClient.callApi(
        '/users/{usersId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}