requirejs.config({
    baseUrl: '../js',
    paths: {
        player: '../test/player',
		QUnit: 'https://code.jquery.com/qunit/qunit-2.4.0'
    }
});

// starts loading the main app file
requirejs(['player']);
