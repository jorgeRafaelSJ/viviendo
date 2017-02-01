module.exports = function(grunt) {

		grunt.initConfig({
			// GRUNT CONTRIB WATCH
			watch: {
				build: {
					tasks: ["concat:build", "uglify:build"],
					files: [
						'app/index.js',
						'app/controllers/*.js',
						'app/directives/*.js',
						'app/services/*.js',
						'app/factories/*.js'
					]
				}
			},
			// GRUNT CONTRIB UGLIFY
			uglify: {
				build: {
	      	files: {
	        	'public/js/build.min.js': ['public/js/build.js']
	      	}
	    	}
			},
			// GRUNT CONTRIB CONCAT
			concat: {
				build: {
					files: {
						'public/js/build.js': [
							//vendor files
							'node_modules/angular/angular.min.js',
							'node_modules/angular-ui-router/release/angular-ui-router.min.js',
							//app files
							'app/index.js',
							'app/directives/*.js',
							'app/services/*.js',
							'app/controllers/*.js',
							'app/factories/*.js'
						]
					}
				}
			}
		});

		grunt.loadNpmTasks('grunt-contrib-concat');
		grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.loadNpmTasks('grunt-contrib-uglify');
};