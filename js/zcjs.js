function EncryptedFolder() {
    //文件公开性 0 加密 1 公开

}

function readOnly() {
    //其他用户的读写性 0只读 1读写
    var isReadOnly;
    ReadOnly = document.getElementById("ReadOnly");
    if (ReadOnly.checked == true) {
        isReadOnly = 1;
    } else {
        isReadOnly = 0;
    }
    console.log(isReadOnly);
    return isReadOnly

}