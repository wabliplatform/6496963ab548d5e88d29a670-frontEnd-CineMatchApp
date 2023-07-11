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
import Allmovies from '../model/Allmovies';

/**
* Allmovies service.
* @module api/AllmoviesApi
* @version 1.0.0
*/
export default class AllmoviesApi {

    /**
    * Constructs a new AllmoviesApi. 
    * @alias module:api/AllmoviesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createallmovies operation.
     * @callback module:api/AllmoviesApi~createallmoviesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Allmovies} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates the data
     * @param {module:model/Allmovies} allmovies data to be created
     * @param {module:api/AllmoviesApi~createallmoviesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Allmovies}
     */
    createallmovies(allmovies, callback) {
      let postBody = allmovies;
      // verify the required parameter 'allmovies' is set
      if (allmovies === undefined || allmovies === null) {
        throw new Error("Missing the required parameter 'allmovies' when calling createallmovies");
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
      let returnType = Allmovies;
      return this.apiClient.callApi(
        '/allmovies', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteallmovies operation.
     * @callback module:api/AllmoviesApi~deleteallmoviesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the element
     * @param {String} allmoviesId the Id parameter
     * @param {module:api/AllmoviesApi~deleteallmoviesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteallmovies(allmoviesId, callback) {
      let postBody = null;
      // verify the required parameter 'allmoviesId' is set
      if (allmoviesId === undefined || allmoviesId === null) {
        throw new Error("Missing the required parameter 'allmoviesId' when calling deleteallmovies");
      }

      let pathParams = {
        'allmoviesId': allmoviesId
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
        '/allmovies/{allmoviesId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllallmovies operation.
     * @callback module:api/AllmoviesApi~getAllallmoviesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Allmovies>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the data
     * @param {module:api/AllmoviesApi~getAllallmoviesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Allmovies>}
     */
    getAllallmovies(callback) {
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
      let returnType = [Allmovies];
      return this.apiClient.callApi(
        '/allmovies/getAll', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getByParamsallmovies operation.
     * @callback module:api/AllmoviesApi~getByParamsallmoviesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Allmovies>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the data based on user query
     * @param {String} filter the query based on which the search is performed
     * @param {module:api/AllmoviesApi~getByParamsallmoviesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Allmovies>}
     */
    getByParamsallmovies(filter, callback) {
      let postBody = null;
      // verify the required parameter 'filter' is set
      if (filter === undefined || filter === null) {
        throw new Error("Missing the required parameter 'filter' when calling getByParamsallmovies");
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
      let returnType = [Allmovies];
      return this.apiClient.callApi(
        '/allmovies/getByParams', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getallmovies operation.
     * @callback module:api/AllmoviesApi~getallmoviesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Allmovies} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the element
     * @param {String} allmoviesId the Id parameter
     * @param {module:api/AllmoviesApi~getallmoviesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Allmovies}
     */
    getallmovies(allmoviesId, callback) {
      let postBody = null;
      // verify the required parameter 'allmoviesId' is set
      if (allmoviesId === undefined || allmoviesId === null) {
        throw new Error("Missing the required parameter 'allmoviesId' when calling getallmovies");
      }

      let pathParams = {
        'allmoviesId': allmoviesId
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
      let returnType = Allmovies;
      return this.apiClient.callApi(
        '/allmovies/{allmoviesId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateallmovies operation.
     * @callback module:api/AllmoviesApi~updateallmoviesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Allmovies} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the element
     * @param {String} allmoviesId the Id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/Allmovies} opts.allmovies data to be updated
     * @param {module:api/AllmoviesApi~updateallmoviesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Allmovies}
     */
    updateallmovies(allmoviesId, opts, callback) {
      opts = opts || {};
      let postBody = opts['allmovies'];
      // verify the required parameter 'allmoviesId' is set
      if (allmoviesId === undefined || allmoviesId === null) {
        throw new Error("Missing the required parameter 'allmoviesId' when calling updateallmovies");
      }

      let pathParams = {
        'allmoviesId': allmoviesId
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
      let returnType = Allmovies;
      return this.apiClient.callApi(
        '/allmovies/{allmoviesId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}