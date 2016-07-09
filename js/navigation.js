// var adminurl = "http://blazen.io/";
var adminurl = "http://192.168.1.107:1337/";
var imgurl = "http://146.148.4.222/upload/";
var imgpath = adminurl + "upload/readFile";
var uploadurl = adminurl + "upload/";
// var imgpath = imgurl + "readFile";
var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
  var navigation = [{
    name: "Users",
    classis: "active",
    link: "#/page/userView",
    subnav: []
  }, {
    name: "Movies",
    classis: "active",
    link: "#/page/viewMovie",
    subnav: []
  }
];

  return {
    getnav: function() {
      return navigation;
    },
    makeactive: function(menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },
    saveApi: function(data,apiName, successCallback, errorCallback) {
      $http.post(adminurl + apiName, data).success(successCallback).error(errorCallback);
    },
    deleteProject: function(data, successCallback, errorCallback) {
      $http.post(adminURL + "project/delete", data).success(successCallback).error(errorCallback);
    },
    findProjects: function(apiName,pagination, successCallback, errorCallback) {
      $http.post(adminurl + apiName,pagination).success(successCallback).error(errorCallback);
    },
    findOneProject: function(apiName,urlParams, successCallback, errorCallback) {
      console.log(adminurl+apiName);
      $http.post(adminurl + apiName,urlParams).success(successCallback).error(errorCallback);
    },
    sideMenu1: function(apiName, pagination, successCallback, errorCallback) {
         $http.post(adminurl + apiName, pagination).success(successCallback).error(errorCallback);
       },
    submitLogin: function(data, successCallback, errorCallback) {
      $http.post(adminurl + "register/login", data).success(successCallback).error(errorCallback);
    },
    deleteApi: function(data, successCallback, errorCallback) {
      $http.post(adminURL + "api/delete", data).success(successCallback).error(errorCallback);
    },
    logout: function( successCallback, errorCallback) {
      $http.post(adminurl + "register/logout").success(successCallback).error(errorCallback);
    },

  };
});
