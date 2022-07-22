![img](/images/logo.png)

# Single Page Lite

## overview :

SPGLITE is a lite library to do a single-page website for a small project
without using big frameworks like React js or ...
this library is so easy for using like water.

## How to use this library :

First of all you should get this library by commend : `get clone  https://github.com/Zaariy/SPGLITE.git`
<br>
when you finish downloading it, run it on your localhost, and then you will see like this picture :
![home page](/images/home.PNG)

## How we can create page :

it is so semple first import module call Runder from /module/easy-spg.js in your javascript file. 

and then  create instens and pass  it name of the class 'root' as a prametar , you can call it whatever you want but it must be the same name in a file index.html like as you can see in this a picture :

![object](/images/import.PNG)

As you see here we named class root but if you change it you should changet in your javascript file  , inside this div we will put our html code .
![root](/images/root.PNG)

## How we can create pages :

it is so easy just call the function call `createPage(Route, function , options)` it takes three parameters first parameter it is the Route of the page you will create and seconde parameter it is a callBack function inside this callBack function you should put  your code HTML and the last parameter it takes an object we put that object on the first page we will create to tell javascript this is the main page for our code, we write inside this object `{main : true}` it is mean this page it is the main page in our Single page.

![logo first page](/images/firstPage.PNG)

You will get results like this :

![logo](/images/result.PNG)
<span style="color: red ; font-size: 20px ; font-family: sans-serif ; font-weight: bold" >Warning :<span>


<span style="font-family: sans-serif ; font-weight: normal" >you can't put <span style="color : red"> {main: true} </span> in an other pages expact main page because if you did that you will tell javascript we have two main pages and then you will get an error .</span>

Now if you want to create another page do the same steps we did before, let's create different pages .

![pages](/images/pages.PNG)

<span style="color : green ; font-weight: bold ; font-size : 20px">Results :</span>


![a](https://github.com/Zaariy/SPGLITE/blob/main/images/2022-07-22_1658501229817.mp4)


## What about debugging our code :

For debugging we  have property call settings it is an object that takes a key call debugging mode  and we assign to it value True if we still in development mode :<span style="color : red"> {debuggingMode: true} </span>

![debugging logo](/images/settinges.PNG)

As you can see in this pecutre below we forgot to add Route to our function createPage() .

![logo](/images/forgot.PNG)

<span style="color : green ; font-weight: bold ; font-size : 20px">Results :</span><br>
As you see we got an Error .

![logo error ](/images/error.PNG)
