 module.exports = function () {    
     var instanceRoot = "C:\\inetpub\\wwwroot\\jan2018";
  var config = {
    websiteRoot: instanceRoot + "\\Website",
    sitecoreLibraries: instanceRoot + "\\Website\\bin",
    licensePath: instanceRoot + "\\Data\\license.xml",
    solutionName: "YasConnect", 
    buildConfiguration: "Debug",
    buildPlatform: "Any CPU",
    buildToolsVersion: 14.0, //change to 15.0 for VS2017 support
    publishPlatform: "AnyCpu",
    runCleanBuilds: false
  };
  return config;
}

//module.exports = function () {
//    var instanceRoot = "D:\\MiralWeb\\miralaudit\\Website";
//    var config = {
//        websiteRoot: instanceRoot + "\\",
//        sitecoreLibraries: instanceRoot + "\\",
//        licensePath: instanceRoot + "\\Data\\license.xml",
//        solutionName: "YasConnect",
//        buildConfiguration: "Debug",
//        buildPlatform: "Any CPU",
//        buildToolsVersion: 14.0, //change to 15.0 for VS2017 support
//        publishPlatform: "AnyCpu",
//        runCleanBuilds: false
//    };
//    return config;
//}
