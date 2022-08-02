a = [1,"2",true,"New names updated"]
 [1, '2', true, 'New names updated']

true3: "New names updated"
a[4]
undefined
a[0]
1
a[3]
'New names updated'
typeof(a[2])
'boolean'
a.length
4
a.push("new added")
5
a
(5) [1, '2', true, 'New names updated', 'new added']
a.push(35446)
6
a
(6) [1, '2', true, 'New names updated', 'new added', 35446]
a.pop()
35446
a
(5) [1, '2', true, 'New names updated', 'new added']

a.indexOf(true)
2



/**
 * String function
 */
 a = "Shiv Ram Kumar"
 'Shiv Ram Kumar'
 typeof(a)
 'string'
 a.bold()
 '<b>Shiv Ram Kumar</b>'
 a.toUpperCase()
 'SHIV RAM KUMAR'
 a
 'Shiv Ram Kumar'
 a = a.toUpperCase()
 'SHIV RAM KUMAR'
 a
 'SHIV RAM KUMAR'
 a.toLowerCase()
 
 'shiv ram kumar'
 a.charAt(10)
 'U'
 a.charAt(4)
 ' '
 a.charAt(6)
 'A'
 a.indexOf('R')
 5

 = "shiv ram kumar"
'shiv ram kumar'
a.split(" ")
(3) ['shiv', 'ram', 'kumar']0: "shiv"1: "ram"2: "kumar"length: 3[[Prototype]]: Array(0)
b = a.split(" ")
(3) ['shiv', 'ram', 'kumar']
b
(3) ['shiv', 'ram', 'kumar']
b[0]
'shiv'
b[6]
undefined
b.push("Roy")
4
b
(4) ['shiv', 'ram', 'kumar', 'Roy']
b.join(" ")
'shiv ram kumar Roy'

 /**
  * Split and join in Strings
  */

a ="goutham ravi babu madhu shiva"
'goutham ravi babu madhu shiva'
a.count()
VM1463:1 Uncaught TypeError: a.count is not a function
    at <anonymous>:1:3
(anonymous) @ VM1463:1
a.split(" ")
(5) ['goutham', 'ravi', 'babu', 'madhu', 'shiva']
a
'goutham ravi babu madhu shiva'
b = a.split(" ")
(5) ['goutham', 'ravi', 'babu', 'madhu', 'shiva']
b
(5) ['goutham', 'ravi', 'babu', 'madhu', 'shiva']
b[0]+","+b[1]+","+b[2]
'goutham,ravi,babu'
b.join(",")
'goutham,ravi,babu,madhu,shiva'
b.joint("||")
VM1803:1 Uncaught TypeError: b.joint is not a function
    at <anonymous>:1:3
(anonymous) @ VM1803:1
b.join("||")
'goutham||ravi||babu||madhu||shiva'