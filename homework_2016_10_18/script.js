var obj = {
    myPop: function() {
        var result = this[this.length - 1];
        this.length = this.length-1;
        return result;
    },

    myPush: function() {
        for (var i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
        }
        return this.length;
    },

    mySlice: function(from = 0, to = this.length) {
        var result = [];
        if (from < 0) from += this.length;
        if (to < 0) to += this.length;
        for (var i = 0, j = from; j < to; i++, j++) {
            result[i] = this[j];
        }
        return result;
    },

    myJoin: function(separator = ',') {
        var result = '';
        for (var i = 0; i < this.length; i++) {
            result += this[i].toString();
            if (i < this.length - 1)
                result += separator;
        }
        return result;
    },

    myReverse: function() {
        var newArr = [];
        for (var i = 0; i < this.length; i++) {
            newArr[this.length - 1 - i] = this[i];
        }
        return newArr;
    }

};

//redefining Array methods
Array.prototype.pop = obj.myPop;
Array.prototype.push = obj.myPush;
Array.prototype.slice = obj.mySlice;
Array.prototype.join = obj.myJoin;
Array.prototype.reverse = obj.myReverse;

var arr = ['a', 'b', 'c', 4, 5, 6];

console.log('pop:');
console.log(obj.myPop.call(arr));
console.log(arr);
console.log(arr.pop());
console.log(arr);

console.log('\npush:');
console.log(obj.myPush.call(arr, 35));
console.log(arr);
console.log(arr.push('d'));
console.log(arr);

console.log('\nslice:');
console.log(obj.mySlice.call(arr, 0, 2));
console.log(arr.slice(-3));

console.log('\njoin:');
console.log(obj.myJoin.call(arr, '|'));
console.log(arr.join(' '));

console.log('\nreverse:');
console.log(obj.myReverse.call(arr));
console.log(arr.reverse());


Number.prototype.sum = function (a) {
    return this + a;
};

console.log('\nsum:')
var x = 4;
console.log(x.sum(3));