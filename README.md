[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


# atm-pin-code-validation

A library that checks if the ATM PIN codes are valid or not. ATM machines allow 4 or 6-digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. You can check if all the ATM PIN codes that you have are valid or not with this library.

## &nbsp;

## Installation

---

You can install the library with this command:

```sh
$ npm i atm-pin-code-validation
```

&nbsp;

## Usage

---

First, you need to import the library and then you can utilize it as shown below.

```ruby
const validatePIN = require('atm-pin-code-validation')

const result = validatePIN('123456')

```

### Examples :

```ruby
const result = validatePIN('1234')

console.log(result)

// output is true
```

```ruby
const result = validatePIN('1a34')

console.log(result)

// output is false
```


## Licence

---

MIT License

Copyright (c) 2022 Levent Bahadır Boran

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
