function sum(){
  
    var Email=document.myForm.email.value;
      var Email1=document.myForm.email.value.indexOf("@");
      var Email2=document.myForm.email.value.lastIndexOf(".");
      var password1=document.myForm.password1.value;
      var password2=document.myForm.password2.value;
      
  
   
     if( password1=="" || password2=="" ){
      alert("please enter your password\n" + "password cant be empty" );
       document.myForm.password1.focus();
       document.myForm.password2.focus();
       return false;
     }else if(Email1<1 || ((Email2-Email1) > 6) ||Email==""){
      alert("please enter correct EmailID,\n"+ Email + " is not correct"  );
      document.myForm.email.focus();
      return false;
   }
    else if(password1!==password2){
      alert( "'" + password1+ "'" +" dosnt match " + "'" + password2 + "'" +"in your password."  );
      document.myForm.password1.focus();
      document.myForm.password2.focus();
     return false;
     }else{
       window.location="https://olayinka02.github.io/math-clinic/";
     }
     
  
  };