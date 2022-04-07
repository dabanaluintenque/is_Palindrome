
function isPalindrome(word){

    let firstletter = 0;

    let lastletter = word.length-1;


  let startAtEnd ;
// return lastletter;

  

     while(firstletter < lastletter){

      temp  = word[firstletter];

      startAtEnd = word[lastletter];
      

         console.log("temp:" +temp);

         console.log("startAtEnd: " + startAtEnd);

         if(temp === startAtEnd){

             console.log("isPalindrome");
         }

         else{

             console.log("isnotPalindrome");
         }


         temp ++;

         startAtEnd --;
         break;

        // word[firstletter++]= word[lastletter];

        // word[lastletter--] = temp;  
     

     }

   

   
}


let func = isPalindrome('madam');

 //console.log("first letter is:" +func);

