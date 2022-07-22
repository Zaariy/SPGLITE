// import class Runder from module call easy-spg.js
// this class take html and runder it at browser

import Runder from './module/easy-spg.js';

const spg = new Runder('root');

/*
    These settings we recommend you to set are true 
    to have the ability to see Error and catch it
*/
spg.settings = {
    debuggingMode : true
}
spg.createPage('home', function () {
    
    return (
        `
            <div>
                <h1>this is Home page </h1>
                <a href='/#home'>Home page</a>
                <a href='/#about'>About page</a>
                <a href='/#contact'>Contact page</a>
            </div>
        `
    )
},{main : true})

spg.createPage('about', function () {    

    return (
        `
            <div>
                <h1>this is About page </h1>
                <a href='/#home'>Home page</a>
                <a href='/#about'>About page</a>
                <a href='/#contact'>Contact page</a>

            </div>
        `
    )
})
spg.createPage('contact', function () {
    
    return (
        `
            <div>
                <h1>this is Contact page </h1>
                <a href='/#home'>Home page</a>
                <a href='/#about'>About page</a>
                <a href='/#contact'>Contact page</a>

            </div>
        `
    )
})

