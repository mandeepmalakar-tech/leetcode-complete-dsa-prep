# JavaScript Math Functions for DSA 🚀

As a senior engineer, let me give you a **complete reference** of all Math functions you'll actually use in DSA problems.

---

## 1. 🔢 Number & Rounding Functions

```javascript
Math.abs(-5)        // 5      → Absolute value (used in distance problems)
Math.ceil(4.1)      // 5      → Round UP (used in division/partition problems)
Math.floor(4.9)     // 4      → Round DOWN (used in binary search, indexing)
Math.round(4.5)     // 5      → Round nearest
Math.trunc(4.9)     // 4      → Remove decimal (like floor for positives)
Math.trunc(-4.9)    // -4     → (unlike floor: Math.floor(-4.9) = -5)
```

---

## 2. 📐 Power, Root & Log Functions

```javascript
Math.pow(2, 10)     // 1024   → 2^10 (used in bit manipulation, tree problems)
Math.sqrt(144)      // 12     → Square root (used in prime checking)
Math.cbrt(27)       // 3      → Cube root
Math.log(Math.E)    // 1      → Natural log (ln)
Math.log2(1024)     // 10     → Log base 2 (used in tree height, binary search)
Math.log10(1000)    // 3      → Log base 10
```

> 💡 **Senior Tip:** `Math.log2(n)` tells you the **height of a binary tree** with n nodes!

---

## 3. ⚡ Min, Max & Comparison

```javascript
Math.max(3, 7, 1)         // 7   → Find max
Math.min(3, 7, 1)         // 1   → Find min

// DSA Trick: Use with spread operator on arrays
const arr = [3, 7, 1, 9, 2];
Math.max(...arr)           // 9
Math.min(...arr)           // 1

// ⚠️ WARNING: Spread fails on large arrays (>100k elements)
// Use reduce() instead for large arrays:
arr.reduce((a, b) => Math.max(a, b))   // Safe for large arrays
```

---

## 4. 🎲 Random Numbers

```javascript
Math.random()              // 0.0 to 0.99  → Random float

// DSA patterns you'll use constantly:
Math.floor(Math.random() * 10)        // 0 to 9
Math.floor(Math.random() * 10) + 1   // 1 to 10

// Random between min and max (inclusive):
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Used in: Randomized QuickSort pivot selection!
```

---

## 5. ♾️ Infinity (Critical for DSA!)

```javascript
Math.Infinity              // use: Infinity  (global)
-Infinity                  // Negative infinity

// You'll use this CONSTANTLY in DSA:
let min = Infinity;        // Initialize before finding minimum
let max = -Infinity;       // Initialize before finding maximum

// Example - finding min in array:
let result = Infinity;
for (let num of [5, 3, 8, 1]) {
    result = Math.min(result, num);   // result = 1
}
```

---

## 6. 🔬 Number Constants

```javascript
Math.PI          // 3.14159...  → Circle problems
Math.E           // 2.71828...  → Natural log base
Math.SQRT2       // 1.41421...  → √2
Number.MAX_SAFE_INTEGER   // 9007199254740991 → Largest safe int in JS
Number.MIN_SAFE_INTEGER   // -9007199254740991
```

---

## 7. 🧮 Bitwise (Bonus - Related to Math in DSA)

```javascript
// These are FASTER than Math functions for integers:
n >> 1           // Same as Math.floor(n / 2) — used in binary search!
n << 1           // Same as n * 2
n & 1            // Check if odd (1) or even (0)

// Example: Mid in Binary Search
let mid = left + ((right - left) >> 1);   // Senior way ✅
let mid2 = Math.floor((left + right) / 2); // Also fine ✅
```

---

## 8. 🛠️ DSA Helper Functions You Should Build

```javascript
// 1. GCD - Euclidean Algorithm (used in math problems)
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

// 2. LCM
function lcm(a, b) {
    return (a / gcd(a, b)) * b;
}

// 3. isPrime - uses Math.sqrt!
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {  // Key optimization!
        if (n % i === 0) return false;
    }
    return true;
}

// 4. Digit count
function digitCount(n) {
    return Math.floor(Math.log10(Math.abs(n))) + 1;
}
digitCount(12345)   // 5
```

---

## 📊 Quick Reference Cheat Sheet

| Function | Use Case in DSA |
|---|---|
| `Math.floor(n/2)` | Binary Search midpoint |
| `Math.sqrt(n)` | Prime number checking |
| `Math.log2(n)` | Tree height calculation |
| `Math.abs(a-b)` | Distance between elements |
| `Math.max/min` | DP (Dynamic Programming) |
| `Infinity` | Initialize min/max trackers |
| `Math.pow(2,n)` | Subsets count = 2^n |

---

## 🗺️ Your Learning Roadmap

```
Day 1-2:  Master Math functions above ✅
Day 3-5:  Arrays + Math.floor (Binary Search)
Day 6-10: Recursion + Math.pow, Math.log
Day 11+:  DP problems → Math.max/min everywhere
```

Start practicing these on **LeetCode Easy** problems first. The most used ones in DSA are: `Math.floor`, `Math.max`, `Math.min`, `Math.abs`, and `Infinity`. Get those burned into muscle memory! 💪