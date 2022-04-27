function minimalKSum(nums: number[], k: number): number {
 
    nums.sort
    let added: number[] = [];
    while ( k  > 0 ) {

    }
    const sum1: number = nums.reduce((a, b) => a+b, 0);
    const sum2: number = added.reduce((a, b) => a + b, 0);
    return sum1 + sum2;
};
// const nums = [5,6], k = 6;
// const nums = [5,6], k = 0;
// const result: number = minimalKSum(nums, k);
// console.log(`Result is ${result}`);

function longestSubstring(s: string, k: number): number {
    let result: number =0;
    for(let letter of s) {

    }
    return result;
};
// const s = "aaabb", k = 3;
// const result: number = longestSubstring(s, k);
// console.log(`Result is ${result}`);
function validateString(s: string): boolean {
    let mySet = new Set(s.split(""));
    if (mySet.size % 2 == 1) return false;
    let myList: any[] = Array.from(mySet).map((x) => x.toLowerCase());
    // for(let letter of myList) {
    //     if (myList.includes(letter.toL))

    // }
    
    // mySet = new Set(myList);
    // if (mySet.size > 1 )
    //     return false;
    // return true;
}

function longestNiceSubstring(s: string): string {
    let result: string = "";
    let maxLength: number = 0;
    for(let i =0 ; i < s.length ; i++)
        for(let j= i+1; j<s.length + 1; j++) {
            const sliced: string = s.slice(i, j);
            if (validateString(sliced))
            {  
                if (sliced.length > maxLength) {
                    maxLength = sliced.length;
                    result = sliced;
                } 
            }
        }

    return result;
};
// const s: string = "YazaAay"
// const s: string = "Bb";
// const result: string = longestNiceSubstring(s);
function maxSumAfterPartitioning(arr: number[], k: number): number {
    const n = arr.length;
    let dp: number[] = [...Array(n+1)].map(x => 0 );
    for(let i=1; i< n + 1; i++)
        dp[i] = arr[i-1];

    for(let i = 1; i < n + 1; i++) {
        for(let j = 1; j <= k; j++)
        {   
            if (i >= j ) {
                let partialMax: number = 0;           
                for(let v: number = i-j; v <= i - 1; v++)    
                    partialMax = Math.max(partialMax, arr[v])*j;
                dp[i] = Math.max(dp[i],  dp[i-j] + partialMax);
            } 
        }
    }
    console.log(...dp);
    return 0;
};
// const arr = [1,15,7,9,2,5,10], k = 3
// const arr = [1,15,7,9,2,5,10], k = 1
// const result: number = maxSumAfterPartitioning(arr, k);
// console.log(`Result is ${result}`);
function jump(nums: number[]): number {
    const n = nums.length;
    let dp: number[] = [...Array(n+1)].map(x => 1e4);
    dp[0] = 0;
    dp[1] = 0;
    for(let i = 1; i < n + 1; i++)
        for (let j =1; j <= nums[i-1]; j++)
            if (i + j <= n)
                dp[i+j] = Math.min(dp[i+j], dp[i]+1);
    console.log(...dp);
    return dp[n];
};
// const nums: number[] = [2,3,1,1,4];
// const nums: number[] = [2, 5];
// const nums: number[] = [2,3,0,1,4]
// const result: number = jump(nums);
// console.log(`Result is ${result}`);

function canJump(nums: number[]): boolean {
    const n = nums.length;
    let dp: boolean[] = [...Array(n+1)].map(x => false);
    dp[0] = true;
    dp[1] = true;
    for(let i = 1; i < n + 1; i++)
        for (let j =1; j <= nums[i-1]; j++)
            if (i + j <= n)
                dp[i+j] =  dp[i+j] || dp[i];
    console.log(...dp);
    return dp[n];
};
// const nums: number[] = [2,3,0,1,4]
// const nums: number[] = [3,2,1,0,4];
// const result: boolean = canJump(nums);
// console.log(`Result is ${result}`);
function canReach(arr: number[], start: number): boolean {
    const n = arr.length;
    let dp: number[] = [...Array(n)].map(x => -1);
    dp[start] = 1;
    function dfs(dp: number[], start: number, counter: number =0): void {
        if (arr[start] == 0) return;
        if (counter == n) return;
        let result: boolean = true;
        if (start + arr[start] < n ) {
            if (dp[start + arr[start]] != -1) return;
            dp[start + arr[start]] = 1; 
            dfs(dp, start + arr[start], counter + 1);
        }
        if (start - arr[start] > -1) {
            if (dp[start - arr[start]] != -1) return;
            dp[start - arr[start]] = 1; 
            dfs(dp, start - arr[start], counter + 1); 
        }
        return;
    }
    dfs(dp, start);
    let result: boolean = false;
    for(let i =0; i< n; i++) {
        if (arr[i] == 0)
            result = result || (dp[i] == 1);
    }
    console.log(...dp);
    return result;
};

// const arr: number[] = [4,2,3,0,3,1,2], start = 5;
// const arr: number[] = [3,0,2,1,2], start = 2
// const arr: number[] = [719,622,532,746,476,295,285,472,712,283,808,140,730,334,215,509,573,121,54,430,791,41,351,548,38,108,415,490,393,183,798,423,112,172,791,195,68,489,803,703,248,705,213,757,473,382,334,693,6,414,223,352,718,727,403,702,13,171,256,71,645,94,159,83,513,119,10,33,64,179,635,492,87,133,767,781,182,289,636,155,729,216,64,728,649,802,149,321,179,662,195,143,299,7,630,33,527,706,726,752,755,101,732,663,794,24,799,780,438,707,482,237,252,107,659,527,652,636,48,388,405,42,247,191,654,324,6,314,649,249,289,382,137,808,455,774,571,789,176,634,762,266,799,54,126,41,681,802,157,148,745,265,777,436,233,455,337,606,239,338,508,322,210,482,534,245,618,589,567,639,355,736,534,113,588,240,795,367,245,249,641,783,701,469,521,518,59,528,250,634,135,13,645,739,531,102,36,291,22,541,482,153,533,664,559,784,707,28,297,630,3,606,237,216,39,793,517,194,92,506,63,526,55,504,295,185,110,35,9,527,8,54,259,498,229,684,579,619,409,330,187,60,112,180,477,24,313,190,180,807,115,788,238,599,464,160,464,662,809,300,788,658,137,630,363,321,706,434,358,534,257,195,226,473,191,223,282,518,378,339,34,644,231,523,547,544,491,263,683,528,797,587,753,445,450,783,537,249,374,546,662,149,394,202,571,562,524,587,606,645,100,193,37,329,650,92,462,131,623,510,257,118,434,493,721,748,280,248,515,232,41,166,644,112,455,760,633,50,488,589,611,117,649,791,385,67,200,305,285,733,471,468,755,582,359,543,366,206,74,24,20,395,192,199,801,33,658,474,341,500,781,367,714,576,669,327,508,325,796,608,38,656,710,219,59,481,735,475,425,400,690,541,806,488,246,735,310,762,454,15,550,74,289,351,84,486,81,161,341,500,629,224,364,182,309,530,539,713,116,511,428,392,524,681,599,120,658,266,592,184,76,160,284,490,771,74,398,336,155,502,356,268,427,98,12,232,383,381,563,10,634,669,650,79,298,734,730,803,201,142,35,704,405,788,678,171,407,314,770,697,741,649,227,346,80,790,620,504,306,601,764,490,115,266,657,463,475,116,390,396,538,178,130,602,496,196,56,382,252,663,696,343,775,341,427,69,242,354,658,568,281,21,625,3,499,551,569,744,0,398,586,645,32,600,537,477,679,335,779,405,540,563,443,629,477,164,591,21,719,255,241,649,602,247,713,218,349,599,53,55,773,187,529,460,621,558,56,699,335,666,177,354,607,145,580,529,367,678,712,756,405,52,169,144,275,95,496,45,705,378,385,6,795,45,463,63,511,222,81,683,807,468,142,125,697,238,358,765,195,747,636,504,451,121,544,692,5,774,89,357,240,48,673,443,539,632,111,224,575,22,108,277,85,0,456,783,410,519,27,500,570,35,576,231,293,463,307,229,341,36,274,262,170,709,232,149,156,223,797,408,562,796,394,320,324,710,520,654,12,674,617,432,365,379,250,217,699,267,197,354,423,365,312,253,535,174,800,430,320,217,652,129,650,448,387,399,390,185,709,539,241,474,70,756,45,616,397,317,252,372,48,306,21,554,725,186,422,717,392,683,810,752,369,421,537,13,736,144,79,536,177,648,231,788,677,428,446,571,162,562,147,100,416,723,49,731,727,625,644,43,688,0,399,8,174,281,137,751,116,256,452,427,129,602,277,169,213,108,595,803,412,727,81,648,334,433,659,519,273,103,184,758,652,776,605,385,603,318,577,185,584,491,684,251,604,560,567,515,112,256,446,116,741,801,338,581,571,465,78,403,10,566,264,247,43,808,123,267,271,180,666], 
// start = 734
// //const arr: number[] = [0,3,0,6,3,3,4], start = 6
// const result: boolean = canReach(arr, start);
// console.log(`Result is ${result}`);


// const num: number = 2736;
// const num: number = 9973;
// const num: number = 98368;
// const num: number = 98682;
// const result: number = maximumSwap(num);
// console.log(`Result is ${result}`);

function lenLongestFibSubseq(arr: number[]): number {
    if (arr.length < 3)
        return 0; 
    
    let n: number = arr.length;
    let dp: number[] = [...Array(n+1)].map(x => 0);
    console.log("NOT SOLVED");

};
// const arr: number[] = [1,2,3,4,5,6,7,8];
// const result: number = lenLongestFibSubseq(arr);
// console.log(`Result is ${result}`);

function threeSum(nums: number[]): number[][] {
    if (nums.length < 3)
        return [];
     
    nums.sort((a, b)=> a - b);
    // let result: string[] = [];
    // let result: any = new Set();
    let result: number[][] = [];


    let tmp: number[] = [];
    for(let i=0; i<nums.length - 2; i++) {
        const rem: number = 0 - nums[i];
        for(let j=i+1; j<nums.length-1; j++) {
            const numFound: number = rem - nums[j];
            if (nums.indexOf(numFound) !== -1 && nums.indexOf(numFound) > j)  {
                tmp.push(nums[i], nums[j], numFound);
            }
            if (tmp.length > 0) {
                result = [...result, tmp];
                tmp = [];
            }
        }       
    }
    console.log(result);
    const output: number[][] = result.filter((value, index) => result.indexOf(value) !== index);
    console.log(" Get unique sets from Array");
    return [];
};
// const nums: number[] = [-1,0,1,2,-1,-4];
// const result: number[][] = threeSum(nums);
// console.log(`Result is ${result}`);
function maxWidthRamp(nums: number[]): number {
    if (nums.length < 2)
        return 0;
    
    let n: number = nums.length;
    let dp: number[] = [...Array(n+1)].map(x => 0);
    dp[0] = 0;
    // let maxLength: number = 0;
    for(let i=0; i < n - 1; i++)
        if (nums[i+1] >= nums[i] && dp[i+1] >= dp[i])
            dp[i+1] = dp[i] + 1;
        else
            dp[i+1] = dp[i];
    
    console.log(...dp);
    return dp[n];
}

// const nums: number[] = [6,0,8,2,1,5];
// const result: number = maxWidthRamp(nums);
// console.log(`Result is ${result}`);

function findLonely(nums: number[]): number[] {

    if (nums.length < 2) 
        return [];

    nums.sort((a, b)=> a -b);
    let result: number[] = [];
    for(let i = 1; i < nums.length - 1; i++) 
    {
        if ( nums[i] - nums[i-1] > 1 && nums[i+1] - nums[i] > 1) 
            result.push(nums[i]);
    }

    if(nums[1] - nums[0] > 1)
        result.push(nums[0]);

    if (nums[nums.length-1] - nums[nums.length-2] > 1)
        result.push(nums[nums.length-1]);

    return result;
};
//const nums: number[] = [10,6,5,8];
// const nums: number[] = [1,3,5,3];
// const result: number[] = findLonely(nums);
// console.log(`Result is ${result}`);
function longestBeautifulSubstring(word: string): number {
    const vowels: any = new Set(['a','e','i', 'o', 'u']);
    let maxLength: number = 0;
    
    let i: number = 0;
    while ( i < word.length) {
        if (word[i] == 'a') {
            let start: number = i;
            let counter = 1;
            while(i+ 1 <word.length && vowels.has(word[i]) && vowels.has(word[i+1]) && word[i+1] >= word[i]) {
                // test to include all vowels
                if (word[i+1] > word[i]) 
                    counter++;
                i++;
            }; 
            console.log(start, i, counter);
            // get maxLength when all vowels included
            if(counter == 5) {
                maxLength = Math.max(maxLength, i-start+1);
                console.log(maxLength);
            }
        } 
        i++;
    }
    return maxLength;
};
// //const word: string = "aeiaaioaaaaeiiiiouuuooaauuaeiu";
// const word: string = "aeeeiiiioooauuuaeiou"
// // const word: string = "uuuuuuuuooooooooiiiiiiiiieeeeeeeeeaaaaaaaaaauaeiou"
// // const word: string = "a"
// const result: number = longestBeautifulSubstring(word);
// console.log(`Result is ${result}`);
function longestMountain(arr: number[]): number {

    if (arr.length < 3)
        return 0;

    let maxLength: number =0;
    let i: number = 1;
    let increaseFlag: boolean;
    let decreaseFlag: boolean;
    let start: number =0;
    while (i < arr.length) {
        increaseFlag = false;
        decreaseFlag = false;

        while(i < arr.length && arr[i] > arr[i-1]) {
            if (!increaseFlag) {
                start = i-1;
                increaseFlag = true;
            }
            i++;
        };
        while(increaseFlag && i < arr.length && arr[i] < arr[i-1]) {
            if (!decreaseFlag)
                decreaseFlag = true;
            i++;
        };

        if (decreaseFlag) {
            console.log(i, start);
            maxLength = Math.max(maxLength, i-start);
            i--;
        }
        i++;
    };
    return maxLength;
};

//const arr: number[] = [2,1,4,7,3,2,5];
// const arr: number[] = [2,2,2];
//const arr: number[] = [875,884,239,731,723,685];
// const result: number = longestMountain(arr);
// console.log(`Result is ${result}`);

function checkZeroOnes(s: string): boolean {
    let ones: number;
    let zeros: number;
    let i: number =0;
    let maxOnes: number = 0;
    let maxZeros: number = 0;
    while (i < s.length) {
        ones = 0;
        zeros = 0;
        while(i < s.length && s[i] == '1') {
            ones++;
            i++;
        };

        while(i < s.length && s[i] == '0') {
            zeros++;
            i++;
        };

        maxOnes = Math.max(maxOnes, ones);
        maxZeros = Math.max(maxZeros, zeros);
    };
    console.log(maxOnes, maxZeros);
    return maxOnes > maxZeros;
};
// const s: string = "1101";
// const s: string = "1";
// const s: string = "0111010011"; 
// const result: boolean = checkZeroOnes(s);
// console.log(`Result is ${result}`);
function longestSubarray(nums: number[], limit: number): number {
    // import Heap from 'heap-ts'

    // const minHeap = new Heap();
    // const maxHeap = new Heap(Heap.maxComparator);
    return 0;
};
// const nums: number[] = [8,2,4,7]
// const limit: number = 4
// const result: number = longestSubarray(nums, limit);
// console.log(`Result is ${result}`);
function largestNumber(nums: number[]): string {
    const sortedDescending: any[] = nums.map(x => String(x)).sort((a: any, b: any)=> (b + a) - (a + b));
    const result = sortedDescending.reduce((a, b)=> a+b, "");
    return (result[0] == '0') ? '0' : result;
};
// const nums: number[] = [3,30,34,5,9]
// const result: string = largestNumber(nums);
// console.log(`Result is ${result}`);

// function largestSumOfAverages(nums: number[], k: number): number {
    
//     return 0;
// };
function minSubArrayLen(target: number, nums: number[]): number {
    let left: number = 0;
    let finalMin: number = 1e6;
    let sum: number = 0;
    for(let i=0; i < nums.length; i++)
    {
        sum += nums[i];
        while(sum >= target) {
            finalMin = Math.min(finalMin, i-left+1);
            sum -= nums[left++];
        };    
    }    
    return finalMin < 1e6 ? finalMin : 0;
};
// const target: number = 7, nums: number[] = [2,3,1,2,4,3];
//const target = 4, nums = [1,4,4]
// const target = 11, nums = [1,1,1,1,1,1,1,1]
// const result: number = minSubArrayLen(target, nums);
// console.log(`Result is ${result}`);
function smallestRangeII(nums: number[], k: number): number {
    let result: number = 0;
    for(let num of nums) {
        if (num - k  >= 0)
            num -= k;
        
        result = Math.max(result, )
    }
    return result;
};
// const nums: number[] = [1], k = 0;
// const result: number = smallestRangeII(nums, k);
// console.log(`Result is ${result}`);
function kthLargestNumber(nums: string[], k: number): string {
    const result: string[] = nums.sort((a: any, b: any) => {
        if (b.length > a.length || (a.length ==b.length && b > a))
            return 1;
        if (b.length < a.length || (a.length ==b.length && b < a))
            return -1;
        return 0;
    });
    console.log(...result);
    return result[k-1];
};  
// const nums: string[] = ["3","6","7","10"], k = 4
// const nums = ["2","21","12","1"], k = 3
// const nums: string[] = ["9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999990000","9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999990001"], k = 2
// const result: string = kthLargestNumber(nums, k);
// console.log(`Result is ${result}`);
function maxIceCream(costs: number[], coins: number): number {
    let n = costs.length;
    costs.sort((a, b) => a - b);
    let maxCost: number = 0;
    for(const cost of costs)
        if (coins >= cost) {
            coins -= cost;
            maxCost++;
        }
    return maxCost;
}
//const costs = [1,3,2,4,1], coins = 7
// const costs = [1,6,3,1,2,5], coins = 20
// const costs = [10,6,8,7,7,8], coins = 5
// const result: number = maxIceCream(costs, coins);
// console.log(`Result is ${result}`);
function maximumUniqueSubarray(nums: number[]): number {
    
    let sum: number = 0;
    let tmp: number[] = [];
    let left: number = 0;
    let maxScore: number = 0;
    for(let i=0; i<nums.length; i++)
    {
        if (!tmp.includes(nums[i])) {
            tmp = [...tmp, nums[i]];
            sum += nums[i];
            maxScore = Math.max(maxScore, sum);
        } else {
            tmp.shift();
            sum -= nums[left++];
        }
    }
    return maxScore;
};
// const nums = [5,2,1,2,5,2,1,2,5]
// // const nums = [4,2,4,5,6];
// const result: number = maximumUniqueSubarray(nums);
// console.log(`Result is ${result}`);

function kadaneAlgorithm(arr: number[]): number {
    const n: number = arr.length;
    let dp = [0, ...arr]; 
    let globalMax :number = 0;
    for(let i=1; i<n+1; i++) {
        dp[i] = Math.max(dp[i], dp[i] + dp[i-1])
        if (dp[i] > globalMax)
            globalMax = dp[i];
    }
    return globalMax;
}

function kConcatenationMaxSum(arr: number[], k: number): number {
    if (k == 1) return kadaneAlgorithm(arr)%(10**9+7);
    let globalMax: number = 0;
    const sum: number = arr.reduce((a, b)=> a +b, 0);
    const suffix: number[] = [...arr, ...arr];
    const result: number = kadaneAlgorithm(suffix);
    if (sum < 0)
        return Math.max(globalMax, result)%(10**9+7);
    if (sum > 0)
        return Math.max(globalMax, result+(k-2)*sum)%(10**9+7);
    if (sum == 0)
        return Math.max(globalMax, result)%(10**9+7); 
};
// const arr: number[] = [1,-2,1], k = 5;
//const arr = [-1,-2], k = 7
// const arr = [1,-1], k = 1
// const arr = [1,2], k = 1
// const arr = [-5,4,-4,-3,5,-3], k=3
// const arr = [-5,-2,0,0,3,9,-2,-5,4], k =5
// const result: number = kConcatenationMaxSum(arr, k);
// console.log(`Result is ${result}`);
function minPairSum(nums: number[]): number {
    nums.sort((a, b)=> a - b);
    let maxValue : number = 0;
    const n: number = nums.length;
    for(let i=0; i<n/2;i++) {
        const result: number = nums[i] + nums[nums.length-1-i];
        maxValue = Math.max(maxValue, result);
    }
    return maxValue;
};
// const nums = [3,5,2,3]
// const result: number = minPairSum(nums);
// console.log(`Result is ${result}`);
function minimumDeletions(nums: number[]): number {
    const n: number = nums.length;
    const maxNum: number = Math.max(...nums);
    const minNum: number = Math.min(...nums);
    const minIndex: number = nums.indexOf(minNum);
    const maxIndex: number = nums.indexOf(maxNum);

    const forward: number = 1 + Math.max(minIndex , maxIndex);
    const backward: number = Math.max(n - maxIndex, n - minIndex);
    const hybrid: number = Math.min(n-minIndex, minIndex+1) + Math.min(n-maxIndex, maxIndex+1);
    const result: number = Math.min(forward, backward, hybrid);
    return result;
};

function minDeletion(nums: number[]): number {
    if (nums.length == 0) return 0; 
    let i: number =0;
    let counter: number = 0;
    while (i < nums.length -1) {    
        if (i % 2 ==0 && nums[i] == nums[i+1]) {
            counter++;
            nums.splice(i, 1); 
            continue;
        }
        i++;
    };
    if (nums.length % 2 == 1)
        counter++;
    return counter; 
}
// const nums: number[] = [1,1,2,3,5]
// const nums = [1,1,2,2,3,3]
// // const nums = [0,6,6,1,8,7];
// const result: number = minDeletion(nums);
// console.log(`Result is ${result}`);

function findMedian(nums: number[]) {
    let middle = Math.floor(nums.length / 2);
    nums = [...nums].sort((a, b) => a - b);
    console.log(middle);
    return nums.length % 2 !== 0 ? nums[middle] : Math.floor((nums[middle - 1] + nums[middle]) / 2);
}

function minMoves2(nums: number[]): number {
    const median: number = findMedian(nums);
    let counter: number = 0;
    for (let num of nums)
        counter += Math.abs(num - median);
    return counter;
};
// const nums: number[] = [1,10,2,9];
// // const nums: number[] = [1,8];
// const result: number = minMoves2(nums);
// console.log(`Result is ${result}`);
function findClosestElements(arr: number[], k: number, x: number): number[] {
    let result: number[] = [];
    let minLength: number = 1e6
    if (x < arr[0]) {
        minLength = Math.min(minLength, k);
        arr.length = minLength;
        return arr;
    }
    
    if (x > arr[arr.length-1]) {
        minLength = Math.min(minLength, k);
        arr.length = minLength;
        arr.splice(arr.length-minLength);
        return arr;
    }
    // for(let i = )

};
// const arr = [1,2,3,4,5], k = 4, x = -1
// const result: number[] = findClosestElements(arr, k, x);
// console.log(`Result is ${result}`);
function maxDistToClosest(seats: number[]): number {

    let s: any =  new Set(seats);
    if (s.size == 1 && s.has(0))
        return 0;
    
    if (s.size == 1 && s.has(1))
        return 0;
 
    const n: number = seats.length;
    let increaseDp: number[] = seats.map(x => {
        if (x == 1) 
            return 0;
        return n;
    });

    let decreaseDp: number[] = [...increaseDp];
    increaseDp = [0, ...increaseDp];
    decreaseDp = [...decreaseDp, 0];

    //increasing dp
    let seen = false;
    for(let i=1; i< n+1; i++) {
        if (!seen && seats[i-1] == 1) 
            seen = true;
        
        if (seen && seats[i-1] == 0)
            increaseDp[i] = increaseDp[i-1] + 1;
    }

    //decreasing dp
    seen = false;
    for(let i=n-1; i>-1; i--) {
        if (!seen && seats[i] == 1) 
            seen = true;
   
        if (seen && seats[i] == 0)
           decreaseDp[i] = decreaseDp[i+1] + 1;
    }

    //get Max of min(both arrays) for maximum distance
    let maxDist: number = 0;
    for(let i = 1; i < n+1; i++)
        maxDist = Math.max(maxDist, Math.min(increaseDp[i], decreaseDp[i-1]))

    console.log("increaseDp", increaseDp, "decreseDp", decreaseDp);
    return maxDist;
};
//const seats = [1,0,0,0,1,0,1]
//const seats = [1,0,0,0]
//const seats = [1,0,0,1]
// const seats = [0,0,1]
// const result: number = maxDistToClosest(seats);
// console.log(`Result is ${result}`);
class ExamRoom {
    nums: any[] = [];
    increaseDp: any[]= [];
    decreaseDp: any[] = [];
    n: number;
    seen: boolean;
    maxDist: number;

    constructor(n: number) {
        this.nums = [...Array(n)].fill(0);
        this.increaseDp = [...Array(n)].fill(n);
        this.decreaseDp = [...Array(n)].fill(n);
        this.n = n;
        this.seen = false;
    }

    seat(): number {
        
        if (!this.nums.includes(1)) {
            this.nums[0] = 1;
            return 0;
        }
            
        for(let i=0; i<this.n; i++)
        {   
            if (this.nums[i] == 1) 
                this.increaseDp[i] = 0;
            else if (i > 0)
                this.increaseDp[i] = this.increaseDp[i-1] + 1;
        }

        for(let i=this.n-1; i>-1; i--)
        {   
            if (this.nums[i] == 1) { 
                this.decreaseDp[i] = 0;
                this.seen = true;
            }

            if (this.seen && this.nums[i] == 0)
                this.decreaseDp[i] = this.decreaseDp[i+1] + 1;
        }
       
        let maxDist: number = 0;
        for(let i=0; i <this.n; i++)
            maxDist = Math.max(maxDist, Math.min(this.increaseDp[i], this.decreaseDp[i]));   
        
        console.log("Nums", this.nums, "I", this.increaseDp, "D", this.decreaseDp, maxDist);
        this.nums[maxDist] = 1;
        return maxDist;
    }

    leave(p: number): void {
        this.nums[p] = 0;
    //     this.increaseDp[p-1] = 0;
    //     this.decreaseDp[p-1] = 0;
    }
}
// let examRoom: ExamRoom = new ExamRoom(10);
// let result: number = examRoom.seat();
// console.log(`Result is ${result}`);

// result = examRoom.seat(); // return 9, the student sits at the last seat number 9.
// console.log(`Result is ${result}`);

// result = examRoom.seat(); // return 4, the student sits at the last seat number 4.
// console.log(`Result is ${result}`);

// result = examRoom.seat(); // return 2, the student sits at the last seat number 2.
// console.log(`Result is ${result}`);

// examRoom.leave(4);

// result = examRoom.seat(); // return 5, the student sits at the last seat number 5.
// console.log(`Result is ${result}`);
function xnor(student: number[], mentor: number[]) {
    let counter: number = 0;
    for(let i=0; i<student.length; i++)
        counter += (student[i] == mentor[i]) ? 1 : 0;
    return counter;
}

function maxCompatibilitySum(students: number[][], mentors: number[][]): number {
    const n: number = students.length; 
    let studentObjs: any[] = [...students].map( student => {
        let obj = {"value": student, "disabled": false};
        return obj;
    });    

    let mentorObjs: any[] = [...mentors].map( mentor => {
        let obj = {"value": mentor, "disabled": false};
        return obj;
    });
    
    let counter:number = 0; 
    let i, j, tmp: number;
    let records: any = {};
    
    for(let k =0 ; k < n; k++) {
        let maxScore: number =0;
        let maxIndex: number[] = [-1,-1];
    

        for(i=0; i < n; i++) 
        {
            if (studentObjs[i].disabled)
                continue;
            
            for(j=0; j< n; j++) 
            {
                if (mentorObjs[j].disabled)
                    continue;

                if (records[`${i}-${j}`] == null) {           
                    tmp = xnor(studentObjs[i].value, mentorObjs[j].value);
                    records[`${i}-${j}`] = tmp;
                } 
                else
                    tmp = records[`${i}-${j}`]

                if (maxScore <= tmp) {
                    maxScore = tmp;
                    maxIndex = [i, j];
                }
            }
        }
        counter += maxScore;
        console.log(maxIndex, maxScore, counter);
        studentObjs[maxIndex[0]].disabled = true;
        mentorObjs[maxIndex[1]].disabled = true;
    }    
    //console.log(records);
    console.log(records, studentObjs, mentorObjs);

    return counter;
};


//const students = [[1,1,0],[1,0,1],[0,0,1]], mentors = [[1,0,0],[0,0,1],[1,1,0]];
//const students = [[0,0],[0,0],[0,0]], mentors = [[1,1],[1,1],[1,1]]
//const students = [[1,1,1],[0,0,1],[0,0,1],[0,1,0]], mentors = [[1,0,1],[0,1,1],[0,1,0],[1,1,0]]
// const result: number = maxCompatibilitySum(students, mentors);
// console.log(`Result is ${result}`);
function countPoints(points: number[][], queries: number[][]): number[] {
    let result: number[] = [];
    for(let query of queries)
   {
        let counter: number =0;
        for(let point of points)  
        {
            const eculidian = (point[0]-query[0])**2 + (point[1]-query[1])**2; 
            if(eculidian <= query[2]**2)
                counter++;
        }
        result.push(counter);   
    }
    return result;
};
// const points = [[1,3],[3,3],[5,3],[2,2]], queries = [[2,3,1],[4,3,1],[1,1,2]];
// const points = [[1,1],[2,2],[3,3],[4,4],[5,5]], queries = [[1,2,2],[2,2,2],[4,3,2],[4,3,3]];
// const result: number[] = countPoints(points, queries);
// console.log(`Result is ${result}`);
function maxIncreaseKeepingSkyline(grid: number[][]): number {
    const rows: number = grid.length;
    const columns: number= grid[0].length;
    let maxRows: number[] = [...Array(rows)].map((value, index) => Math.max(...grid[index]));
    let maxCols: number[] = [...Array(columns)].map(x => 0);
    
    for(let col=0; col<columns; col++) {
        let maxTmp: number = 0;
        for(let row=0; row<rows; row++)
            maxTmp = Math.max(maxTmp, grid[row][col])
        maxCols[col] = maxTmp;
    }
    console.log(maxRows, maxCols);

    let counter: number = 0;
    for(let i=0; i<rows; i++)
        for(let j=0; j<columns; j++)
        { 
            const val: number = Math.min(maxRows[i], maxCols[j]); 
            if (grid[i][j] > val) 
                maxRows[i] = grid[i][j];
            else
                counter +=  val - grid[i][j];
        }

    return counter;
};
// const grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]];
// const result: number = maxIncreaseKeepingSkyline(grid);
// console.log(`Result is ${result}`);
function pivotArray(nums: number[], pivot: number): number[] {
    let lesser: number[] = nums.filter(x => x < pivot);
    let greater: number[] = nums.filter(x => x > pivot );
    let pivotted: number[] = nums.filter(x => x == pivot );

    return [...lesser, ...pivotted,  ...greater];
};
// const nums = [9,12,5,10,14,3,10], pivot = 10;
// const result: number[] = pivotArray(nums, pivot);
// console.log(`Result is ${result}`);

// function rearrangeArray(nums: number[]): number[] {
//     let negative: number[] = nums.filter(x => x < 0);
//     let positive: number[] = nums.filter(x => x >0);
//     let result: number[] = [];
//     let shorterLength: number = (negative.length <= positive.length) ? negative.length: positive.length;
//     for(let i=0; i < shorterLength; i++) {
//         let val: number;
//         if (positive != [])
//             result.push(positive.shift());
        
//         if (negative != [])
//             result.push(negative.shift()); 
//     }
//     let rem: number[] = positive.length > negative.length ? positive : negative;
//     result= [...result, ...rem];
//     return result;
// };
// const nums: number[] = [3,1,-2,-5,2,-4]
// const result: number[] = rearrangeArray(nums);
// console.log(`Result is ${result}`);

// function rearrangeArray(nums: number[]): number[] {
//     nums.sort((a, b) => b - a);
//     let left: number = 0; 
//     let right: number = nums.length -1;
//     let result: number[] = [...Array(nums.length)].fill(0);
//     let i=0;
//     while (i < result.length && left < right) {
//         if (nums[left] > 0)
//             result[i++] = nums[left++];
//         else
//             break;
    
//         if (nums[right] < 0)
//             result[i++] = nums[right--];
//         else
//             break;
//     };
    
//     if (i == nums.length - 1)
//         return result;
    
//     for (let j = i; j < result.length; j++)
//         result[j] = nums[left++];
//     return result;
// };
// const nums: number[] = [3,1,-2,-5,2,-4,8,10,9]
// const result: number[] = rearrangeArray(nums);
// console.log(`Result is ${result}`);
function findingUsersActiveMinutes(logs: number[][], k: number): number[] {
    let d: any = {};
    for(const log of logs)
    {
        const [id, time] = [...log];
        if(!d[id])
            d[id] = [time];
        else if (!d[id].includes(time))
            d[id]= [...d[id], time];
    }

    let result: number[] = [...Array(k)].fill(0);
    let value: any;
    for (value of Object.values(d)) {
        result[value.length-1]++;
    }
    return result;
};
//const logs: number[][] = [[1,1],[2,2],[2,3]], k = 4
// const logs = [[0,5],[1,2],[0,2],[0,5],[1,3]], k = 5
// const result: number[] = findingUsersActiveMinutes(logs, k);
// console.log(`Result is ${result}`);
function triangularSum(nums: number[]): number {
    
    while(nums.length > 1)
    {
        let tmp = [...Array(nums.length-1)].fill(0);
        for(let i=0; i<nums.length-1; i++)
            tmp[i] = (nums[i] + nums[i+1]) % 10;
        nums = tmp;
    }
    return nums[0];      
};
// const nums = [1,2,3,4,5];
// const result: number = triangularSum(nums);
// console.log(`Result is ${result}`);
// function restoreMatrix(rowSum: number[], colSum: number[]): number[][] {
//     let result: number[][] = [];
//     let minX = Math.min(Math.min(...rowSum), Math.min(...colSum));
//     result[0][0] = minX;
//     for(let i=0; i<rowSum.length; i++)
//         for(let j=0; j<colSum.length; j++) 
//             result[i][j] = 
//     return result;
// };
// const rowSum = [3,8], colSum = [4,7];
// const result: number[][] = restoreMatrix(rowSum, colSum);
// console.log(`Result is ${result}`);
class BrowserHistory {
    visited: string[] = [];
    index: number = 0;
    flag: boolean = false;
    constructor(homepage: string) {
        this.flag = true;
        this.visited[this.index] = homepage;
    }

    visit(url: string): void {
        this.visited.length = this.index+1; 
        this.visited.push(url);
        this.index = this.visited.length-1;
    }

    back(steps: number): string {   
        this.index = Math.max(this.index-steps, 0); 
        return this.visited[this.index];
    }

    forward(steps: number): string {
        this.index = Math.min(this.index+steps, this.visited.length-1);
        return this.visited[this.index];
    }
    
}
// const browserHistory = new BrowserHistory("leetcode.com");
// browserHistory.visit("google.com");       // You are in "leetcode.com". Visit "google.com"
// browserHistory.visit("facebook.com");     // You are in "google.com". Visit "facebook.com"
// browserHistory.visit("youtube.com"); 
// let result = browserHistory.back(1);                   // You are in "youtube.com", move back to "facebook.com" return "facebook.com"
// console.log(result);

// result = browserHistory.back(1);                   // You are in "facebook.com", move back to "google.com" return "google.com"
// console.log(result);

// result = browserHistory.forward(1);                // You are in "google.com", move forward to "facebook.com" return "facebook.com"
// console.log(result);

// browserHistory.visit("linkedin.com");
// result = browserHistory.forward(2);                // You are in "linkedin.com", you cannot move forward any steps.
// console.log(result);

// result = browserHistory.back(2);
// console.log(result);

// result = browserHistory.back(7);
// console.log(result);
function numOfSubarrays(arr: number[], k: number, threshold: number): number {
    if (arr.length < 3)
        return 0;
    let left: number = 0;
    let sum: number = 0;
    let counter: number=0;
  

    let i: number =0;
    while( left <= arr.length-k) {
        sum += arr[i];
        i++;
        if (i >= k) {
            if (sum/k >= threshold)
                counter++;
            sum -= arr[left++];
        }    
    }; 
    return counter;
};
//const arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
// const arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5
// const result: number = numOfSubarrays(arr, k, threshold);
// console.log(`Result is ${result}`);
function kClosest(points: number[][], k: number): number[][] {
    let pointsDist = points.map( point => {
        let obj: any = {};
        obj["points"] = point;
        obj["dist"] =  point[0]**2 + point[1]**2;
        return obj;
    });
    pointsDist.sort((a, b) => a.dist - b.dist);
    let result: number[][] = [];
    for(let i=0; i<k; i++)
        result[i] = pointsDist[i].points;
    return result;
};
// const points = [[1,3],[-2,2]], k = 1
// const points = [[3,3],[5,-1],[-2,4]], k = 2
// const result: number[][] = kClosest(points, k);
// // console.log(`Result is ${result}`);
// function maxProfit(prices: number[], fee: number): number {
//     const n: number = prices.length;
//     let dp: number[] = [...Array(n+1)].fill(0);
// };
// const prices: number[] = [1,3,2,8,4,9], fee = 2;
// const result: number = maxProfit(prices, fee);
// console.log(`Result is ${result}`);
function numSquares(n: number): number {
    let dp: any = {};
    function dfs(n: number): number
    {
        if (n < 4) return n;
        let result: number = n+1;
        if (dp[n]) return dp[n]
        for(let i=1; i <= Math.ceil(Math.sqrt(n)); i++)
        {
            let sum: number = 0;
            if(n-(i**2) >=0) { 
                sum += 1 + dfs(n-(i**2));
                result = Math.min(result, sum);
                dp[n] = result;
            }
        }
        return result;
    }   
    const result: number = dfs(n);
    return result;
};
// const n: number = 36;
// const result: number = numSquares(n);
// console.log(`Result is ${result}`);
function nthUglyNumber(n: number): number {
    if (n<4) return n;
    let L2: number = 0;
    let L3: number = 0;
    let L5: number = 0;
    let i: number = 1;
    let uglyNum = 0;
    if (n % 2 == 1)
        n++;
    
    while (i < n) {
        L2 += 2; L3 += 3; L5 += 5;
        uglyNum = Math.min(L2, L3, L5);
        if (uglyNum < L2)
            L2 -= 2;
        if (uglyNum < L3)
            L3 -= 3;
        if (uglyNum < L5)
            L5 -= 5;

        console.log(L2, L3, L5, uglyNum);
        i++;
    };
    return uglyNum;
};
// const n: number = 5;
// //const n: number = 11;
// const result: number = nthUglyNumber(n);
// console.log(`Result is ${result}`);
function canVisitAllRooms(rooms: number[][]): boolean {
    let visited: any = new Set();
    visited.add(0);

    function dfs(room: number[]): void {
        for(const key of room) {
            visited.add(key);
            dfs(rooms[key]);
        }
    }

    dfs(rooms[0]);
    console.log(visited);
    const result: boolean = visited.size == rooms.length;
    return result;
};

// function canVisitAllRooms(rooms: number[][]): boolean {
//     const n: number = rooms.length;
//     let dp: boolean[] = [...Array(n)].fill(false);
    
//     dp[0] = true;
//     for(const room of rooms) {
//         for(const key of room)
//         {   
//             if (!dp[key] && key !== rooms.indexOf(room))
//                 dp[key] = true;
//         }
//     }

//     console.log(...dp);
//     const result: boolean = dp.every(value => value == true);
//     return result;
// };



// const rooms: number[][] = [[1],[2],[3],[]];
// const rooms = [[1,3],[3,0,1],[2],[0]]
// // const rooms = [[4],[3],[],[2,5,7],[1],[],[8,9],[],[],[6]]
// const result: boolean = canVisitAllRooms(rooms);
// console.log(`Result is ${result}`);

function kadaneMax(arr: number[]): number {
    const n: number = arr.length;
    let dp = [0, ...arr]; 
    let globalMax :number = 0;
    for(let i=1; i<n+1; i++) {
        dp[i] = Math.max(dp[i], dp[i] + dp[i-1])
        if (dp[i] > globalMax)
            globalMax = dp[i];
    }
    return globalMax;
}

function kadaneMin(arr: number[]): number {
    const n: number = arr.length;
    let dp = [0, ...arr]; 
    let globalMin :number = 1e6;
    for(let i=1; i<n+1; i++) {
        dp[i] = Math.min(dp[i], dp[i] + dp[i-1])
        if (dp[i] < globalMin)
            globalMin = dp[i];
    }
    return globalMin;
}


function maxAbsoluteSum(nums: number[]): number {
    let max: number =  kadaneMax(nums);
    let min: number =  kadaneMin(nums);
    max = Math.abs(max);
    min = Math.abs(min);
    return (max >= min) ? max : min;
};
// const nums = [2,-5,1,-4,3,-2]
// const result: number = maxAbsoluteSum(nums);
// console.log(`Result is ${result}`);
function findWinners(matches: number[][]): number[][] {

    let maxNum: number = 0;
    let minNum: number = 1e6;
    for(const match of matches) {
        maxNum = Math.max(maxNum, match[0], match[1]);
    }

    let dp: number[] = [...Array(maxNum+1)].fill(-1);  
    for(const match of matches)
    {
        if (dp[match[0]] == -1)
            dp[match[0]] = 0;
       
        if (dp[match[1]] == -1)
            dp[match[1]] = 0;

        dp[match[1]]++;
    }

    let zeros: number[] = []
    let ones: number[] = []
    for(const i in dp) {
        if (dp[i] == 0) 
            zeros.push(Number(i))
        
        if (dp[i] == 1) 
            ones.push(Number(i))
    }
    zeros.sort((a, b)=> a - b);
    ones.sort((a, b)=> a - b);
    return [zeros, ones];
};
// const matches: number[][] = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
// const result: number[][] = findWinners(matches);
// console.log(`Result is ${result}`);
// function findMaxLength(nums: number[]): number {
//     const n: number = nums.length;
//     let start = 0;
//     let maxLen: number = 0;
//     for(let i=1; i< n; i++)
//     {
//         if (nums[i] != nums[i-1]) {
//             start = i-1;
//             // dp[i] = Math.max(dp[i], 2);
//             maxLen = Math.max(maxLen, 2);
//         }

//         if (nums[i] == nums[i-1]) {
//             const lastIndex = i - 2*(i-start) + 1;
//             if ( lastIndex >= 0 && nums[lastIndex] != nums[i]) 
//                 maxLen = Math.max(maxLen, 2*(i-start));
//         }
//     }
//     return maxLen;
// };

function findMaxLength2(nums: number[]): number {

    let zeros: number = 0;
    let ones: number = 0; 
    let seen: any = {}; 
    for(let num of nums)
    {   
        if (num == 0)
            zeros++;
        
        if (num == 1)
            ones++;
        
        const record: number = Math.max(zeros, ones);    
        if (seen[record] == undefined)
            seen[record] = 0;
        else
            seen[record]++;
    }

    const keys: string[] = Object.keys(seen);
    let result: number[] = [];
    for(const key of keys) {
        if (seen[key] >= 1)
            result.push(Number(key));
    }

    const maxLen: number = 2*Math.max(...result);
    return maxLen;
};

function findMaxLength3(nums: number[]): number {
    let seen: any = {0: -1};
    let maxLen: number = 0;
    let count: number = 0;
    for(let i=0; i < nums.length; i++)
    {
        count += (nums[i] == 1) ? 1 : -1;
        if (seen[count] != undefined)
            maxLen = Math.max(maxLen, i-seen[count])
        else
            seen[count] = i;
    }   
    console.log(seen)
    return maxLen; 
};


//const nums = [0,1,0,1];
//const nums = [0,1,1,0,0,1,1]
//const nums = [0,0,1,0,0,0,1,1]
// const nums = [0,0,1]
// const result: number= findMaxLength3(nums);
// console.log(`Result is ${result}`);
function numDecodings(s: string): number {
    let obj: any = {};
    for(let i=1; i<= 26; i++)
        obj[i] = false;
    
    
    function dfs(index: number, end: number): number {
        
        // if(index + end >= n)
        //     return 0;
        
        if (s[index] == '0')
            return 0;
    
        const sliced: string = s.slice(index, index+end); 
        if (obj[sliced])
            return 0;
    
        if (Number(sliced) >= 1 && Number(sliced) <= 26) {
            obj[sliced] = true;
            return 1;
        }            
        return 0;
    }
    
    let result: number =0;
    const n: number = s.length;    
    for(let i=0; i<n; i++) {
        result += Math.min(dfs(i, 1), dfs(i, 2));
    }
return result;
};
// const s: string = "226";
//const s: string = "1";
//const s: string = "1358"
// const result: number= numDecodings(s);
// console.log(`Result is ${result}`);

function wateringPlants(plants: number[], capacity: number): number {
    
    let steps: number = 0;
    let sum: number = 0;
    let visited: number[] = [];

    let i: number = 0;
    while( i < plants.length) {
        if (sum + plants[i] <= capacity && !visited.includes(i)) 
        {
            visited.push(i);
            sum += plants[i];
        } 
        else if (sum + plants[i] > capacity)
        {
            sum = 0;
            steps += i;
            i=0;
            continue;
        }

        steps++; 
        i++;
    };
    return steps;
};
//const plants = [1,1,1,4,2,3], capacity = 4
// const plants = [7,7,7,7,7,7,7], capacity = 8
// const result: number= wateringPlants(plants, capacity);
// console.log(`Result is ${result}`);

function rearrangeArray(nums: number[]): number[] {
    let pos: number[] = [];
    let neg: number[] = [];
    for(const num of nums)
    {
        num > 0 && pos.push(num);
        num < 0 && neg.push(num);
    }
    let result: number[] = [...Array(pos.length + neg.length)].fill(0);
   
    let k: number = 0;
    let i: number;
    console.log(pos, neg);
    const minLength = Math.min(pos.length, neg.length);
    for(i=0; i<minLength; i++)
    {
        console.log(k, pos[i], i)
        result[k++] = pos[i];
        result[k++] = neg[i];
    }
    const rem: number[] = (i == pos.length) ? neg: pos;
    for(let j = i; j < rem.length; j++)
        result[k++] = rem[j];  
    
    console.log(result);
    return result;
};
// const nums: number[] = [3,1,-2,-5,2,-4,-7,-4]
// const result: number[]= rearrangeArray(nums);
// console.log(`Result is ${result}`);
function next(index: number, n: number): number {
    return index % n; 
} 

function findTheWinner(n: number, k: number): number {
    let cirList: boolean[] = [...Array(n)].fill(false); 
    let visited: any = new Set()    
    let i: number = -1;
    while (visited.size < cirList.length-1) {
        let counter = 0;
        while(counter < k) {
            i = (i + 1) % n;
            if (!cirList[i])
                counter++;
        };
        cirList[i] = true;
        visited.add(i);
    };

    const result: number = cirList.indexOf(false);
    return result + 1;
};
//const n = 5, k = 2;
//const n = 6, k = 5;
// const n = 15, k = 4;
// const result: number = findTheWinner(n, k);
// console.log(`Result is ${result}`);
function findFarmland(land: number[][]): number[][] {
    const m: number = land.length;
    const n: number = land[0].length;
    const landObjs: any[][] = land.map(row => row.map(column => {
        let obj: any = {};
        obj["value"] = column;
        obj["visited"] = false;
        return obj;
    }));
  
    let minX: number;
    let maxX: number;
    let minY: number;
    let maxY: number;   
    function dfs(i: number, j: number): void {
        if ((i >= 0 && i < m) && (j>=0 && j < n) && (landObjs[i][j].value == 1 && !landObjs[i][j].visited))
        {
            landObjs[i][j].visited = true;
            maxX = Math.max(maxX, i);
            minX = Math.min(minX, i);
            maxY = Math.max(maxY, j);
            minY = Math.min(minY, j);
            dfs(i-1, j);
            dfs(i, j-1);
            dfs(i+1, j);
            dfs(i, j+1);
        }
    }
    let result: number[][] = [];
    for(let i=0; i<m; i++)
        for(let j= 0; j<n; j++)  { 
            if (landObjs[i][j].value == 1 && !landObjs[i][j].visited) {
                maxX = 0, minX = m;
                maxY=0,  minY = n; 
                dfs(i, j);
                result.push([minX, minY, maxX, maxY]);
            }
        }
     
    return result;
};   
// const land = [[1,0,0],[0,1,1],[0,1,1]];
// const land = [[1,1],[1,1]];
// //const land = [[0]];
// const result: number[][] = findFarmland(land);
// console.log(`Result is ${result}`);
function numIslands(grid: string[][]): number {
    const m: number = grid.length;
    const n: number = grid[0].length;
    const landObjs: any[][] = grid.map(row => row.map(column => {
        let obj: any = {};
        obj["value"] = column;
        obj["visited"] = false;
        return obj;
    }));

    function dfs(i: number, j: number): void {
        if ((i >= 0 && i < m) && (j>=0 && j < n) && (landObjs[i][j].value == 1 && !landObjs[i][j].visited))
        {
            landObjs[i][j].visited = true;
            dfs(i-1, j);
            dfs(i, j-1);
            dfs(i+1, j);
            dfs(i, j+1);
        }
    }
    let result: number = 0;
    for(let i=0; i<m; i++)
        for(let j= 0; j<n; j++)  { 
            if (landObjs[i][j].value == "1" && !landObjs[i][j].visited) {
                dfs(i, j);
                result++;
            }
        }
     
    return result;
};
// const grid: string[][] = [
//     ["1","1","1","1","0"],
//     ["1","1","0","1","0"],
//     ["1","1","0","0","0"],
//     ["0","0","0","0","0"]
// ]
// const grid = [
//     ["1","1","0","0","0"],
//     ["1","1","0","0","0"],
//     ["0","0","1","0","0"],
//     ["0","0","0","1","1"]
//   ]
// const result: number = numIslands(grid);
// console.log(`Result is ${result}`);
function maxAreaOfIsland(grid: number[][]): number {
    const m: number = grid.length;
    const n: number = grid[0].length;
    let area: number;
    const landObjs: any[][] = grid.map(row => row.map(column => {
        let obj: any = {};
        obj["value"] = column;
        obj["visited"] = false;
        return obj;
    }));

    function dfs(i: number, j: number): number {
        let result: number = 0;
        if ((i >= 0 && i < m) && (j>=0 && j < n) && (landObjs[i][j].value == 1 && !landObjs[i][j].visited))
        {
            landObjs[i][j].visited = true;
            result += 1;
            result += dfs(i-1, j);
            result += dfs(i, j-1);
            result += dfs(i+1, j);
            result += dfs(i, j+1);
        }
        return result;
    }
    let result: number = 0;    
    for(let i=0; i<m; i++)
        for(let j= 0; j<n; j++)  { 
            area = 0;
            if (landObjs[i][j].value == 1 && !landObjs[i][j].visited) {
                const area: number = dfs(i, j);
                result = Math.max(area, result);
            }
        }
     
    return result;
};
//const grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
// const grid = [[0,1,0], [0,1,1], [0,1,0]]; 
// const result: number = maxAreaOfIsland(grid);
// console.log(`Result is ${result}`);
// function solve(board: string[][]): void {
//     const m: number = board.length;
//     const n: number = board[0].length;
//     const boardObjs: any[][] = board.map(row => row.map(column => {
//         let obj: any = {};
//         obj["value"] = column;
//         obj["visited"] = false;
//         obj["convert"] = false;
//         return obj;
//     }));

//     function dfs(i: number, j: number): void {
//         let result: boolean = true;
//         if ((i >= 0 && i < m) && (j>=0 && j < n) && (!boardObjs[i][j].visited))
//         {
//             boardObjs[i][j].visited = true;

//             if (boardObjs[i][j].value == "X") {
//                 boardObjs[i][j].convert = true;
//                 return;
//             }
            
//             if (boardObjs[i][j].value == "O" && (i == 0 || i == m-1 || j == 0 || j == n-1))
//             {
//                 boardObjs[i][j].convert = false;
//                 return;
//             }
            
//             dfs(i-1, j);
//             dfs(i, j-1);
//             dfs(i+1, j);
//             dfs(i, j+1);
//             // boardObjs[i][j].convert = boardObjs[i-1][j].convert && boardObjs[i+1][j].convert && boardObjs[i][j-1].convert && boardObjs[i][j+1].convert; 
//         }
//     }
        
//     for(let i=0; i<m; i++)
//         for(let j= 0; j<n; j++) 
//             {   
//                 dfs(i, j);
//                 // if (board[i][j] == "O" && result) {
//                 //     console.log(i, j, result); 
//                 //     boardObjs[i][j].value = "X";
//                 //     board[i][j] = "X";
//                 // }    
//             }

//     // console.log("Board is", board, "Objs", boardObjs);
//     console.log("Board is", boardObjs);
// };

function solve(board: string[][]): void {
    const m: number = board.length;
    const n: number = board[0].length;
    const boardObjs: any[][] = board.map(row => row.map(column => {
        let obj: any = {};
        obj["value"] = column;
        obj["visited"] = false;
        obj["convert"] = false;
        return obj;
    }));

    function dfs(i: number, j: number): void {
        let result: boolean = true;
        if ((i >= 0 && i < m) && (j>=0 && j < n) && (!boardObjs[i][j].visited))
        {
            boardObjs[i][j].visited = true;

            if (boardObjs[i][j].value == "X") {
                boardObjs[i][j].convert = true;
                return;
            }
            
            if (boardObjs[i][j].value == "O" && (i == 0 || i == m-1 || j == 0 || j == n-1))
            {
                boardObjs[i][j].convert = false;
                return;
            }
            
            dfs(i-1, j);
            dfs(i, j-1);
            dfs(i+1, j);
            dfs(i, j+1);
            // boardObjs[i][j].convert = boardObjs[i-1][j].convert && boardObjs[i+1][j].convert && boardObjs[i][j-1].convert && boardObjs[i][j+1].convert; 
        }
    }
        
    for(let i=0; i<m; i++)
        for(let j= 0; j<n; j++) 
            {   
                dfs(i, j);
                // if (board[i][j] == "O" && result) {
                //     console.log(i, j, result); 
                //     boardObjs[i][j].value = "X";
                //     board[i][j] = "X";
                // }    
            }

    // console.log("Board is", board, "Objs", boardObjs);
    console.log("Board is", boardObjs);
};



// let board: string[][] = [["X","X","X","X"],
//                          ["X","O","O","X"],
//                          ["X","O","O","X"],
//                          ["X","O","X","X"]]
//let board: string[][] = [["X","X","X"],["X","O","O"],["X","X","O"]]
//let board: string[][] = [["X","O"],["X","O"]]
// solve(board);
// console.log(`Result is ${board}`);

function restoreIpAddresses(s: string): string[] {
    let dp: any = {};
    let tmpList: string[] = [];
    let result: string[][] = [];
    function dfs(s: string, index: number, count: number, tmpStr: string = ""): void {
        for(let i=index; i<s.length; i++) 
        {
            tmpStr += s[i];
            if (dp[tmpStr]) return dp[tmpStr];
            if (Number(tmpStr) >= 0 && Number(tmpStr) <= 255)
            {
                tmpList = [...tmpList, tmpStr];
                dfs(s, i+1, count+1, tmpStr);
                if ( count == 4 && i == s.length-1) {
                    console.log(tmpList);
                }
            }
        }
    }
    dfs(s,0, 0);
    return [];
};
// const s:string = "25525511135";
// const s:string = "18537";
// const result: string[] = restoreIpAddresses(s);
// console.log(`Result is ${result}`);
