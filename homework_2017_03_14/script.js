function perform() {
    let args = arguments[1]();

    return {
        then: function(f) {
            if (typeof f === 'function') {
                args = f(args);
                return this;
            }
        }
    }
}

perform(null, function() {
	var param = 1;
	console.log(param);
	return param;
})
.then(function(param) {
	console.log(++param);
	return param;
})
.then(function(param) {
	console.log(++param);
	return param;
});
