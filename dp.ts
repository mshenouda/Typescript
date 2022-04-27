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

// const s = "101023";
// const result: string[] = restoreIpAddresses(s);
// console.log(`Result is ${result}`);

function addSpaces(s: string, spaces: number[]): string {
    let result: string = "";
    let j: number = 0;
    for(let i=0; i< s.length; i++) {
        if (spaces[j] == i)
        {
            result += ' ';
            j++;            
        }
        result += s[i];
    }
    return result;
};
// const s = "LeetcodeHelpsMeLearn", spaces = [8,13,15];
// const s = "spacing", spaces = [0,1,2,3,4,5,6]
// const s = "icodeinpython", spaces = [1,5,7,9]
// const result: string = addSpaces(s, spaces);
// console.log(`Result is ${result}`);
function maxSubsequence(nums: number[], k: number): number[] {
    let sorted: any[] = nums.map((value, index) => {
        let obj: any = {};
        obj["index"] = index
        obj["value"] = value;
        return obj;
    }).sort((a, b)=> b.value - a.value);

    sorted.length = k

    const result = sorted.sort((a, b)=> a.index - b.index).map(x => x["value"]);
    return result;
};

// const  nums = [-1,-2,3,4], k = 3;
// const result: number[] = maxSubsequence(nums, k);
// console.log(`Result is ${result}`);
function specialArray(nums: number[]): number {
    let result: number = 0;
    nums.sort((a, b)=> a -b);
    const n: number = nums.length;
    let dp: number[] = [...Array(n)].map(x => 0);
    dp[0] = n;
    for(let i=0; i<=n; i++) {
        let j: number = n-1;
        let counter: number = 0;
        while(nums[j] >= i) {
            j--;
            counter++;
        }
        if ( counter == i)
            return i;
    }
    return -1;
};
// const nums = [3,5];
// const nums = [0,4,3,0,4];
// const nums = [0, 0];
// const result: number = specialArray(nums);
// console.log(`Result is ${result}`)

function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
    arr2.sort((a, b)=> a -b);
    let counter: number =0;

    for(let num of arr1) {
        let flag: boolean = false;
        for(let v = num -d; v <= num + d; v++) {
            if (arr2.includes(v)) {
                flag = true;
                break;
            }
        }
        if (flag)
            counter++;
    }
    return arr1.length - counter;
};
// const arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2;
// const arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3;
// const arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6;
// const result: number = findTheDistanceValue(arr1, arr2, d);
// console.log(`Result is ${result}`);
function longestPalindrome(s: string): number {

    const letters: any = new Set(s.split(""));
    let maxLength: number = 0;
    let maxOddLength: number = 0;
    for(let letter of letters) {
        const result = s.split("").map((e, i) => {if (e === letter) return e;}).filter(Boolean).length;
        const partners = Math.floor(result / 2)*2;
        maxLength += partners; 
        if (maxLength % 2 == 0 && result % 2 == 1)
            maxLength++; 
    }
    return maxLength;
};