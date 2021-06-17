window.onload=function(){
    var input=document.getElementById("SearchInput");
    var SearchBox=document.getElementById("SearchBox");
    // input.onfocus=function(){
    //     SearchBox.style.marginBottom="1.125rem";
    // }
    // input.onblur=function(){
    //     SearchBox.style.marginBottom="0rem";
    // }
    input.focus();

}
function checkFolders(){
    var LeftInformation=document.getElementById("LeftInformation");
    if(LeftInformation.style.left!="0px"){
        LeftInformation.style.left="0";
    }
    else{
        LeftInformation.style.left="-215px";
    }


}
    
