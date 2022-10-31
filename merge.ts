
function merge (collection_1: number[], collection_2 : number[]) : number[]
{
    // init index starter
    var i_col_1:number = 0;
    var i_col_2:number = 0;
    var i:number = 0;
    var ans:number[] = [];

    // loop to insert less than value to ans (end when some array is end)
    while(i_col_1 < collection_1.length && i_col_2 < collection_2.length){
        if (collection_1[i_col_1] < collection_2[i_col_2]){
            ans[i] = collection_1[i_col_1];
            i_col_1 += 1;
            i += 1;
        }
        else{
            ans[i] = collection_2[i_col_2];
            i_col_2 += 1;
            i += 1;
        }
    }

    // put leaving element to the end of ans array
    if (i_col_1 < collection_1.length){
        while(i_col_1 < collection_1.length){
            ans[i] = collection_1[i_col_1];
            i_col_1 += 1;
            i += 1;
        }
    }
    if (i_col_2 < collection_2.length){
        while(i_col_2 < collection_2.length){
            ans[i] = collection_2[i_col_2];
            i_col_2 += 1;
            i += 1;
        }
    }

    return ans;
}

// case equal size
let test1_a:number[] = [0,2,4,5,8,9];
let test1_b:number[] = [0,1,2,3,4,5];
console.log(merge(test1_a,test1_b).join());

// case sizeA < sizeB 
let test2_a:number[] = [0,2,4,5];
let test2_b:number[] = [0,1,2,3,4,5];
console.log(merge(test2_a,test2_b).join());

// case sizeB < sizeA  
let test3_a:number[] = [0,2,4,5,99];
let test3_b:number[] = [0,1,2];
console.log(merge(test3_a,test3_b).join());

// case empty set
let test4_a:number[] = [];
let test4_b:number[] = [];
console.log(merge(test4_a,test4_b).join());

// case 1 empty set  
let test5_a:number[] = [0,2,4,5,99];
let test5_b:number[] = [];
console.log(merge(test5_a,test5_b).join());


