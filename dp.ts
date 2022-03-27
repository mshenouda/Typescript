import { time } from "console";
import { allowedNodeEnvironmentFlags } from "process";

function maxArea(height: number[]): number {
    return 0;
};

function hIndex(citations: number[]): number {
    
    if (citations.length <= 1 && citations[0] == 0)
        return 0;
    if (citations.length <= 1 && citations[0] != 0)
        return 1;

    citations.sort((a, b)=> a-b);
    let result: number = 0;
    let n: number = citations.length;
    for(let i in citations) {
        const bigger: number = n - Number(i) + 1;
        const smaller: number = Number(i) + 1;
        console.log(bigger, smaller);
        if (bigger == smaller) {
            result = Math.max(result, citations[i]);
        }
    }
    return result;
};


// function searchRange(nums: number[], target: number): number[] {

//     let result: number[] = [];
//     let left: number = 0;
//     let right: number = nums.length-1;
//     while(result.length < 2) {
//         let mid: number = Math.floor((left + right)/ 2);
//         if (nums[mid] == target) {
//             result.push(mid);
//         }
//         else if ( nums[mid] < target) 
//             left = mid + 1;
//         else if ( nums[mid] > target)
//             right = mid - 1;
//     };
//     return result;
// };

// const height = [1,8,6,2,5,4,8,3,7]
// const result: number = maxArea(height);
// console.log(`Result is ${result}`);

//const citations = [3,0,6,1,5];
// const citations = [1,3,1];
// const citations = [100]
//const citations = [0, 1];
// const result: number = hIndex(citations);
// console.log(`Result is ${result}`);

// const nums = [5,7,7,8,8,10], target = 8
// const result: number[] = searchRange(nums, target);
// console.log(`Result is ${result}`);

function canPartition(nums: number[]): boolean {
    if (nums.length < 2)
        return false;
    let sum: number = nums.reduce((a, b)=> a+b, 0);
    if (sum % 2 == 1)
        return false;
    sum = sum / 2;
    const rows = nums.length + 1;
    const columns = sum + 1;
    console.log(rows, columns);
    let dp: boolean[][] = [...Array(rows)].map(row => [...Array(columns)].map(x => false));
    
    dp[0][0] = true; 
    for(let i=1; i< rows; i++)
        dp[i][0] = false;
    
    for(let i=1; i<columns; i++) 
        dp[0][i] = false;
   
    for(let i=1; i<rows; i++) {
        for(let j=1; j<columns; j++)
        {
            if (j < nums[i-1])
                dp[i][j] = dp[i-1][j];
            else
                dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i-1]]    
        }
    }
    console.log(...dp);
    return dp[rows-1][columns-1];
};

// const nums: number[] = [1,5,11,5];
// const result: boolean = canPartition(nums);
// console.log(`Result is ${result}`);

function findTargetSumWays(nums: number[], target: number): number {
    const rows: number = nums.length + 1;
    const sum: number = nums.reduce((a, b) => a +b, 0);
    if (sum < target)
        return 0;

    const columns: number = Math.floor((sum + target) / 2) + 1;
    let dp: number[][] = [...Array(rows)].map(row => [...Array(columns)].map(x => 0));
    
    //1st column is always 1 because there's 1 way to form an empty set, regardless of items found. 
    for(let i=0; i<rows; i++)
        dp[i][0] = 1
 
    for(let i=1; i<rows; i++) {
        for(let j=1; j<columns; j++) {
            if (j < nums[i-1])
                dp[i][j] = dp[i-1][j]
            else
                dp[i][j] = dp[i-1][j] + dp[i-1][j-nums[i-1]] 
        }
    }
    console.log(...dp);
    return dp[rows-1][columns-1];
};

// const nums: number[] = [1,1,1,1,1], target = 3;
// const nums: number[] = [0,0,0,0,0,0,0,0,1], target = 1;
// const result: number = findTargetSumWays(nums, target);
// console.log(`Result is ${result}`);

function maxSumDivThree(nums: number[]): number {
    const rows: number = nums.length +1;
    const columns: number = nums.reduce((a, b)=> a +b, 0) + 1;
    let dp: number[][] = [...Array(rows)].map(row => [...Array(columns).map(x => 0)]);
    for(let i=0; i< columns; i++)
        dp[0][i] = 0;
    for(let i=0; i<rows; i++)
        dp[i][0] = 1;   

    // for(let i = 1; i< rows; i++)
    //    for(let j = 1; j < columns; j++)
    //         if ( j < nums[i-1]) 
    //             dp[i][j] = dp[i-1][j];
    //         else if ( j % 3 == 0)
    //             dp[i][j] = dp[i-1] + dp[i-1][j-nums[i-1]];
    //         else
    //             dp[i][j] = dp[i][j-1];
    console.log(...dp);
    return dp[rows-1][columns-1];
};
// const nums = [3,6,5,1,8];
// const nums =[1,2,3,4,4];
// const result: number = maxSumDivThree(nums);
// console.log(`Result is ${result}`);

function largestDivisibleSubset(nums: number[]): number[] {
    nums.sort((a, b) => a - b);
	
	// each index will store the subset with which the num at that index satisfies the property
	// initially adding the num itself as the subset
    const dp = new Array(nums.length);
    nums.forEach((num, idx) => dp[idx] = [num]);
    
    let maxLenSet = [];
    for(let i = 0; i < nums.length; ++i) {
        for(let j = 0; j < i; ++j) {
			// for each num[j] <= num[i], check if it satisfies the property and if adding num[i] to that subset is greater than the curr subset
            if((nums[i] % nums[j] === 0 || nums[j] % nums[i] === 0) && dp[i].length < dp[j].length + 1) {
                dp[i] = [...dp[j]].concat(nums[i]);
            }
        }
        if(maxLenSet.length < dp[i].length) {
            maxLenSet = dp[i];
        }
    }
    console.log(...dp);
    return maxLenSet;
};
// const nums = [1,2,3];
// const nums = [1,2,4,8,16];
//const nums= [3,17];
// const nums = [4,8,10,240];
// const result: number[] = largestDivisibleSubset(nums);
// console.log(`Result is ${result}`);


function convertStr2Num(nums: string) {
    const num: number =  Number(nums);
    // console.log("Num", num)
    return num;
}


function restoreIpAddresses(s: string): string[] {
    const arr: string[] = s.split("");
    console.log("Array", arr);
    let tmp: string = "";
    let result: string = "";
    function dfs(arr: string[], count:number) {
        for(let i =0; i<arr.length; i++)
        {   
            console.log(...arr, count);
            tmp += arr[i];
            const val = convertStr2Num(tmp);
            if (count <= 4 &&  val>= 0 && val<= 255) {                    
                arr.splice(i, 1); 
                dfs(arr, count+1);
                tmp = tmp.slice(0, -1);
                console.log("Tmp",  tmp);
                result += tmp + ".";
                tmp = "";
            }
        }
    }
    dfs(arr, 0);
    console.log(result);
    return arr;
};
const s = "101023";
const result: string[] = restoreIpAddresses(s);
console.log(`Result is ${result}`);


