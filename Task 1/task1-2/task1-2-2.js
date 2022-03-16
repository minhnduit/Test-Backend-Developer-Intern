function RLE(text){
    var result = '';
    var count = 1;
    var index =  text[0];
    var value = '';

    for(var i = 1; i < text.length; i++){
        value = text[i];
        if(index === value) {
            count+= 1;
        } else {
            if(count ===1){result += index;}
            else{
            result += count + index;}
            count = 1;
            index = value;
        
        } 
    }
    if(count ===1){return result += value;}
            else{
                return result += count + value;}
    
}

console.log(RLE("AABBBCCCCCAADDDDPPPQRRRSTTQQSXYZ"));