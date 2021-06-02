function swap(var1,var2){
    var temp=var1.style.height;
    var1.style.height=var2.style.height
    var2.style.height=temp;
}
async function selection_sort_func(){
    var nums = document.querySelectorAll(".bar");
    for(let i = 0; i < nums.length; i++){
        let mini= i;
        nums[i].style.background = 'red';
        for(let j = i+1; j < nums.length; j++){
            nums[j].style.background = 'yellow';
            await wait_till_finish(delay);
            if(parseInt(nums[j].style.height) < parseInt(nums[mini].style.height)){                
                if(mini != i){
                    nums[mini].style.background = '#b5009a';
                }
                mini = j;
            } 
            else{
                nums[j].style.background = '#b5009a';
            }   
        }
        await wait_till_finish(delay);
        swap(nums[mini], nums[i]);
        nums[mini].style.background = '#b5009a';
        nums[i].style.background = 'green';
    }
}

const selectionsortbutton = document.getElementById('selection');
selectionsortbutton.addEventListener('click', async function(){
    document.getElementById('time_complexity').innerHTML="<span class='merge_complexity'><b>Selection Sort</b><br></br>Time complexity:<br></br>Best case:O(n^2)<br></br>Average case:O(n^2)<br></br>Worst case:O(n^2)</span>";
    document.getElementById('time_complexity').style.display='block';
    
    disableSorting();
    disableSize();
    disablearray();
    
    await selection_sort_func();
    enableSorting();
    enableSize();
    enablearray();
});