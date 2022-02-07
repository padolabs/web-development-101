### Introduction to Frontend development  
---
## As linguagens da Web (Lado do cliente)
> JavaScript: Dynamic Effects (Programming)
> CSS: Presentation (Style)
> HTML: Content  (Structure)

* Create a file called index.html
```
type !
```
* Create first Script
```
<script>
    console.log("hello from javascript padolabers!")
</script>
```
* create a foçe called script.js e referencie no src da tag:
```
<script src="script.js"></script>
```

### Tópicos  
1. Variables & Data types  (JavaScript dynamic typing: datatypes are automatically assigned to variables)
```
number: Floating point numbers (decimal & integers)
string: Sequence of characters
Boolean: logical data type (true, false)
undefined: data type that does not have a value yet.
null: não existente.
```
2. Basic operators 
```
Math operators
- + / *

Logical Operatores
> < ==
x = x + 1
x += 1
x++
```

3. IF ELSE QUESTION MARK SWITCH
```
equality operatiors
===
height === '23'
==
height == '23'

&&
||
!

question mark => ? :

var MYCASE = "ACTIVE";

switch (MYCASE) {
    case "ACTIVE":
        console.log("active");
        break;
    case "DOOM":
        console.log("doom");
        break;
    default:
        console.log("default")
}

switch (true) {
    case jessyAge < 18:
        console.log("cant drink");
        break;
    case jessyAge > 18:
        console.log("can drink");
        break;
    default:
        console.log("default")
}

switch (MYCASE) {
    case 'case01':
        return "its case 1";
    case 'case02':
        return "its case 2";
    default:
        return "No case";
}
```

4. Functions
```
# Function declaration
function myfunction(){
    return
}

# Function expression
var myFunction = function(){
}
```

5. Arrays
```
Collection of variables

var names = ['joe', 'cloe', 'josh'];
var years = new Array(1900, 1876, 1500);
console.log(years)
console.log(names[0], names.length)
names[3] = 'Dow';
names.push("Bet")
names.pop("Bet")
names.unshift("Mr.")
names.shift("Mr.")
names.indexOf(20);
```

6. Objects and Properties 
```
var student = {
    firstName: 'Jonh',
    lastName: 'Been',
    birthYear: 1900,
    family: ['Linda', 'Cloe']
}

console.log(student.family + " " + student['birthYear'])

var joe = new Object();
joe.firstName = "Joe";
joe['lastName'] = "Been";
joe.birthYear = 1900;
joe.calculate = function (birthYear) {
    return 2022 - birthYear;
}
console.log(joe)
console.log(joe.calculate(joe.birthYear) + " years") 

var joe = new Object();
joe.firstName = "Joe";
joe['lastName'] = "Been";
joe.birthYear = 1900;
joe.calculate = function () {
    this.age = 2022 - this.birthYear;
}
console.log(joe)
joe.calculate();
console.log(joe.age + " years") 
```

7. LOOPS & INTERACTION
```
var students = ['lisa', 'clara', 'josh', 'joe', 1000, 'Pam'];
console.log(students.length)
for (var i = 0; i < students.length; i++) {
    if (typeof students[i] !== 'string') break;
    console.log(students[i])
}

var i = 0;
while (i < students.length) {
    console.log(students[i]);
    i++;
}
```

8. THIS
```
var jow = {
    fisrtName: "Jow",
    calculate: function () {
        console.log(this)
    }
}
jow.calculate();
```
  
---
9. DOM Manipulation

* DOM (Document Object Model)
* Its the structured representation of an html document.
* DOM is used to connect webpages to scripts like javaScript
* For each HTML TAG box, there is an object in the DOM that we can access and inteact.
```
var family = ["Lisa", "Bart", "Meggy", "Hommer", "Marge"]

var students = document.querySelector(".students");

for (var i = 0; i < family.length; i++) {
    var li = document.createElement("li");
    li.innerText = family[i];
    students.appendChild(li);
}

document.querySelector("h1").innerText = "My students list";
```

10. Events
```
Events are notifications sent to notify the code that something happend on webpage;
Events are triggered by clicking, resizing a window, scrolling down, pressing a key;
Event Listener: function that sits and waits a event to happened;
* https://developer.mozilla.org/en-US/docs/Web/events


```