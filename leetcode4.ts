function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
    "SOLVE DISJSTRA"
    return 0;
};
// const n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
// const result:number = findCheapestPrice(n, flights, src, dst, k);
// console.log(`The result is ${result}`);
function countBattleships(board: string[][]): number {
    const m: number = board.length;
    const n: number = board[0].length;

    const boardObjs: any[][] = board.map(row => row.map(column => {
        let obj: any = {};
        obj["value"] = column;
        obj["visited"] = false;
        return obj;
    }));

    function dfs(i: number, j: number, newi: number, newj: number): boolean
    {
        let result: boolean = true;
        if (((newi >= 0 && newi < m) && (newj>=0 && newj< n)) && !boardObjs[i][j].visited)   
        {
            boardObjs[i][j].visited = true;
            if (boardObjs[newi][newj] == 'X' && (Math.abs(newi - i) == 1) || (Math.abs(newj - j) == 1))     
                return false;

            result &&= dfs(i, j, i-1, j);
            result &&= dfs(i, j, i+1, j);
            result &&= dfs(i, j, i, j-1);
            result &&= dfs(i, j, i, j+1);
        }
        return result;
    }

    let result: number = 0;
    for(let i=0; i<m; i++)
        for(let j=0; j<n; j++)
            if (board[i][j] == 'X') {
                if(dfs(i, j, i, j)) {
                    console.log(i, j);
                    result++;
                }
            }
    return result;
};
// const board: string[][] = [["X",".",".","X"],
//                            [".",".",".","X"],
//                            [".",".",".","X"]]
// const result:number = countBattleships(board);
// console.log(`The result is ${result}`);
function binarySearch(nums: number[], record: number): number {
    const n: number = nums.length;
    let start: number = 0;
    let end: number = n-1;
    while (start <= end) {
        const mid: number = Math.floor((start + end)/2);
        if  (nums[mid] == record)
            return record;

        if (nums[mid] > record) 
            end = mid-1;
        
        if (nums[mid] < record)
            start = mid + 1;
    };
    return -1;
}


class TweetCounts {
    tweetMap : any = {};
    result: number[];
    freq: any = {};
    
    constructor() {
        this.result = [];
        this.freq = {"minute": 60, "hour": 3600, "day": 86400};
    }

    recordTweet(tweetName: string, time: number): void {
        if (!this.tweetMap[tweetName])
            this.tweetMap[tweetName] = [];
        this.tweetMap[tweetName].push(time);
        this.tweetMap[tweetName].sort((a: number, b: number) => a - b);
        console.log(this.tweetMap[tweetName]);
    }

    getTweetCountsPerFrequency(freq: string, tweetName: string, startTime: number, endTime: number): number[] {
        this.result = [];
        let start = startTime;
        while(start <= endTime) {
            const finish: number = start + this.freq[freq];
            let counter: number = 0;
            for (let num of this.tweetMap[tweetName])
            {
                if (num >= start && num < finish)
                    counter++;
                
                if (num > finish)
                    break;
            }
            this.result.push(counter);
            start += this.freq[freq];
        };
        return this.result;
    }
}

// const tweetCounts = new TweetCounts();
// tweetCounts.recordTweet("tweet3", 0);                              // New tweet "tweet3" at time 0
// tweetCounts.recordTweet("tweet3", 60);                             // New tweet "tweet3" at time 60
// tweetCounts.recordTweet("tweet3", 10);                             // New tweet "tweet3" at time 10
// let result: number[] = tweetCounts.getTweetCountsPerFrequency("minute", "tweet3", 0, 59);
// console.log(`The result is ${result}`);
// result = tweetCounts.getTweetCountsPerFrequency("minute", "tweet3", 0, 60);
// console.log(`The result is ${result}`);
// tweetCounts.recordTweet("tweet3", 120);                            // New tweet "tweet3" at time 120
// result = tweetCounts.getTweetCountsPerFrequency("hour", "tweet3", 0, 210);  // return [4]; chunk [0,210] had 4 tweets
// console.log(`The result is ${result}`);

// function returnArea(l: number, r: number) {
//     const currentArea: number = (r - l)*Math.min(height[l], height[r]);
//     return currentArea; 
// }

// function maxArea(height: number[]): number {
//     let l: number =0;
//     let r: number = height.length-1; 
//     let maxArea: number = returnArea(l, r);
//     let left: number = 0;

//     while( l < r) {

//         const minHeight = Math.min(height[l], height[r])
//         if (height[l++] > minHeight) {
//             let tempArea: number =  returnArea(l, r);
//             maxArea = Math.max(maxArea, tempArea);
//         }
        
//         if (height[r--] > minHeight) {
//             let tempArea: number =  returnArea(l, r);
//             maxArea = Math.max(maxArea, tempArea);
//         }
        


//         let tempArea: number = returnArea(l+1, r);
//         // if (tempArea >= maxArea) { 
//         //     maxArea = tempArea;
//         //     l++;
//         //     continue;
//         // }
       
//         // tempArea = returnArea(l, r--);
//         // maxArea = Math.max(tempArea, maxArea);
//     };
//     return maxArea;
// };
//const height: number[] = [1,8,6,2,5,4,8,3,7];
// const height: number[] = [1,1];
//const height: number[] = [2,3,10,5,7,8,9];
// const height: number[] = [2,3,4,5,18,17,6]
// const result: number = maxArea(height);
// console.log(`The result is ${result}`);
// function numSubarraysWithSum(nums: number[], goal: number): number {

//     let count: number = 0;
//     let sum: number = 0;
//     function dfs(): number {
//         for(let i=0; i<nums.length; i++)
//         {
//             sum += nums[i];
//             if (nums[i] == goal)
//                 count++;
//             if (sum == goal)
//                 count++;
//         }
//     }
//     return dfs();
// };
// const nums = [1,0,1,0,1], goal = 2;
// const result: number = numSubarraysWithSum(nums, goal);
// console.log(`The result is ${result}`);
function knightDialer(n: number): number {
    let count: number = 0;
    let board: boolean[][] = [...Array(4)].map(row => [...Array(3)].fill(true))
    board[3][0] = false;
    board[3][2] = false;
    let boardObjs = board.map(row => row.map(column => {
        let obj: any = {};
        obj["value"] = column;
        obj["visited"] = false;
        return obj;
    }));
    let word: number = 0;
    
    function dfs(r: number, c: number, n: number) {
        if (r < 0 || r > 3 || c < 0 || c > 2)      
            return 0;

        if (boardObjs[r][c].value == false)
            return 0;
      
        // if (boardObjs[r][c].visited || boardObjs[r][c].value == false)
        //     return 0;
        
        // boardObjs[r][c].visited = true;
        
        
        let result: number = 0;
        if (word < n) {
            word++;
            result += 1;
            result += dfs(r-2, c-1, n-1);
            result += dfs(r+2, c-1, n-1);
            result += dfs(r-2, c+1, n-1);
            result += dfs(r+2, c+1, n-1);
            result += dfs(r-1, c-2, n-1);
            result += dfs(r+1, c-2, n-1);       
            result += dfs(r-1, c+2, n-1);
            result += dfs(r+1, c+2, n-1);
            result %= (10**9+7);    
        } else 
            word--;
        return result;
    }

    let result: number =0;
    for(let i=0; i < 4; i++)
        for(let j=0; j< 3; j++)    
        {
            // if (!boardObjs[i][j].visited && boardObjs[i][j].value)
            
            result += dfs(i, j, n);
        }   

    console.log(...boardObjs, result);
    return result;
};
// const n: number = 1;
// const result: number = knightDialer(n);
// console.log(`The result is ${result}`);
function customSortString(order: string, s: string): string {

    let found: string[] = [];
    let notFound: string[] = [];
    for(const letter of s) {
        if (order.indexOf(letter) == -1)
            notFound = [...notFound, letter];
        else
            found = [...found, letter];
    }   
    console.log(found, notFound);

    function custom(a: string, b: string) {
        if (order.indexOf(a) > order.indexOf(b)) return 1;
        if (order.indexOf(a) < order.indexOf(b)) return -1;
        return 0;
    }

    found = found.sort((a: any, b: any) => custom(a, b));
    const result: string[] = [...found, ...notFound];
    return result.join("");
};
// const order: string = "cbafg", s: string = "abcd";
// const order = "cbafg", s = "abcd"
// const result: string = customSortString(order, s);
// console.log(`The result is ${result}`);
function sortJumbled(mapping: number[], nums: number[]): number[] {
    function mapped(num: number): number {
        const s: string[] = num.toString().split("").map(index => mapping[Number(index)].toString());
        return Number(s.join(""));
    }
    
    let mappedObjs: any[] = nums.map(num => {
        let obj: any = {};
        obj["value"] = num; 
        obj["mapped"] = mapped(num); 
        obj["index"] = nums.indexOf(num);
        return obj;
    }); 
    const result: number[] = mappedObjs.sort((a, b)=> {
        if (a.mapped > b.mapped) return 1;
        if (a.mapped < b.mapped) return -1;
        if (a.index > b.index) return 1;
        if (a.index < b.index) return -1;
        return 0;
    }).map(x => x.value);
    return result;

};
// const mapping = [0,1,2,3,4,5,6,7,8,9], nums = [789,456,123]
// //const mapping = [8,9,4,0,2,1,3,5,7,6], nums = [991,338,38]
// const result: number[] = sortJumbled(mapping, nums);
// console.log(`The result is ${result}`);
function invalidTransactions(transactions: string[]): string[] {
    let invalid: string[] = [];
    let transactionsObjs: any[] = transactions.map(transaction => {
        let obj: any = {};
        const splitted = transaction.split(',');
        obj["name"] = splitted[0];
        obj["time"] = splitted[1];
        obj["amount"] = splitted[2];
        obj["city"] = splitted[3];
        return obj;
    });
    
    for(const x of transactionsObjs)
        if (x.amount > 1000) {
            let returned: string = [x.name, x.time, x.amount, x.city].join(',');  
            invalid.push(returned);      
        }
    
    console.log(...invalid);
    transactionsObjs = transactionsObjs.filter(x => x.amount < 1000);


    let visited: any = new Set();
    for(let i=0; i <transactionsObjs.length; i++) {
        for(let j=0; j <transactionsObjs.length; j++)
            if (i != j && transactionsObjs[i].name == transactionsObjs[j].name && transactionsObjs[i].city != transactionsObjs[j].city && Math.abs(transactionsObjs[j].time - transactionsObjs[i].time) < 60) {
                if (!visited.has(i)) {
                    visited.add(i);
                    let returned: string = [transactionsObjs[i].name, transactionsObjs[i].time, transactionsObjs[i].amount, transactionsObjs[i].city].join(',');  
                    invalid.push(returned);
                }
            }
        }
    return invalid;
        return [];
};
// const transactions: string[] = ["alice,20,800,mtv","alice,50,100,beijing"];
// const transactions: string[] = ["bob,689,1910,barcelona","alex,696,122,bangkok","bob,832,1726,barcelona","bob,820,596,bangkok","chalicefy,217,669,barcelona","bob,175,221,amsterdam"]
// //const transactions: string[] = ["alice,20,800,mtv","bob,50,1200,mtv"]
// const result: string[] = invalidTransactions(transactions);
// console.log(`The result is ${result}`);
function reorderedPowerOf2(n: number): boolean {
    let count: number = 0;
    while (n > 0) {
        let rem = n % 2;
        if (rem == 1)
            count++;
        if (count > 1) return false;
        n = (n % 2 == 0) ? n/2 : (n-1)/2; 
    }
    return true;
};
// const n: number = 1;
// const result: boolean = reorderedPowerOf2(n);
// console.log(`The result is ${result}`);
function getMaximumGold(grid: number[][]): number {
    const rows: number = grid.length;
    const columns: number = grid[0].length;
    let gridObjs = grid.map(row => row.map(column => {
        let obj: any = {};
        obj["value"] = column;
        obj["visited"] = false;
        return obj;
    }));

    let maxResult: number =0;
    function dfs(r: number, c: number): number {
        if (r < 0 || r > rows-1 || c < 0 || c > columns-1)
            return 0;
        if (gridObjs[r][c].visited)
            return 0;
        if (gridObjs[r][c].value == 0)
            return 0;

        let result: number = 0;
        gridObjs[r][c].visited = true;
        result += gridObjs[r][c].value;
        result += dfs(r-1, c);
        result += dfs(r+1, c);
        result += dfs(r, c-1);
        result += dfs(r, c+1);
        gridObjs[r][c].visited = false;
        // maxResult = Math.max(maxResult, result);
        return result;
    }

    let result: number = 0;
    for(let i=0; i<rows; i++) 
        for(let j=0; j<columns; j++) {
            if (!gridObjs[i][j].visited && gridObjs[i][j].value > 0) {
                result = dfs(i, j);
                console.log(result);
            }
        }
    return result;   
};
// const grid = [[0,6,0],[5,8,7],[0,9,0]]
// //const grid = [[3,2,0, 5, 7, 8]];
// const result: number = getMaximumGold(grid);
// console.log(`The result is ${result}`);
class StockPrice {
    kv: any = {};
    curList: number[];
    maxNum: number;
    minNum: number;
    maxMin: number[];
    len: number;
    constructor() {
        this.kv = {};
        this.curList = [];
        this.maxNum= 0;
        this.minNum=1e6;
        this.maxMin = [];
        this.len = 0;
    }

    update(timestamp: number, price: number): void {
        this.kv[timestamp] = price;
        this.curList.push(price);
        this.len++;
        console.log(this.curList, this.maxMin, this.kv);
    }

    current(): number {
        this.len--;
        console.log(this.curList, this.maxMin, this.kv);
        return this.curList.pop();
    }

    maximum(): number {
        this.maxMin = [];
        this.maxMin = [...this.maxMin, ...this.curList];
        this.maxMin.sort((a, b)=> a -b);
        console.log(this.curList, this.maxMin, this.kv, this.len);
        return this.maxMin[this.len-1]; 
    }

    minimum(): number {
        this.maxMin = [];
        this.maxMin = [...this.maxMin, ...this.curList];
        this.maxMin.sort((a, b)=> a -b);
        console.log(this.curList, this.maxMin, this.kv);
        return this.maxMin[0];
    }
    
}

// const stockPrice = new StockPrice();
// stockPrice.update(1, 10); // Timestamps are [1] with corresponding prices [10].
// stockPrice.update(2, 5);  // Timestamps are [1,2] with corresponding prices [10,5].
// stockPrice.current();     // return 5, the latest timestamp is 2 with the price being 5.
// let result = stockPrice.maximum();     // return 10, the maximum price is 10 at timestamp 1.
// console.log(result);

// stockPrice.update(1, 3);  // The previous timestamp 1 had the wrong price, so it is updated to 3.
//                           // Timestamps are [1,2] with corresponding prices [3,5].
// result =stockPrice.maximum();     // return 5, the maximum price is 5 after the correction.
// console.log(result);
// stockPrice.update(4, 2);  // Timestamps are [1,2,4] with corresponding prices [3,5,2].
// stockPrice.minimum();     // return 2, the minimum price is 2 at timestamp 4.


function minSteps(s: string, t: string): number {
    let cnt1: any = {};
    
    for(const letter of s) {
        if (!cnt1[letter])
            cnt1[letter] = 1;
        else
            cnt1[letter]++;
    }

    for(const letter of t) {
        if (!cnt1[letter])
            cnt1[letter] = -1;
        else
            cnt1[letter]--;
    }

    let c1: number = 0;
    let c2: number = 0;
    let value: any;

    for(value of Object.values(cnt1))
    {
        if(value > 0)
            c1 += value;
        if(value < 0)
            c2 += value;
    }

    const result: number = Math.min(c1, -1*c2); 
    return result;
};

//const s = "bab", t = "aba";
// const s = "leetcode", t = "practice"
// const result: number = minSteps(s, t);
// console.log(`The result is ${result}`);

function removeOccurrences(s: string, part: string): string {
    let stack: string[] = [];
    let j: number = 0;
    let flag: boolean = false;

    for(let i=0; i < s.length; i++) {
        
        stack.push(s[i]);
        if (j < part.length && s[i] == part[j]) {
            j++;
            continue;
        };

        if  (j == part.length -1) {    
            while(j > 0) {
                stack.pop();
            };
        } else
            j = 0;
    }

    return stack.join("");
};
// const s = "daabcbaabcbc", part = "abc";
// const result: string = removeOccurrences(s, part);
// console.log(`The result is ${result}`);
function minSteps2(s: string, t: string): number {
    function counter(s: string): any {
        let cnt: any = {};
        for(const letter of s) {
            if (!cnt[letter])
                cnt[letter] = 1;
            else
                cnt[letter]++;
        }
        return cnt;
    }
    
    const cnt1: any = counter(s);
    const cnt2: any = counter(t);
    let result: number =0;
    for(const key of Object.keys(cnt1)) {
        if (cnt2[key])
            result += Math.abs(cnt1[key] - cnt2[key])
        else
            result += cnt1[key];
    }

    for(const key of Object.keys(cnt2))
        if (!cnt1[key])
            result += cnt2[key];

    return result;
};

// const s = "leetcode", t = "coats";
// const s = "night", t = "thing"
// const result: number = minSteps2(s, t);
// console.log(`The result is ${result}`);


// function isNStraightHand(hand: number[], groupSize: number): boolean {
//     let records: any ={};
//     for(const value of hand) {
//         if (!records[value]) {
//             records[value] = 1
//         } else
//             records[value]++;
//     }
//     const entries = Object.entries(records).sort((a: any, b: any) => a[0]-b[0]);
//     const size: number = entries.length;

//     function dfs(entries: any[]) {
//         let counter : number = 0;
//         for(const entry of Object.entries(records))
//         {
//             if (entry[1] > 0) {
//                 records[entry[0]]--;
//                 counter++;
//             }
//             if (counter == groupSize) 
//                 dfs();
//         }
//     }
    
//     dfs(entries);
    
    
//     console.log(records);
//     return false;
// };
// const hand = [1,2,3,6,2,3,4,7,8], groupSize = 3;
// const hand = [9,6,5,3,4,8,8], groupSize = 3;
// const result: boolean = isNStraightHand(hand, groupSize);
// console.log(`The result is ${result}`);


