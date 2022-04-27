
function findIndex(array: string[], value: string): number {
    for(var i in array) {
        if (value == array[i]) {
            return Number(i) + 1;
        }
    }
    return 0;
}

function squareIsWhite(coordinates: string): boolean {
    const xArray = ["a", "b", "c", "d", "e", "f", "g", "h"];
    var x = findIndex(xArray, coordinates.charAt(0));
    const y = Number(coordinates[1])
    console.log(x, y);
    let start = ((x % 2) == 0) ? true : false;
    console.log(start);
    start = (y - 1) % 2 == 0 ? start : !start; 
    return start;
};

// console.log("Mina Shenouda");
// const coordinates = "c7"; 
// const result = squareIsWhite(coordinates);
// console.log(`Result is ${result}`);


function returnLength(arg: string): number { 
    return arg.split(" ").length;
}

function mostWordsFound(sentences: string[]): number {

    const sentencesLengths = sentences.map(returnLength);
    return Math.max(...sentencesLengths);
};
// const  sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]; 
// const result = mostWordsFound(sentences);
// console.log(`Result is ${result}`);

function prefixCount(words: string[], pref: string): number {
    const result =  words.filter((word:string): boolean => {
        return word.startsWith(pref, 0);
    });
    return result.length;
};
// const words = ["pay","attention","practice","attend"], pref = "at";
// const result = prefixCount(words, pref);
// console.log(`Result is ${result}`);


function mostPoints(questions: number[][]): number {    
    const dp = [...Array(questions.length + 1)].map(x => 0);
    const len = dp.length;
    for(var index = 1; index < len; index++) {
        const [points,  nextIndex] = [...questions[index-1]];
        console.log(points, nextIndex);
        if (index + nextIndex <= len) {
            dp[index] = Math.max(points, questions[nextIndex][0], dp[index-1]);
        } else {
            dp[index] = dp[index-1];
        } 
    }
    console.log(dp);
    return Math.max(...dp);
};

// const questions = [[3,2],[4,3],[4,4],[2,5]];
// const questions = [[1,1],[2,2],[3,3],[4,4],[5,5]];
// const questions = [[21,5],[92,3],[74,2],[39,4],[58,2],[5,5],[49,4],[65,3]];
// const result = mostPoints(questions);
// console.log(`Result is ${result}`);

function maxAlternatingSum(nums: number[]): number {
    const dp = [...Array(nums.length)].map(x => 0);
    const len = dp.length;
    for(var i: number = 1; i < len; i++) {
        if (nums[i] > nums[i-1]) 
            dp[i] = dp[i-1] + 1;
        else
            dp[i] = dp[i-1];
    }
    // for(i in nums) 
    // {
    //     var j = Number(i) + 2;
    //     dp[i] = nums[i];
    //     if ( j < len) 
    //     {
    //         dp[i] = dp[i] + nums[j] - nums[j-1];
    //     } 
    // }
    console.log(dp);
    //return Math.max(...dp);
    return 0;
};

// const nums = [6,2,1,2,4,5];
// const result = maxAlternatingSum(nums);
// console.log(`Result is ${result}`);

function arraySign(nums: number[]): number {
    if (nums.includes(0))
    {   return 0; }
    nums = nums.map(x => x > 0 ? 1 : -1);
    const product = nums.reduce((prev, curr) => prev * curr, 1);

    return product > 0? 1 : -1;
};
// const nums =  [-1,-2,-3,-4,3,2,1];
// const result = arraySign(nums);
// console.log(`Result is ${result}`);

function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
    const [a1, a2, b1, b2] = [...rec1];
    const [c1, c2, d1, d2] = [...rec2];
    const result = ((a1 < c2 && c2 < a2 && d1 < b1) || (a1 < c2 && c2 < a2 && d1 < b2) || (a1 < c1 && c1 < a2 && b2 < d2) || (a1 < c1 && c1 < a2 && d1 < b2))  
    return result;
    return false;
};  
// const rec1 = [0,0,2,2];
// const rec2 = [1,1,3,3];
// const rec1 = [0,0,1,1];
// const rec2 = [1,0,2,1]
// const result = isRectangleOverlap(rec1, rec2);
// console.log(`Result is ${result}`);

function sumBase(n: number, k: number): number {
    var rem = [];
    while ( n > 0 ) {
        rem.push( n % k);
        n = Math.floor(n/ k);
    }
    console.log(rem);
    const result = rem.reduce((prev, curr)=> curr + prev, 0);
    return result;
};
// const n = 34;
// const k = 6;
// const result = sumBase(n, k);
// console.log(`Result is ${result}`);


function uniquePaths(m: number, n: number): number {

    let array2D: any[] = new Array(m);
    //const array
    for(var i = 0; i < m; i++)
    {  
        array2D[i] = new Array(n);
        for(var j = 0; j < n; j++) {
            array2D[i][j] = 0;
        }
    }
    for(var i = 0 ; i < n ; i++)
    {
        array2D[0][i] = 1;
    }

    for(var i = 0 ; i < m ; i++)
    {
        array2D[i][0] = 1;
    }

    for(var i = 1; i < m; i++)
    {   for(var j = 1; j < n; j++) {
            array2D[i][j] = array2D[i-1][j] + array2D[i][j-1];
        }
    }
    return array2D[m-1][n-1];
};
// const m = 3, n = 7;
// const result = uniquePaths(m, n);
// console.log(`Result is ${result}`)

function generateMap(row: number, column: number): number[][] {
    if (row == 0 || column == 0)
        return [];
    let array2D = [...Array(row)].map((value)=> [...Array(column)].map(value => 0));
    return array2D;
}


function uniquePathsWithObstacles(obstacleGrid: number[][]): number {

    const rows = obstacleGrid.length;
    const columns = obstacleGrid[0].length;  
 
    // 1st row
    let flag: boolean = false;
    for(var i = 0; i < columns; i++)
    {   
        if (obstacleGrid[0][i] == 1) {
            flag = true;
            continue;
        }
        obstacleGrid[0][i] = -1;
        if (flag)
            obstacleGrid[0][i] = 0;
    }

    // 1st column
    flag = false;
    for(var i = 0; i < rows; i++)
    {  
        if (obstacleGrid[i][0] == 1) {
            flag = true;
            continue;
        }
        obstacleGrid[i][0] = -1;
        if (flag)
            obstacleGrid[i][0] = 0;
    }
    console.log(obstacleGrid);


    //General case
    for(var i =1; i < rows ; i++)
    {   for(var j =1; j < columns ; j++)
        {
            if (obstacleGrid[i][j] == 1)
                continue;
            if (obstacleGrid[i][j-1] == 1 && obstacleGrid[i-1][j] == 1)    
                obstacleGrid[i][j] = 0;
            else if (obstacleGrid[i][j-1] == 1)
                obstacleGrid[i][j] = obstacleGrid[i-1][j];
            else if (obstacleGrid[i-1][j] == 1)
                obstacleGrid[i][j] = obstacleGrid[i][j-1];
            else 
                obstacleGrid[i][j] =  obstacleGrid[i-1][j] + obstacleGrid[i][j-1];
        }
    }

    console.log([...obstacleGrid]);
    return obstacleGrid[rows-1][columns-1] == 1 ? 0 : -1 * obstacleGrid[rows-1][columns-1];
};

// const obstacleGrid = [[0, 1 , 0, 0], [0, 0 , 0, 0], [0, 0 , 0, 0] ];
// const obstacleGrid = [[0,0],[0,0]];
// const obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]];
//const obstacleGrid = [[0,0],[0,1]]; 
//const obstacleGrid = [[0,1,0,0,0],[1,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
// const obstacleGrid = [[0]];
// const obstacleGrid = [[0,1],[0,0]];
const obstacleGrid = [[1,0]];
// const result = uniquePathsWithObstacles(obstacleGrid);
// console.log(`Result is ${result}`);
// const obstacleGrid: number[][] = generateMap(2, 3);
const result = uniquePathsWithObstacles(obstacleGrid);
console.log(`Result is ${result}`);

function minPathSum(grid: number[][]): number {

    const rows = grid.length;
    const columns = grid[0].length;
    for(let i = 1; i < columns; i++)
        grid[0][i] += grid[0][i-1]; 
    
    for(let i = 1; i < rows; i++)
        grid[i][0] += grid[i-1][0]; 
    
    for(let i = 1; i< rows; i++)
    {
        for(let j = 1; j< columns; j++) {
            grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1]);
        }
    }

    console.log([...grid]);
    return grid[rows-1][columns-1];
};

// const grid = [[1,3,1],[1,5,1],[4,2,1]];
// const result = minPathSum(grid);
// console.log(`Result is ${result}`);

function goodDaysToRobBank(security: number[], time: number): number[] {

    const len = security.length;
    let nonIncreasing = [0];
    let nonDecreasing = [0];
    //nonInceasing
    for(var i=1; i < len; i++) {
        if (security[i] <= security[i-1])
           nonIncreasing.push(i);
    }

    //nonDecreasing
    for(var i=1; i < len; i++) {
        if (security[i] >= security[i-1])
           nonDecreasing.push(i);     
    }

    //refine result
    let result = nonIncreasing.filter(x => nonDecreasing.includes(x));
    result = result.filter(x => (x - time >= 0) && (x + time < len));
    console.log([...nonIncreasing], [...nonDecreasing], [...result]);

    return result;
};

//const security = [5,3,3,3,5,6,2], time = 2;
//const security = [1,1,1,1,1], time = 0;
//const security = [1,2,3,4,5,6], time = 2;
// const security = [1,2,3,4], time = 0;
// const result = goodDaysToRobBank(security, time);
// console.log(`Result is ${result}`);
function numberOfArithmeticSlices(nums2: number[]): number {

    if (nums2.length < 3)
        return 0;
    
    let prev_diff = nums2[1] - nums2[0];
    let ind = 0;
    let cur = 0;
    let curr_diff=0;
    for(let i = 2; i< nums2.length; i++)
    {
        curr_diff = nums2[i] - nums2[i-1];
        if ( curr_diff == prev_diff) {
            ind += 1;
        }
        else {
            ind = 0;
            prev_diff = curr_diff;
        }
        cur += ind;
    }

    return cur;
};

// const nums2 =  [1,2,3,4] ;
// const result2 = numberOfArithmeticSlices(nums2);
// console.log(`Result is ${result2}`);

// function maxSumAfterPartitioning(arr: number[], k: number): number {

// };

// const arr = [1,15,7,9,2,5,10], k = 3;
// const result = maxSumAfterPartitioning(arr, k);
// console.log(`Result is ${result}`);


function findNumberOfLIS(nums: number[]): number {

    let dp = [...Array(nums.length)].map(x => 1);
    let maxSoFar = 0;
    let cnt = 0;
    const constants = [...nums];
    const s = new Set(nums);
    if (s.size == 1)
        return constants.length;  

    for(let i = 0; i <constants.length; i++) 
    {
        for(let j= i+1; j<constants.length; j++)
        {
            if (constants[j] > constants[i] && dp[j] >= dp[i])
            {
                dp[j] = dp[i] + 1;
                if ( dp[j] > maxSoFar) {
                    cnt = 1;
                //    maxSoFar =dp[j];
                }
                else
                    cnt += 1;
            }
        }
    }
    console.log(cnt);
    console.log(dp);
    return cnt;
};

function longestPalindrome(s: string): number {
   
    let counter: {key?: number} = {key: 0}; 
    const mySet = new Set(s);
    const arr: string[] = s.split("");
    let length = 0;
    for(let key of Array.from(mySet)) {
        const indices = arr.map((value, i)=> {if (key == value) return i}).filter(x => x !== undefined);
        counter ={...counter, [key]: indices.length};
    }
    delete counter.key;

    if (Object.keys(counter).length == 1)
        return Object.values(counter)[0];

    for (const [key, value] of Object.entries(counter))
    {   
        if (value / 2 == 1){
            length += value;
        }
        if (value %2 == 0) {
            length += 1;
        } 
    }
    return length;
};

function minSubArrayLen(target: number, nums: number[]): number {
    let left = 0 , right = nums.length - 1;
    if (nums.length == 1)
        return (nums[0] == target) ? target : 0;
    
    let sum = 0; 
    while(left <= right && left < nums.length) {
        sum += nums[left];
    };    
    return 0;
};
// const target = 7, nums = [2,3,1,2,4,3];
// const result = minSubArrayLen(target, nums);
// console.log(`Result is ${result}`);

function sort(dict: any) {
    let items: any[] = Object.keys(dict).map(key => [key, dict[key]]);
    console.log(items);
    items = items.sort((first, second): any => {
        return second[1] - first[1];
    });
    return items;
}

function sortKeys(items: any[]) {
    const first = items[0][0]
    items = items.sort((first, second): any => {
        if (first[1] == second[1]) {
            return second[0] - first[0];
        }
    });
    return items;
}


function mostFrequent(nums: number[], key: number): number {
    let dict = {};
    for(var index in nums)
    {
        if (nums[index] == key) {
            console.log(key, index);
            for(var j = Number(index) + 1; j < nums.length; j++)
            { 
                const target = nums[j];
                if (!Object.keys(dict).includes(target.toString()) && !Object.keys(dict).includes(key.toString())) {
                    const l = nums.filter((value, index) => {if (value == target) return index}).length;
                    dict = {...dict, [target]: l};
                }
            }
        }   
    }
    console.log(dict);
    let items = sort(dict);
    items = sortKeys(items);
    console.log(items);
    return items[0][0];
};


function maximumDifference(nums: number[]): number {
    let result: number = -1;
    for(let i=0; i<nums.length-1; i++) {
        for(let j=i+1; j<nums.length; j++) {
            if (nums[j] > nums[i])
            {
                result = Math.max(result, nums[j] - nums[i]);
            }
        }
    }
    return result;
};
// const nums = [1,5,2,10];
// const result = maximumDifference(nums);
// console.log(`Result is ${result}`);
function maxDistance(nums: number[]): number {
    let result: number = -1;
    
    for(let i=0; i<nums.length; i++) {
        for(let j = nums.length-1; j > i; j--)
        {
            if (nums[j] != nums[i])
                result = Math.max(result, j - i);
        }
    }
    return result;
};
// const colors = [1,1,1,6,1,1,1];
// const colors = [1,8,3,8,3];

function findPoisonedDuration(timeSeries: number[], duration: number): number {
    let result: number = 0;
    // previous elements
    for (var i=0; i< timeSeries.length - 1; i++) {
        if (timeSeries[i] + duration < timeSeries[i+1])
            result += duration; 
        else
            result += timeSeries[i+1] - timeSeries[i];
    }    
    //last element
    result += duration;
    return result; 
};


function range(start: number, end: number) { 
    return Array
        .apply(null, Array((end - start) + 1))
        .map(function(_, n){ return n + start; }); 
}

function mostVisited3(n: number, rounds: number[]): number[] {
    let result: number[] = [];
    interface obj {
        [key: string] : number
    };
    let start: number;
    let end: number;
    let values: number[]= [];
    for(let i = 0; i < rounds.length - 1; i++) {
        values = [];
        if (i == 0) {
            start = rounds[i];
        } else {   
            start = rounds[i] + 1;
        }
        
        end = rounds[i + 1];
        if (start < end)
            values = [...range(start, end)];
        else if (start > end)
        {
            values = [...range(start, n)];
            values = [...values, ...range(1, end)];
        }
        if (start == end && i == rounds.length - 2)
            values = [end];
        console.log(values);
        result = [...result, ...values];
    }

    let counter: obj = {};
    for(let element of result) {
        if (counter[element]) 
             counter[element] += 1;
        else
            counter[element] = 1; 
    } 
    console.log(JSON.parse(JSON.stringify(counter)))
    return result;
}

function mostFrequent2(nums: number[], key: number): number {
    let result: number = 0;
    let count : number = 0;
    interface obj {
        [key: string]: number
    };
    let counter: obj ={};
    for(let i = 0; i < nums.length - 1; i++) {
        if (nums[i] == key)
        {
            let target = nums[i+1].toString();
            if (!counter.hasOwnProperty(target))
                counter[target] = 1;
            else
                counter[target] += 1;
        }
    }
    const sortedArray = Object.entries(counter).sort((a, b) => b[1] - a[1]);
    //most frequent element is the key of 1st element
    return Number(sortedArray[0][0]);
};
// const nums = [1,100,200,1,100], key = 1; 
// const nums = [2,2,2,2,3], key = 2
// const result = mostFrequent2(nums, key);
// console.log(`Result is ${result}`);

// function cellsInRange(s: string): string[] {
//     const result: string[] = [];
//     const pattern = /([A-Z]+)([1-9]+):([A-Z]+)([1-9]+)/g;
//     const iter = s.matchAll(pattern);
//     const values = iter.next().value;
//     const l1 = values[1]; 
//     const n1 = values[2];
//     const l2 = values[3];
//     const n2 = values[4];
//     for(let row: number = l1.charCodeAt(0); row <= l2.charCodeAt(0); row++)
//        for(let col: number = Number(n1); col <= Number(n2) ;col++)   
//         {
//             result.push(String.fromCharCode(row)+col.toString());
//         }   
//     return result;
// };
// const s = "K1:L2";
// const result = cellsInRange(s);
// console.log(`Result is ${result}`);
function numOfStrings(patterns: string[], word: string): number {
    let counter: number = 0;
    for(var pattern of patterns) {
        if (word.includes(pattern))
            counter+=1;  
    }
    return counter;
};

// const patterns = ["a","abc","bc","d"], word = "abc"
// const patterns = ["a","b","c"], word = "aaaaabbbbb"
// const result = numOfStrings(patterns, word);
// console.log(`Result is ${result}`);
function countEven(num: number): number {
    if(num < 2)
        return 0;    
    let counter: number = 0;
    for(let i = 2; i<= num; i++) {
        let result: number = i.toString().split("").reduce((a, b) => Number(a) + Number(b), 0);
        if (result % 2 == 0)
            counter++;
    }  
    return counter;
};
// const num = 30;
// const num = 4;
// const result = countEven(num);
// console.log(`Result is ${result}`);
function getLucky(s: string, k: number): number {
    let values: number[] = [];
    //Get ASCI ordering
    for(let chr of s) {
        let tmp = chr.charCodeAt(0) - "a".charCodeAt(0) + 1;
        tmp.toString().split("").forEach((val) => values.push(Number(val)));
    }

    let result: number = 0;
    //Transforms
    for(let i = 0; i < k; i++) 
    {   
        result = values.reduce((a, b) => a+b, 0);
        if (result.toString().length == 1)
            return result;
        values = [];
        result.toString().split("").forEach((val) => values.push(Number(val)));
    }
    return result;
};
// const s = "leetcode", k = 2;
// const s = "iiii", k = 1;
// const s = "zbax", k = 2;
// const result = getLucky(s, k);
// console.log(`Result is ${result}`);
function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    //construct Array[][]
    let adjList: number[][] = Array.from({length: n}, () => Array.from({length: n}, () => 0));

    //assign Edges
    if (n == 1)
        adjList[0][0] = 1;
    else
        for(let edge of edges) {
            const [i, j] = [...edge];
            adjList[i][j] = 1;
            adjList[j][i] = 1;    
        }

    //return required cell value
    return adjList[source][destination] ? true : false;
};
// const n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2;
// const n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5;
// const n = 1, edges: number | any = [], source = 0, destination = 0;
// const result = validPath(n, edges, source, destination);
// console.log(`Result is ${result}`);

function sortEvenOdd(nums: number[]): number[] {

    let result = Array.from({ length: nums.length }, () => 0);
    const even = nums.filter((value, index) => { if (index % 2 == 0) return value; });
    const odd = nums.filter((value, index) => { if (index % 2 == 1) return value; });
    even.sort((a, b) => a - b);
    odd.sort((a, b) => b -a);
    
    for (let i = 0; i < result.length; i++) {
        if (i % 2 == 0)
            result[i] = even.shift() as number;
        else
            result[i] = odd.shift() as number;
        console.log(i);
    }
    return result;
};
// const nums: number[] =  [4,1,2,3];
// const result = sortEvenOdd(nums);
// console.log(`Result is ${result}`);

// const nums: number[] = [2,3,-1,8,4];
// const result = findMiddleIndex(nums);
// console.log(`Result is ${result}`);

function countKDifference(nums: number[], k: number): number {
    let counter: number = 0;
    for(let i=0; i< nums.length; i++)
        for (let j=i + 1; j< nums.length; j++)
            if (Math.abs(nums[i] - nums[j]) == k) 
                counter++;
    return counter;
};
// const nums = [1,2,2,1], k = 1;
// const result = countKDifference(nums, k);
// console.log(`Result is ${result}`);

function countValidWords(sentence: string): number {
    let counter: number = 0;
    const words = sentence.split(" ");
    const pattern = /^([\.\,\!]?)$|^([a-z]+)\-?([a-z]+)?([\.\,\!]?)$/;
    for(let word of words) {
        let result: any = pattern.exec(word); 
        if (result && result.input != '' && result.input[result.input.length-1] != '-') {
            console.log(result.input);
            counter++;
        }
    }
    return counter;
};
//const sentence = "cat and  dog";
//const sentence = "alice and  bob are playing stone-game10";
// const sentence = "!this  1-s b8d!";
// const sentence = ",!";
//const sentence = "a";
// const sentence = ". ! 7hk  al6 l! aon49esj35la k3 7u2tkh  7i9y5  !jyylhppd et v- h!ogsouv 5";
// const result = countValidWords(sentence);
// console.log(`Result is ${result}`);



function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
   
    const values: number[] = [...new Set(nums1), ...new Set(nums2), ...new Set(nums3)];
    interface obj {
        [key: string]: number,
    };
    const counter: obj = {};

    for(const value of values)
    {
        if (!counter[value]) {
            counter[value] = 1;
        } else {
            counter[value]++;
        }
    }
    console.log(counter);
    let result: number[] = [];
    for(const key in counter){
        if (counter[key] >= 2)
            result.push(Number(key));
    }
    return result;
};
// const nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3];
// const result = twoOutOfThree(nums1, nums2, nums3);
// console.log(`Result is ${result}`);

// function longestNiceSubstring(s: string): string {


// };
// const s: string = "YazaAay";
// const result = longestNiceSubstring(s);
// console.log(`Result is ${result}`);
function secondHighest(s: string): number {
    let nums: number[] = [];
    for(let str of s) {
        if (isNaN(Number(str))) 
            continue;
        nums.push(Number(str));
    }
    const numSet = new Set([...nums]);
    nums = [...numSet];
    nums.sort((a, b)=> b-a);
    return nums.length > 1 ? nums[1] : -1;
};

// const s: string = "dfa12321afd";
// const result = secondHighest(s);
// console.log(`Result is ${result}`);
function countOperations(num1: number, num2: number): number {
    if (num1 == 0 || num2 == 0)
        return 0;

    const nums = [num1, num2];
    let operations = 0;
    do {
        operations ++;
        if (nums[0] > nums[1])
            nums[0] -= nums[1];
        else if (nums[1] > nums[0])
            nums[1] -= nums[0];
        else
            break;
    }
    while(nums[0] != 0  && nums[1] != 0);
    return operations;
};
// const num1 = 2, num2 = 2;
// const result = countOperations(num1, num2);
// console.log(`Result is ${result}`);



function gcd(a: number, b: number): number {
    // Everything divides 0
    if (a == 0)
       return b;
    if (b == 0)
       return a;
  
    // base case
    if (a == b)
        return a;
  
    // a is greater
    if (a > b)
        return gcd(a-b, b);
    return gcd(a, b-a);
};

function findGCD(nums: number[]): number {
    const minNum: number = Math.min(...nums);
    const maxNum: number = Math.max(...nums);
    return gcd(minNum, maxNum);
}
// const nums: number[] = [2,5,6,9,10];
// const result: number = findGCD(nums);
// console.log(`Result is ${result}`);

function isThree(n: number): boolean {
    if (n < 2 ) 
        return false;
    let divisors : number = 2;
    for(let val: number= 2; val < n; val++) 
        if (n % val == 0)
            divisors++;
    return divisors == 3;
};
// const n: number = 2;
// const result: boolean = isThree(n);
// console.log(`Result is ${result}`);

function minimumCost(cost: number[]): number {
    if ( cost.length < 3)
        return cost.reduce((a, b)=> a + b, 0);
    cost.sort((a, b) => b-a);
    let i : number = 0;
    let finalCost: number = 0;
    while(true)
    {
        if (i + 2 > cost.length)
        {   for(let j=i; j<cost.length; j++)
                finalCost += cost[j];
            return finalCost;
        }

        finalCost += cost[i] + cost[i+1];
        i+=3;
    };
     
};
// const cost: number[] = [6,5,7,9,2,2];
// const cost: number[] = [1,2,3];
// const result: number = minimumCost(cost);
// console.log(`Result is ${result}`);
function construct2DArray(original: number[], m: number, n: number): number[][] {
    if (original.length !== m * n)
        return [];

    let result: number[][] = [...Array(m)].map(x => [...Array(n)].map(x => 0));
    let k: number = 0;
    for(let i=0; i < m; i++)
        for(let j=0; j < n; j++)
            result[i][j] = original[k++];
    return result;
};
// const original = [1,2,3,4], m = 2, n = 2;
// const original = [1, 2], m= 1, n = 1; 
// const original = [3], m = 1, n = 2;
// const result: number[][] = construct2DArray(original, m, n);
// console.log(`Result is ${result}`);
function areNumbersAscending(s: string): boolean {
    let n: number = -1;
    const words = s.split(" ");
    for(var word of words) {
        if (!isNaN(Number(word)))
            if (Number(word) > n)
                n = Number(word);
            else
                return false; 
    }
    return true;
};
// const s: string =  "hello world 5 x 5";
// const result: boolean = areNumbersAscending(s);
// console.log(`Result is ${result}`);
function maxSubsequence(nums: number[], k: number): number[] {
    if (nums.length === k) {
      return nums
    }    
    const arr = nums
        .map((e, i) => ({e, i}))
        .sort((a, b) => b.e - a.e)
    
    console.log(arr);

    arr.length = k

    return arr
      .sort((a, b) => a.i - b.i)
      .map(e => e.e)
  };

// const nums = [-1,-2,3,4], k = 3
// const result: number[] = maxSubsequence(nums, k);
// console.log(`Result is ${result}`);

function mostVisited(n: number, rounds: number[]): number[] {
    interface obj {
        [key: number]: number
    };
    let counter: obj = {}; 
    for(let i = 1; i<= n; i++) {
        counter = {...counter, [i]:0}
    }
    //set start position
    counter[rounds[0]] = 1;
    //count visits
    for(let i = 0; i < rounds.length -1; i++)
    {
        if (rounds[i] + 1 <= rounds[i+1])
        {
            for(let j=rounds[i] +1; j<= rounds[i+1]; j++)
                counter[j]++;
        } else {
            for(let j=rounds[i] + 1; j<= n; j++)
                counter[j]++;
            for(let j=1; j<= rounds[i+1]; j++)
                counter[j]++;
        }
    }
    let maxNum: number = 0;
    let result = [];
    for(let entry of Object.entries(counter))
    {
        if (maxNum > entry[1])
            continue;
        if (maxNum < entry[1])
            result = [];
        result.push(entry[0]);
        maxNum = Math.max(entry[1], maxNum);
    }
    console.log(result);
    result = result.map(x => Number(x)).sort((a, b)=> a-b);
    console.log(counter);
    return result;
};


//const n = 4, rounds = [1,3,1,2]
//const n = 2, rounds = [2,1,2,1,2,1,2,1,2]
// const n = 7, rounds = [1,3,5,7]
// const result: number[] = mostVisited(n, rounds);
// console.log(`Result is ${result}`);
function checkOnesSegment(s: string): boolean { 

    let result: boolean = false;
    let counter: number = 0;
    let lastIndex: number = 0;
    for(let i = 0; i < s.length; i++) {
        if(counter == 0 && s[i] == '1')
            counter = 1;
        if (counter == 1 && s[i] == '1' && i > (lastIndex + 1))    
            return false;
        if ( s[i] == '1')
            lastIndex = i;
    }
    return true;
};
// if (counter == 1 && s[i] == '1' && i == lastIndex + 1)
// const s = "1001";
// const result: boolean = checkOnesSegment(s);
// console.log(`Result is ${result}`);

export {};