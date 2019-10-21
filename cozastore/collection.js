function teja(){
    var info = 
    {
    id : JSON.parse(localStorage.getItem("a")),
    id1 :JSON.parse(localStorage.getItem("b")),
    id2 : JSON.parse(localStorage.getItem("c")),
    id3 : JSON.parse(localStorage.getItem("d")),
    };

    document.getElementById("teja").value = JSON.stringify(info);
}