// import class Runder from module call easy-spg.js
// this class take html and runder it at browser

import Runder from './module/easy-spg.js';

const spg = new Runder('root');

/*
        this settings we recommend you to set are true 
        to have ablity to see Error and catch it
*/
spg.settings = {
    debuggingMode : true
}

spg.createPage('home', function () {
    
    return (
        `
            <div class="init-page">
                <img src='/images/logo.png' alt='logo'></img>
                <div class="text" >
                    <span class='first'>Note :</span>
                    <p> 
                        This library just for small project like portfolio 
                        or somthing like that we don't recommend to use it 
                        for big projects.

                       
                    </p>
                    <span class="seconde"> Documntation : </span>
                    <a href="https://github.com/Zaariy" target="__blanck">Github SPGLITE</a>
                </div>
                
            </div>
        `
    )
},{main : true})