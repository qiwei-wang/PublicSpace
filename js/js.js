window.onload = function() {
    var input = document.getElementById("SearchInput");
    var SearchBox = document.getElementById("SearchBox");
    // input.onfocus=function(){
    //     SearchBox.style.marginBottom="1.125rem";
    // }
    // input.onblur=function(){
    //     SearchBox.style.marginBottom="0rem";
    // }
    // input.focus();

}
var navright2 = document.getElementById("navright2");
var navright = document.getElementById("navright");
var usern = document.getElementById("username");


// function Detectlogin() {
//     var d = getCookie("userinfo");
//     if (d == "") {
//         navright.className = 'navright'
//         navright2.className = 'cknavright2'


//         Swal.fire(
//             '未检测到登录,部分功能已受限',
//             '请先登录',
//             'info'
//         )
//     } else {
//         navright2.className = 'navright2'
//         navright.className = 'cknavright'

//         var data = JSON.parse(d);
//         var Username = data.userName;
//         usern.innerHTML = Username;
//         console.log("当前登录用户:" + data.userName)

//     }
// }
// Detectlogin();
var dowButton = document.getElementById("dowButton");
var shareButton = document.getElementById("shareButton");
var deleteButton = document.getElementById("deleteButton");
var CancelShareButton = document.getElementById("CancelShareButton");

function checkFolders(obj) {
    var LeftInformation = document.getElementById("LeftInformation");

    LeftInformation.style.left = "0";
    dowButton.style.left = "-200px";
    shareButton.style.top = "-100px";
    shareButton.style.left = "0px";
    CancelShareButton.style.top = "-100px";
    // deleteButton.style.top = "-100px";
    var Checkspan = document.getElementById("CheckSpan");
    var d = obj;
    var span = d.children[1];
    if (span.innerHTML.length > 6) {
        Checkspan.innerHTML = span.innerHTML.slice(0, 6) + '..';
    } else {
        Checkspan.innerHTML = span.innerHTML
    }

    console.log("当前选中的文件夹span:" + Checkspan.innerHTML);

    //阻止父级元素一直触发onclick
    var ev = window.event || arguments.callee.caller.arguments[0];

    if (window.event) ev.cancelBubble = true;
    else {
        ev.stopPropagation();
    }

}

function checkFile(obj) {
    var LeftInformation = document.getElementById("LeftInformation");
    var Checkspan = document.getElementById("CheckSpan");
    // dowButton.style.position = "static";
    dowButton.style.left = "0px";
    dowButton.style.top = "-35px";
    shareButton.style.top = "0px";
    shareButton.style.left = "-200px";
    // deleteButton.style.top = "-100px";
    var d = obj;

    var span = d.children[1];
    if (span.innerHTML.length > 6) {
        Checkspan.innerHTML = span.innerHTML.slice(0, 6) + '..';
    } else {
        Checkspan.innerHTML = span.innerHTML;
    }

    console.dir("当前点中的文件span" + Checkspan.innerHTML);
    LeftInformation.style.left = "0";
    //阻止父级元素一直触发onclick
    var ev = window.event || arguments.callee.caller.arguments[0];

    if (window.event) ev.cancelBubble = true;
    else {
        ev.stopPropagation();
    }

}

function backLeft() {
    var LeftInformation = document.getElementById("LeftInformation");
    LeftInformation.style.left = "-230px";
}

function checkpage(obj) {
    var page = document.getElementById("page");
    if (page.className = "pagelink") {
        page.className = "pagelinkch";
    } else {
        page.className = "pagelink";
    }
}

// function CFolderPopup() {
//     var encryption = document.getElementById("encryption");
//     var FolderpassWord = document.getElementById("FolderpassWord");
//     var encryptionvalue = document.getElementById("encryptionvalue");
//     if (encryption.checked == true) {
//         FolderpassWord.className = "FolderpassWord";
//         encryptionvalue.value = 0;
//     } else {
//         encryptionvalue.value = 1;
//         FolderpassWord.className = "chFolderpassWord"
//     }
// }

// function CFolderPopup2() {
//     var readonly = document.getElementById("readonly");
//     var readonlyvalue = document.getElementById("readonlyvalue");
//     if (readonly.checked == true) {
//         readonlyvalue.value = 0;
//     } else {
//         readonlyvalue.value = 1;
//         FolderpassWord.className = "chFolderpassWord"
//     }
// }

function encryptionbox() {
    var encheckbox = document.getElementById("encryption")
    var FolderPassBox = document.getElementById("FolderPassBox")
    if (encheckbox.checked == true) {
        FolderPassBox.className = "chFolderPassBox"
    } else {
        FolderPassBox.className = "FolderPassBox"
    }
}

function Popupinformation() {
    var PopupCFolder = document.getElementById("PopupCFolder");
    PopupCFolder.style.left = "36%";
    PopupCFolder.style.opacity = "1";
}

function comeback() {
    var PopupCFolder = document.getElementById("PopupCFolder");
    // var PopupCFolder = document.getElementById("SigninWindow");
    PopupCFolder.style.left = "100%";
    PopupCFolder.style.opacity = "0";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function delCookie() {
    document.cookie = "userinfo=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    // Detectlogin();
    Swal.fire({
        title: '成功退出登录',
        type: 'success',
        confirmButtonText: '确定'
    })
}




// function checkCookie() {
//     var user = getCookie("username");
//     if (user != "") {
//         alert("Welcome again " + user);
//     } else {
//         user = prompt("Please enter your name:", "");
//         if (user != "" && user != null) {
//             setCookie("username", user, 365);
//         }
//     }
// }
// checkCookie();