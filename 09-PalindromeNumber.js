const isPalindrome = (x) => {
    const t = true;
    const f = false;
    if(x===0) return t;
    else if (x<0 || x%10===0) return f;
    else {
        let y = (Array.from(x.toString())).reverse();
        z= parseInt(y.join(''));
        if (x===z) return t;
        else return f;
    }
};
