# 🔪 Slice and Splice

> A lightweight JavaScript utility that inserts all elements of one array into another at a given index — without mutating the originals.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

---

## Table of Contents

- [About](#about)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Examples](#examples)
- [Edge Cases](#edge-cases)
- [Contributing](#contributing)

---

## About

**frankenSplice** combines two native JavaScript array methods — `slice()` and `splice()` — to safely merge arrays at a specific position. It creates a copy of the base array before modifying it, so your original data is always preserved.

---

## Usage

```js
function frankenSplice(arr1, arr2, index) {
  let localArray = arr2.slice();
  localArray.splice(index, 0, ...arr1);
  return localArray;
}
```

### Parameters

| Parameter | Type     | Description                                          |
|-----------|----------|------------------------------------------------------|
| `arr1`    | `Array`  | The array whose elements will be inserted            |
| `arr2`    | `Array`  | The base array to insert elements into               |
| `index`   | `Number` | The position in `arr2` where insertion begins        |

### Returns

A **new array** — a copy of `arr2` with all elements of `arr1` inserted at `index`. Neither input array is modified.

---

## How It Works

**Step 1 — Copy `arr2` with `.slice()`**

```js
let localArray = arr2.slice();
```

Creates a shallow copy so the original `arr2` is never touched.

**Step 2 — Insert with `.splice()`**

```js
localArray.splice(index, 0, ...arr1);
```

- `index` — where to start inserting
- `0` — no elements are removed
- `...arr1` — spreads all elements of `arr1` in place

**Step 3 — Return the result**

```js
return localArray;
```

Returns the new merged array, leaving `arr1` and `arr2` untouched.

---

## Examples

```js
frankenSplice([1, 2, 3], [4, 5, 6], 1);
// → [4, 1, 2, 3, 5, 6]

frankenSplice(["a", "b"], ["x", "y", "z"], 0);
// → ["a", "b", "x", "y", "z"]

frankenSplice(["a", "b"], ["x", "y", "z"], 3);
// → ["x", "y", "z", "a", "b"]

frankenSplice([], [1, 2, 3], 2);
// → [1, 2, 3]
```

---

## Edge Cases

| Scenario | Behavior |
|---|---|
| `index = 0` | `arr1` elements are inserted at the start of `arr2` |
| `index = arr2.length` | `arr1` elements are appended to the end of `arr2` |
| Empty `arr1` | Returns an unmodified copy of `arr2` |
| Empty `arr2` | Returns a copy of `arr1` |

---

## Contributing

Contributions are welcome! 🎉

1. **Fork** this repository
2. **Clone** your fork
   ```bash
   git clone https://github.com/your-username/slice-and-splice.git
   ```
3. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Commit your changes**
   ```bash
   git commit -m "feat: describe your change"
   ```
5. **Push** to your fork
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Open a Pull Request** and describe what you changed and why

### Guidelines

- Follow the existing code style
- Write clear, descriptive commit messages
- Open an issue first for major changes or new features
- Be respectful and constructive in discussions and reviews
- One feature or fix per Pull Request

---
