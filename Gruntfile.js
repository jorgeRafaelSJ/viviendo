module.exports = function(grunt) {

		grunt.initConfig({
			// GRUNT CONTRIB WATCH
			watch: {
				build: {
					tasks: ["concat:build", "uglify"],
					files: [
						'/node_modules/*',
						'app/index.js',
						'app/js/controllers/*.js',
						'app/js/directives/*.js',
						'app/js/services/*.js',
						'app/js/factories/*.js'
					]
				}
			},
			// GRUNT CONTRIB UGLIFY
			uglify: {
	      files: {
	        'public/js/build.min.js': ['app/js/build.js']
	      }
			},
			// GRUNT CONTRIB CONCAT
			concat: {
				build: {
					files: {
						'public/js/build.js': [
							'app/index.js',
							'app/js/directives/*.js',
							'app/js/services/*.js',
							'app/js/controllers/*.js',
							'app/js/factories/*.js'
						]
					}
				}
			}
		});

		grunt.loadNpmTasks('grunt-contrib-concat');
		grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.loadNpmTasks('grunt-contrib-uglify');
};