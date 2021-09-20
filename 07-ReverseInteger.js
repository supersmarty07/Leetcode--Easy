const reverse = (x) => {
    let z;
    function helper(){
        let y = (Array.from(x.toString())).reverse();
        z= parseInt(y.join(''));
    }
   if(x===0) z=0;
    else if(x>0){
        helper();
        (z>2147483647) ? z=0:z; 
    }
    else if(x<0){
        x*= -1;
        helper();
        z*=-1;
        (z<-2147483648) ? z=0:z; 
    }
    return z;
    
};
