function get()
{
    tim=setTimeout(get1,3);
}
function get1()
{
    var x = document.getElementById('tt').value;
    var n=document.getElementById("os");
    n.innerHTML='';
    var res =[];
    var s='';
    for(i=0;i<x.length;i++)
    {
        s=s+x[i];
        if(x[i]=='।' || x[i]=='?' || x[i]=='.')
        {
            res.push(s);
            s='';
        }
    }
    console.log(res);
    for(var i=0;i<res.length;i++)
    {
        var m=res[i]+'\n';
        const para = document.createElement("p");
        para.className='osc';
        para.id='p'+i;
        const node = document.createTextNode(m);
        para.appendChild(node);

        const element = document.getElementById("os");
        element.appendChild(para);
        //document.getElementById('os').value+=m;
    }
    const buttons = document.getElementsByTagName("p");
    const buttonPressed = e => {
        //console.log(e.target.id);  // Get ID of Clicked Element
        var i=e.target.id;
        var sentence=document.getElementById(i).innerHTML;
        console.log(sentence);
        var m=document.getElementById('hi');
        m.innerHTML=sentence;
        const api_url='https://127.0.0.1:5000/'+sentence;
        getapi(api_url);
    }
    for (let t of buttons) {
        t.addEventListener("click", buttonPressed);
    }
    async function getapi(url) {
        const response = await fetch(url,{
            method: 'GET',
            headers: {
              Accept: 'application/json',
    }});
        var data = await response.json();
        console.log('result is: ', JSON.stringify(result, null));
    }
}
