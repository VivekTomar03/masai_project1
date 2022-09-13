let str="masai"  
let beg2="";
    for (let j=str.length-1;j>=0;j--){
        beg2=beg2+str[j];
        
    }
    
     if(str==beg2){
         console.log("Yes");
     }else{
         console.log("No");
    }