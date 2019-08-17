function encriptaMsje()
{
    var p=document.getElementById("msje").value;
    var llave=document.getElementById("llave").value;

    if (document.getElementById("llave").value.length==0)
    {
        alert("La llave está vacía");

    }
    else
    {
        var key = convierteLlave(llave);
        var msje=convierteTexto(p);
        console.log(key);
        console.log(msje);
        var encripcion=encripta(key,msje);
        document.getElementById("msjeenc").value=""+encripcion;
        console.log(encripcion);
        
    }



}

function convierteLlave(key)
{
    var result =[];
    for(var i=0;i<key.length;i++)
    {
        var c=key.charCodeAt(i);
        result.push(c-97);
    }
    return result;
}

function convierteTexto(text)
{
    var result=[];
    for(var i=0; i<text.length;i++)
    {
        var c=text.charCodeAt(i);
        result.push(c-97);
    }
    return result;
}
function encripta(key,msg)
{
    var output="";
    var arrout=[];
    //hago un arreglo a donde pushee los numeros y luego hago otro for que recorra el arreglo y cree un string con los numeros de ese arreglo
    for(var i=0,j=0;i<msg.length;i++)
    {
        if(msg[i]<0)
        {
            arrout[i]=32;
        }
        else
        {
            arrout[i]=(msg[i]+(key[j%(key.length)]))%26;
            j++;
        }
        
    }
    console.log(arrout);

    for(var k=0;k<arrout.length;k++)
    {
        if(arrout[k]==32)
        {
            output+=String.fromCharCode(32);
        }
        else
        {
            output+=String.fromCharCode((arrout[k])+97);
        }
        
    }

    return output;

}