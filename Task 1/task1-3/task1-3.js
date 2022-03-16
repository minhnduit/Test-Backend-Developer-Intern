function anyAddUpp(arr,k){
    var output = [];
    var sum = 0;
    for(var i =0; i<arr.length; i++){
        for(var j =i+1; j<arr.length; j++){
            
            if((arr[i]+arr[j]) === k){
                output =[arr[i],arr[j]];
                sum = arr[i]+arr[j];
            } 
        }
    }
    if(output.length===0){
        return "there are no two number in given list can add up to " +k;
    } else {
        return true + " since " + output[0] + " + " +output[1] 
                + " = " + sum;
    }
}
var sampleArray = [1,2,3,4];
console.log(anyAddUpp(sampleArray,10))