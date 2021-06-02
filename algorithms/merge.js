async function mergehelper(nums,mid_pointer,left_pointer,right_pointer)
{   
    const size_left=mid_pointer-left_pointer+1;
    const size_right=right_pointer-mid_pointer;
    let left_array=new Array(size_left);
    let right_array=new Array(size_right);
    for(let i=0;i<size_left;i++) //appending all the elements of left side of array in new array
    {
        await wait_till_finish(delay);
        nums[left_pointer+i].style.background='yellow';
        left_array[i]=nums[left_pointer+i].style.height;
    }
    for(let i=0;i<size_right;i++) //appending all the elements of right side of array in new array
    {
        await wait_till_finish(delay);
        nums[mid_pointer+i+1].style.background='red';
        right_array[i]=nums[mid_pointer+i+1].style.height;
    }
    console.log("left array is ",left_array)
    console.log("right array is ",right_array)
    await wait_till_finish(delay);
    var i=0;//left array pointer
    var j=0;//right array poiner
    var k=left_pointer;//sorted array pointer
    while(i<size_left && j <size_right){
        console.log("nums now is",nums);
        await wait_till_finish(delay);
        if(parseInt(left_array[i])<=parseInt(right_array[j])){
            console.log("inside if left<right",parseInt(left_array[i]),parseInt(right_array[j]))
            if(size_left+size_right==nums.length){
                nums[k].style.background='green';
            }
            
            else{
                nums[k].style.background='#3489e3';
            }
            nums[k].style.height=left_array[i];
            i++;
            k++;
           
        }
        else{
            console.log("inside else left>right",parseInt(left_array[i]),parseInt(right_array[j]))
            
            if(size_left+size_right==nums.length){
                nums[k].style.background='green';
            }
            else{
                nums[k].style.background='#3489e3';
            }
            nums[k].style.height=right_array[j];
            j++;
            k++;
           
        }
    }
        while(i<size_left){ //for the numbers remaining at left if size of left_array>right_array
            await wait_till_finish(delay);
            if(size_left+size_right==nums.length){
                nums[k].style.background='green';
            }
            else{
                nums[k].style.background='#3489e3'

            }
            nums[k].style.height=left_array[i];
            i++;
            k++;

        }
        while(j<size_right){ //for the numbers remaining at right if size of left_array<right_array
            await wait_till_finish(delay);
            if(size_left+size_right==nums.length){
                nums[k].style.background='green';
            }
            else{
                nums[k].style.background='#3489e3'

            }
            nums[k].style.height=right_array[j];
            j++;
            k++;

        }



        }
async function mergesortfunc(nums,left,right)
{
    var middle=parseInt((left+right)/2);
    if(left>=right){
        return
    }
    await mergesortfunc(nums,left,middle);
    await mergesortfunc(nums,middle+1,right);
    await mergehelper(nums,middle,left,right);
}
const mergesortbutton=document.getElementById('merge');
mergesortbutton.addEventListener('click',async function(){
    document.getElementById('time_complexity').innerHTML="<span class='merge_complexity'><b>Merge Sort</b><br></br>Time complexity:<br></br>Best case:O(nlogn)<br></br>Average case:O(nlogn)<br></br>Worst case:O(nlogn)</span>";
    document.getElementById('time_complexity').style.display='block';
    var nums=document.querySelectorAll('.bar');
    var l=0;
    var r=parseInt(nums.length)-1;

    disableSorting();
    disableSize();
    disablearray();
    
    await mergesortfunc(nums,l,r);
    console.log('finished');
    enableSorting();
    enableSize();
    enablearray();
});
