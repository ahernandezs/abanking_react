module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-sonar-runner');
	grunt.initConfig({
		sonarRunner: {
			analysis: {
				options: {
					debug: true,
					separator: '\n',
					sonar: {
						host: {
							url: 'http://localhost:9000'
						},
						projectKey: 'sonar:abanking_omega:1.0.0',
						projectName: 'Abanking_omega',
						projectVersion: '1.0.0',
						sources: ['src'].join(','),
						language: 'js',
						sourceEncoding: 'UTF-8',
						javascript: {
							lcov: {
								reportPath: 'reports/lcov.info'
							},
							jstestdriver:{
								reportsPath: 'reports'
							}
						}
					}
				}
			}
		}
	});
}
