import { time } from "console";
import { allowedNodeEnvironmentFlags } from "process";

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
};


function preorderTraversal(root: TreeNode | null): number[] {
    function dfs(root: TreeNode | null): void {
        if(root == null)
            return;    
        values = [...values, root.val];
        if (root.left != null)  
            dfs(root.left);  
        if (root.right != null)       
            dfs(root.right);
    }
    let values: number[] = [];
    dfs(root);
    return values;    
};

// const result = preorderTraversal(root);
// console.log(`Result is ${result}`)

function maxAscendingSum(nums: number[]): number {
    
    let partSum: number = nums[0];
    let maxSum: number = 0;
    for(let i = 1; i < nums.length; i++)
    {
        if (nums[i] > nums[i-1])
            partSum += nums[i];
        else {
            maxSum = Math.max(maxSum, partSum);
            partSum = nums[i];
        }
    }
    return Math.max(partSum, maxSum);
};
// const nums: number[] = [10,20,30,5,10,50];
// const nums: number[] = [10,20,30,40,50];
// const nums = [12,17,15,13,10,11,12]
// const result = maxAscendingSum(nums);
// console.log(`Result is ${result}`)
function minimumDifference(nums: number[], k: number): number {

    nums.sort((a, b) => b - a);
    let partSum: number;
    let minSum: number = nums.reduce((a, b)=> a + b,0);
    let i: number = 0;
    let j: number = 0;
    do {
        j = i + k -1;
        if ( j < nums.length)
        {   partSum = nums[i] - nums[j];
            minSum = Math.min(partSum, minSum);
        }
        i++;
    } while(j < nums.length);

    return minSum;
};

// const nums: number[] = [9,4,1,7], k: number = 2;
// const nums: number[] = [90], k = 1
// const nums: number[] = [9,4], k: number = 2;
// const result = minimumDifference(nums, k);
// console.log(`Result is ${result}`)
function numDifferentIntegers(word: string): number {
    const re: RegExp =  (/[0-9]+/g);
    let result: any[]  = word.match(re);
    let i :number = 0;
    while (result != null && i < result.length) {
        while(result[i][0] == '0') {
            result[i] = result[i].slice(1);
        }
        i++;
    }; 
    const s = [...new Set(result)]
    return s.length;
};
// const word = "a123bc34d8ef34"
// const word = "a1b01c001"
//const word = "0a0"
// const word = "035985750011523523129774573439111590559325";
// const result = numDifferentIntegers(word);
// console.log(`Result is ${result}`)

function truncateSentence(s: string, k: number): string {
    const result = s.split(" ");
    result.length = k;
    return result.join(" ");
};
// const s = "Hello how are you Contestant", k = 4;
// const result = truncateSentence(s, k);
// console.log(`Result is ${result}`)
function areOccurrencesEqual(s: string): boolean {
    let counter: any = {};
    for(let chr of s) {
        if (!counter[chr])
           counter[chr] = 1;
        else
            counter[chr]++;
    }
    const values = Object.values(counter);
    return [...new Set(values)].length == 1;
};
// const s = "abacbc"
// const result = areOccurrencesEqual(s);
// console.log(`Result is ${result}`)

function shift(s: string, shift: number) {
    const code = s.charCodeAt(0) + shift;
    return String.fromCharCode(code);
}

function replaceDigits(s: string): string {
    let result: string[] = s.split("");

    for(let i = 0 ; i < s.length; i++)
    {   if (i % 2 == 1)
            result[i] = shift(s[i-1], Number(s[i]));
    }
    return result.join("");
};
// const s = "a1c1e1";
// const result = replaceDigits(s);
// console.log(`Result is ${result}`)
function minOperations(nums: number[]): number {
    if(nums.length == 1)
        return 0;

    let counter: number = 0;
    for(let i = 1; i < nums.length; i++)
    {
        const expected: number = Math.max(nums[i-1]+1, nums[i])
        counter += expected - nums[i];
        nums[i] = expected;    
    }
    return counter;
};
// const nums = [1,1,1];
// const nums: number[] = [1,5,2,4,1]
// const result = minOperations(nums);
// console.log(`Result is ${result}`)
function getMinDistance(nums: number[], target: number, start: number): number {
    if (nums.length == 1)
        return 0;

    const indices = nums.map((value, index) => {
        if (value == target)
            return index;
    }).filter(x => x != undefined);
    
    let minDis: number = nums.length;
    for(let index of indices) {
        minDis = Math.min(Math.abs(index-start), minDis);
    }
    
    return minDis;
};
// const nums = [1,2,3,4,5], target = 5, start = 3;
// const nums = [1,1,1,1,1,1,1,1,1,1], target = 1, start = 0;
// const result = getMinDistance(nums, target, start);
// console.log(`Result is ${result}`);

function maximumPopulation(logs: number[][]): number {
    const years: number[] = [];
    let partMax: number = 0;    
    let finalMax: number = 0;
    let result: number[] = [];
    for(const log of logs) {
        partMax = Math.max(log[1] - log[0] - 1, partMax);
        if (partMax > finalMax) 
        {   finalMax = partMax;
            result = [];
            result.push(log[0]) 
        } else {
            result.push(log[0]) 
        }
    }
    console.log(result);
    result.sort((a, b)=> a-b);
    return result[0];
};
// const logs: number[][] = [[1993,1999],[2000,2010]];
// const result = maximumPopulation(logs);
// console.log(`Result is ${result}`);
function inorderTraversal(root: TreeNode | null): number[] {
    function dfs(root: TreeNode | null): void {
        if(root == null)
            return;
        if(root.left != null)
            dfs(root.left);
        result = [...result, root.val];
        if(root.right != null)
            dfs(root.right);     
    };
    let result: number[] = [];
    dfs(root);
    return result;
};

function postorderTraversal(root: TreeNode | null): number[] {
    function dfs(root: TreeNode | null): void {
        if(root == null)
            return;
        if(root.left != null)
            dfs(root.left);
        if(root.right != null)
            dfs(root.right);     
        result = [...result, root.val];
    };
    let result: number[] = [];
    dfs(root);
    return result;
};

function sumOfLeftLeaves(root: TreeNode | null): number {
    function dfs(root: TreeNode | null): number {
        let result: number =0;
        
        if (root == null)
            return 0;
        
        if (root && root.left == null && root.right == null)
            return 0;

        if (root && root.left && root.left.left)
            result += dfs(root.left);
        else if (root.left.left == null)
            result += root.left.val;

        if(root && root.right)
            result += dfs(root.right); 

        return result;
    }
    const result: number =  dfs(root);
    return result;
}

// const root = new TreeNode(3);
// const nine = new TreeNode(9);
// const twenty = new TreeNode(20);

// const fivteen = new TreeNode(15);
// const seven = new TreeNode(7);
// twenty.right = seven;
// twenty.left = fivteen;
// root.left = nine;
// root.right = twenty;

const root = new TreeNode(1);
const two = new TreeNode(2);
const three = new TreeNode(3);

const four = new TreeNode(4);
const five = new TreeNode(5);
two.left = four;
two.right = five;
root.left = two;
root.right = three;

const result: number = sumOfLeftLeaves(root);
console.log(`Result is ${result}`);

function largestOddNumber(num: string): string {
    if (Number(num) %2 ==1)
        return num;
    let j:number =0;
    let result = "";
    for(let i:number =0; i < num.length; i++)
    {   
        if (Number(num[i]) %2 == 1) {
            for(let k: number=j; k <= i; k++)
                result = result.concat(num[k]);
            j = i + 1;
        }
    }
    return result;
};
//const  num = "52";
// const  num = "10133890"; 
// const result: string = largestOddNumber(num);
// console.log(`Result is ${result}`);
function canBeTypedWords(text: string, brokenLetters: string): number {
    const words = text.split(" ");
    let failed: number = 0;
    for(const word of words) {
        for(const letter of brokenLetters.split(""))
            if (word.includes(letter))
            {
                failed++;
                break;
            }
    }
    return words.length - failed;
};
//const text = "hello world", brokenLetters = "ad";
// const text = "leet code", brokenLetters = "lt"
// const result: number = canBeTypedWords(text, brokenLetters);
// console.log(`Result is ${result}`);
function sortSentence(s: string): string {
    let words = s.split(" ");
    function compare(a: string, b: string) {
        if (a[a.length-1] < b[b.length-1])
            return -1;
        if (a[a.length-1] > b[b.length-1])
            return 1;
    }
    words.sort((a, b) => compare(a, b))
    words = words.map(x => x.slice(0,x.length-1));
    return words.join(" ");
};
// const s: string = "is2 sentence4 This1 a3";
// const result: string = sortSentence(s);
// console.log(`Result is ${result}`);
function reformatNumber(number: string): string {
    const nums = number.replace(/[\-\ \.]/g, "");
    let i: number = 0;
    let result: string[] = [];
    while( i< nums.length) {
        if (nums.length % 4 == 0)
        {   result.push(nums.slice(0, 4));
            i += 4;
        } else if ( nums.length % 2 == 0) {
            result.push(nums.slice(0, 2));
            i += 2
        } else {
            result.push(nums.slice(0, 3));
            i += 3;
        }
    }
    console.log(result);
    console.log(nums);
    return "";
};
// const number = "1-23-45 6";
// const result: string = reformatNumber(number);
// console.log(`Result is ${result}`);
export {};