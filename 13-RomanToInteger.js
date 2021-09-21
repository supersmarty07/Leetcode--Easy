const romanToInt = s => {
    let array=[];
    const obj1 = {'I': 1, 'V':5,'X':10, 'L': 50,  'C':100,  'D':500, 'M':1000};
   
    for(let i=0; i<s.length; i++){
        if(obj1[s[i]]<obj1[s[i+1]]){
            let a= obj1[s[i+1]]-obj1[s[i]];
            array.push(a);
            i++;
            continue;           
        }
        else array.push(obj1[s[i]]);
    }
    return array.reduce((a, b) => a + b, 0);
}
