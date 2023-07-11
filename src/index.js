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


import ApiClient from './ApiClient';
import Allmovies from './model/Allmovies';
import Deploys from './model/Deploys';
import Movies from './model/Movies';
import Users from './model/Users';
import AllmoviesApi from './api/AllmoviesApi';
import DeploysApi from './api/DeploysApi';
import MoviesApi from './api/MoviesApi';
import UsersApi from './api/UsersApi';


/**
* This_is_a_sample_openApi_document.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var TempApi = require('index'); // See note below*.
* var xxxSvc = new TempApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new TempApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new TempApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new TempApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Allmovies model constructor.
     * @property {module:model/Allmovies}
     */
    Allmovies,

    /**
     * The Deploys model constructor.
     * @property {module:model/Deploys}
     */
    Deploys,

    /**
     * The Movies model constructor.
     * @property {module:model/Movies}
     */
    Movies,

    /**
     * The Users model constructor.
     * @property {module:model/Users}
     */
    Users,

    /**
    * The AllmoviesApi service constructor.
    * @property {module:api/AllmoviesApi}
    */
    AllmoviesApi,

    /**
    * The DeploysApi service constructor.
    * @property {module:api/DeploysApi}
    */
    DeploysApi,

    /**
    * The MoviesApi service constructor.
    * @property {module:api/MoviesApi}
    */
    MoviesApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi
};

export default {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Allmovies model constructor.
     * @property {module:model/Allmovies}
     */
    Allmovies,

    /**
     * The Deploys model constructor.
     * @property {module:model/Deploys}
     */
    Deploys,

    /**
     * The Movies model constructor.
     * @property {module:model/Movies}
     */
    Movies,

    /**
     * The Users model constructor.
     * @property {module:model/Users}
     */
    Users,

    /**
    * The AllmoviesApi service constructor.
    * @property {module:api/AllmoviesApi}
    */
    AllmoviesApi,

    /**
    * The DeploysApi service constructor.
    * @property {module:api/DeploysApi}
    */
    DeploysApi,

    /**
    * The MoviesApi service constructor.
    * @property {module:api/MoviesApi}
    */
    MoviesApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi
};
