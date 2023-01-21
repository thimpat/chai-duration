
## Description

Assertions on durations for testing performances

<br/>

---



## Installation

```shell
npm install chai-duration -D
```

<br/>

---

## Usage
#### JavaScript / Typescript

```javascript
const chai = require("chai");

const chaiFs = require("chai-duration");
chai.use(chaiFs);
```

<br/>


---

## Overview

### Compare two durations

###### By default, all duration are in milliseconds

```javascript
expect(100).to.be.shorter.than.duration(500);
expect(100).to.have.shorter.duration(500);

expect(100).to.have.same.duration(100);

expect(100).to.be.longer.than.duration(500);
expect(1000).to.have.longer.duration(500);
```

---


### Compare two durations with or without units

```javascript
expect("10s").to.be.shorter.than.duration("1mn");
expect("100s").to.be.longer.than.duration("1mn");
expect("1h20min10s").to.be.longer.than.duration("1mn");
expect(60 * 60 * 1000).to.have.same.duration("1 hour");
```

---



### Compare time differences

###### By default, all duration are in milliseconds

```javascript
const {sleep} = require("@thimpat/libutils");

it('should assume time differences longer than 1 second', async function ()
{
    // Start time
    const startDate = new Date();
    
    // ... Replace with the method/function you want to measure
    await sleep(2000);

    // End time
    const endDate = new Date();
    
    // Use time difference using an array
    expect([endDate, startDate]).to.have.time.difference.longer.than.duration(10);
});
```



```javascript
it('should assume the time difference between 1s and 5s to equal 4s', async function ()
{
    expect(["1s", "5s"]).to.have.time.difference.same.as.duration("4s");
});

```

---



