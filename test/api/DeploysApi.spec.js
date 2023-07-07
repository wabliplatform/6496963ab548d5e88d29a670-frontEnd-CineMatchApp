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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TempApi);
  }
}(this, function(expect, TempApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TempApi.DeploysApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DeploysApi', function() {
    describe('createdeploys', function() {
      it('should call createdeploys successfully', function(done) {
        //uncomment below and update the code to test createdeploys
        //instance.createdeploys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletedeploys', function() {
      it('should call deletedeploys successfully', function(done) {
        //uncomment below and update the code to test deletedeploys
        //instance.deletedeploys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAlldeploys', function() {
      it('should call getAlldeploys successfully', function(done) {
        //uncomment below and update the code to test getAlldeploys
        //instance.getAlldeploys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getByParamsdeploys', function() {
      it('should call getByParamsdeploys successfully', function(done) {
        //uncomment below and update the code to test getByParamsdeploys
        //instance.getByParamsdeploys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getdeploys', function() {
      it('should call getdeploys successfully', function(done) {
        //uncomment below and update the code to test getdeploys
        //instance.getdeploys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatedeploys', function() {
      it('should call updatedeploys successfully', function(done) {
        //uncomment below and update the code to test updatedeploys
        //instance.updatedeploys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
