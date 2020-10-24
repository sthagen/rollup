var computedProperties = (function (exports) {
	'use strict';

	var foo = 'foo';
	var bar = 'bar';
	var baz = 'baz';
	var bam = 'bam';

	var x = { [foo]: 'bar' };

	class X {
		[bar] () {}
		get [baz] () {}
		set [bam] ( value ) {}
	}

	exports.X = X;
	exports.x = x;

	Object.defineProperty(exports, '__esModule', { value: true });

	return exports;

}({}));
