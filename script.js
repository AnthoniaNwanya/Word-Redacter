
function redactNow() {
      let string;
    let today = new Date()
    let timer = today.getMilliseconds() + "ms" 
    codedWord = document.getElementById("enterword").value;
    message = document.getElementById("entermessage").value;
    replaceWord = document.getElementById("replace").value;
  
    let regex = new RegExp(codedWord, 'gimu');
if(option == "asterisk"){
    string  =  message.replace(regex, "*".repeat (codedWord.length));
    }
    else if(option == "characters"){
        string = message.replace(regex, "$#?".repeat(codedWord.length));
    }
    else if (option == "replaceword"){
    string = message.replace(regex, replaceWord);
    } 
    
 document.getElementById("output").value = string;
    document.getElementById("scannedinput").value = string.split(/\s+/).length;
    document.getElementById("matchedinput").value = codedWord.split(/\s+/).length;
    document.getElementById("scrambledinput").value = codedWord.length
    document.getElementById("timer").value = timer
   
      

   
   
    


}


function getOption(element){
        option = element.value;
        if(option ==="esc")
        return
        console.log(option)
    }

  function clearField(){
       document.getElementById("enterword").value = "" ;
       document.getElementById("entermessage").value = "";
       document.getElementById("replace").value = "" ;
        document.getElementById("output").value = ""
        document.getElementById("scannedinput").value = "";
        document.getElementById("matchedinput").value = "";
        document.getElementById("scrambledinput").value = "";
        document.getElementById("timer").value = "" ;
    }

      function copyText() {
    var copyOutput= document.getElementById("output").value;
    navigator.clipboard.writeText(copyOutput).then(() => {
    
        alert("Copied to clipboard");
    });
  }
