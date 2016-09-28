module.exports = function (grunt) {
  
  'use strict';
  
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);
  
  var config = {
    dist: 'dist'
  };
  
  grunt.initConfig({
    
    config: config,
  
    jshint: {
      src: 'waiter.js'
    },
    
    clean: {
      options: {
        force: true
      },
      dist: '<%= config.dist %>'
    },
    
    uglify: {
      dist: {
        files: {
          '<%= config.dist %>/waiter.min.js': 'waiter.js'
        }
      }
    },
    
    sass: {
      options: {
        sourcemap: 'none'
      },
      dist: {
        files: {
          'waiter.css': 'waiter.scss'
        }
      }
    },
  
    copy: {
      js: {
        expand: true,
        dot: true,
        src: 'waiter.js',
        dest: '<%= config.dist %>/waiter.js'
      },
      css: {
        expand: true,
        dot: true,
        src: 'waiter.css',
        dest: '<%= config.dist %>/waiter.css'
      }
    },
  
    cssmin: {
      dist: {
        files: {
          '<%= config.dist %>/waiter.min.css': 'waiter.css'
        }
      }
    },
  
    processhtml: {
      dist: {
        files: {
          'index.html': ['index.template.html']
        }
      }
    },
  
    connect: {
      server: {
        options: {
          hostname: 'localhost',
          open: true,
          livereload: true,
          port: 9000,
          base: '.'
        }
      }
    },
    
    watch: {
      gruntfile: {
        files: 'Gruntfile.js',
        options: {
          reload: true
        }
      },
      
      js: {
        files: 'waiter.js',
        tasks: ['jshint', 'processhtml']
      },
      
      scss: {
        files: 'waiter.scss',
        tasks: ['sass', 'processhtml']
      },
  
      livereload: {
        options: {
          livereload: true
        },
        files: ['index.html']
      }
    }
  });
  
  grunt.registerTask('default', ['jshint', 'sass', 'processhtml', 'connect', 'watch']);
  grunt.registerTask('build', ['jshint', 'clean', 'sass', 'copy', 'uglify', 'cssmin']);
};