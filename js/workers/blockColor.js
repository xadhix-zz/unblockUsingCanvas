/**
 * Created with JetBrains WebStorm.
 * User: I069162
 * Date: 8/4/13
 * Time: 12:03 PM
 * To change this template use File | Settings | File Templates.
 */
var console = console ? console : {};

console.debug = function (message) {
	//self.postMessage(message);
};

onmessage = function (event) {
	console.debug("Worker Executed?");
	if (event.data.imagedata) {

		self.postMessage({"averageColors": {"r": r, "g": g, "b": b}});
	}
	console.debug(event.data);
	console.debug("Worker Executed.");
};