var arr_size=document.querySelector("#arr_size");
console.log(arr_size.value);

arr_size.addEventListener('click',function(){
    generatenewarray(parseInt(arr_size.value))
});
function generatenewarray(total){
    deleteChild();
    console.log(total)
    var array=new Array();
    for(let i=0;i<total;i++)
    {
        array.push(Math.floor(Math.random()*70)+1);
    }
    console.log(array);
const bars=document.querySelector("#bars");
for(let i=0;i<total;i++)
{
    const bar=document.createElement("div");
    bar.style.height=`${array[i]*3}px`;
    var cal=900/total;
    bar.classList.add('bar');
    //console.log(bar.classList)
    bar.classList.add('item');
    //console.log(bar.classList)
    
    bar.style.width=`${cal}px`;
    bar.classList.add(`barno${i}`);
    //console.log(bar.classList)
    bars.appendChild(bar);

}
}
document.getElementById("getarray").addEventListener('click', function(){
    console.log("From newArray " + arr_size);
    generatenewarray(arr_size.value);
});
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

function wait_till_finish(delay)
{
    return new Promise(resolve=>{
        setTimeout(()=>{resolve('')},delay);
    })
}

var delay=200;
var timeout=document.querySelector('#speed_input');
console.log("timeout value is",timeout.value);
timeout.addEventListener('click',function(){
    delay=350-timeout.value;
});
document.getElementById('time_complexity').style.display="block";
function disableSorting(){
    document.getElementById("bubble").disabled = true;
    document.getElementById("insertion_sort").disabled = true;
    document.getElementById("merge").disabled = true;
    document.getElementById("selection").disabled = true;
}
function enableSorting(){
    console.log("Enabling");
    document.getElementById("insertion_sort").disabled = false;
    console.log("enabled insertion");
    
    document.getElementById("bubble").disabled = false;
    console.log("enabled bubble");
    
    document.getElementById("merge").disabled = false;
    console.log("enabled merge");
    
        document.getElementById("selection").disabled = false;
        console.log("enabled selection");
    
}
function disableSize(){
    document.querySelector("#arr_size").disabled = true;
}

function enableSize(){
    
    document.querySelector("#arr_size").disabled = false;
}

function disablearray(){
    
    document.getElementById("getarray").disabled = true;
}

function enablearray(){
    
    document.getElementById("getarray").disabled = false;
}
    
