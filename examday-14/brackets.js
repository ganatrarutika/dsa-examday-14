function isBalanced(s) {
    let stack = [];
    const map = { '(': ')', '{': '}', '[': ']' };

    for (let char of s) {
        if (char in map) {
            stack.push(char); 
        } else if (Object.values(map).includes(char)) {
            if (map[stack.pop()] !== char) return false; 
        }
    }

    return stack.length === 0; 
}

console.log(isBalanced("a + b * (c - d) + {x / [y + z]}")); 
console.log(isBalanced("a + b * (c - d + {x / [y + z}"));   
