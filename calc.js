function btnclk(val)
{
    document.getElementById("scrn").value=document.getElementById("scrn").value+val;
}
function clre()
{
    document.getElementById("scrn").value=""
}
function tot()
{
    var text=document.getElementById('scrn').value
    var rslt=eval(text)
        document.getElementById('scrn').value=rslt

}

function back() {
    var value = document.getElementById("scrn").value;
    document.getElementById("scrn").value = value.substr(0, value.length - 1);
}


 



 

 

    
    
