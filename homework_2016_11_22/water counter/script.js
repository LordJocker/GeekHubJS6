function countWater() {
    var arr = input();
    var arrayWater = [];
    for (var i = 0; i < arr.length; i++) {
        arrayWater[i] = 0;
    }
    var water = 0;

    (function getWater() {
        var leftMax = 0;
        var rightMax = 0;
        var leftIndex = 0;
        var rightIndex = arr.length - 1;

        while (leftIndex < rightIndex) {
            if (arr[leftIndex] > leftMax) {
                leftMax = arr[leftIndex];
            }
            if (arr[rightIndex] > rightMax) {
                rightMax = arr[rightIndex];
            }
            if (leftMax >= rightMax) {
                water += rightMax - arr[rightIndex];
                arrayWater[rightIndex] = rightMax - arr[rightIndex];
                rightIndex--;
            } else {
                water += leftMax - arr[leftIndex];
                arrayWater[leftIndex] = leftMax - arr[leftIndex];
                leftIndex++;
            }
        }
        return water;
    })();

    print(arr, arrayWater, water);
}

function input() {
    var input = document.getElementById("input");
    var result = input.value.toString().split(",");
    input.value = "";
    return result;
}

function print(arr, arrWater, water) {
    document.getElementById("arrWater").innerText = "In array = " + arr;
    document.getElementById("amountWater").innerText = "Amount of water = " + water;
}
