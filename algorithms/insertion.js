async function insertion_sort_func(nums){
    for(var i=1;i<nums.length;i++){
        for(var j=i;j>0;j--){
            await wait_till_finish(delay);
            console.log(j,nums[j].style.height,nums[j-1].style.height);
            nums[j].style.background='#b5009a';
            nums[j-1].style.background='yellow'
            if(parseInt(nums[j].style.height)<=parseInt(nums[j-1].style.height)){
                
                await wait_till_finish(delay);
                var temp=nums[j].style.height;
                nums[j].style.height=nums[j-1].style.height;
                nums[j-1].style.height=temp;
            }
            else{
                break;
            }
               
        }
        await wait_till_finish(delay);
        for(var k=0;k<i;k++){
            nums[k].style.background='#b5009a'
        }
           

    }
    await wait_till_finish(delay);
    for(var k=0;k<nums.length;k++){
        nums[k].style.background='green';
    }

}
const insertionsortbutton=document.getElementById('insertion_sort');
insertionsortbutton.addEventListener('click',async function(){
    document.getElementById('time_complexity').innerHTML="<span class='merge_complexity'><b>Insertion  Sort</b><br></br>Time complexity:<br></br>Best case:O(n)<br></br>Average case:O(n^2)<br></br>Worst case:O(n^2)</span>";
    document.getElementById('time_complexity').style.display='block';
    var nums=document.querySelectorAll('.bar');
    disableSorting();
    disableSize();
    disablearray();
    await insertion_sort_func(nums);
    
    enableSorting();
    enableSize();
    enablearray();
});
