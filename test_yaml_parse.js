/**
 * test YAML parse
 */

var fs = require('fs');
var yaml = require('js-yaml');


var input_file = 'Reaper_QuickStart.en.yaml';


fs.readFile(input_file, {encoding: 'utf-8'}, function(err, content){
  
  console.dir(yaml.safeLoad(content));
});