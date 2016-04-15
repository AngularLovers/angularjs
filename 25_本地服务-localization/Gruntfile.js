module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nggettext_extract: {
      pot: {
        files: {
          'po/template.pot': ["app/*.html"]
        }
      }
    },
    nggettext_compile: {
      all: {
        files: {
          'app/scripts/translations.js': ['po/*.po']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-angular-gettext');

  // Default task(s).
  grunt.registerTask('default', ['nggettext_extract', 'nggettext_compile']);

};