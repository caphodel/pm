module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		less : {
			production : {
				options : {
					cleancss : true,
					banner : '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> Copyright <%= pkg.author %> */\n'
				},
				files : {
					"css/main.css" : "less/main.less"
				}
			}
		}
    });

};
