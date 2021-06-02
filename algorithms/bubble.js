function swap(var1,var2){
    var temp=var1.style.height;
    var1.style.height=var2.style.height
    var2.style.height=temp;
}

async function bubblesortfunc(){
    document.getElementById('time_complexity').innerHTML="<span class='merge_complexity'><b>Bubble Sort</b><br></br>Time complexity:<br></br>Best case:O(n^2)<br></br>Average case:O(n^2)<br></br>Worst case:O(n^2)</span>";
    document.getElementById('time_complexity').style.display="block";

    var nums=document.querySelectorAll(".bar");
    console.log(nums[0]);
    for(let i=0;i<nums.length;i++)
    {
        for(let j=0;j<(nums.length-i-1);j++)
        {   console.log(nums[j].style.height,nums[j+1]);
            nums[j].style.background='yellow';
            nums[j+1].style.background='yellow';
            if(parseInt(nums[j].style.height)>parseInt( nums[j+1].style.height)){
                await wait_till_finish(delay);
                swap(nums[j],nums[j+1])
            }
            nums[j].style.background='#3489e3';
            nums[j+1].style.background='#3489e3';
        }
        nums[nums.length-i-1].style.background='green';
    }

}

bubblesort=document.getElementById('bubble');
bubblesort.addEventListener('click',async function()
{
    disableSorting();
    disableSize();
    disablearray();
    
    await bubblesortfunc();
    enableSorting();
    enableSize();
    enablearray();
});
