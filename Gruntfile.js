module.exports = function(grunt) {

		grunt.initConfig({
			// GRUNT CONTRIB WATCH
			watch: {
				build: {
					tasks: ["concat:source", "babel", "concat:add_vendors" ,"uglify:build"],
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
				source: {
					files: {
						'public/js/build_es6.js': [
							//app files
							'app/index.js',
							'app/directives/*.js',
							'app/services/*.js',
							'app/controllers/*.js',
							'app/factories/*.js'
						]
					}
				},
				add_vendors: {
					files: {
						'public/js/build.js': [
							//vendor files
							'node_modules/angular/angular.min.js',
							'node_modules/angular-ui-router/release/angular-ui-router.min.js',
							//babelified source code
							'public/js/build_es5.js'
						]
					}
				}
			},

			babel: {
			    options: {
			        sourceMap: true,
			        presets: ['babel-preset-es2015']
			    },
			    dist: {
			        files: {
			            'public/js/build_es5.js': 'public/js/build_es6.js'
			        }
			    }
			}
		});

		grunt.loadNpmTasks('grunt-babel')
		grunt.loadNpmTasks('grunt-contrib-concat');
		grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.loadNpmTasks('grunt-contrib-uglify');
};