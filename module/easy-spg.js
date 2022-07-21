class Runder {
    pages = {}

    /*
        this settings we recommend you to set are true 
        to have ablity to see Error and catch it
    */
    settings = {
        debuggingMode : false
    }

    constructor(Root) {
        this.root = Root
        
    }
    
    createPage(Router, funcContent, options = null) {
        let option = {
            main : false 
        }
        if (options) {
            option.main =  options.main 
        }
       if (Router.length > 0 ) {
            this.pages[String(Router)] = {
                code: funcContent,
                main : option.main

            };
       } else {
            
            this.settings.debuggingMode ? this.hundleError('createPage(" ? ")  Plase add Router',
               'Forgetting adding Router name at createPage Function ') : false
        }
        try {

            this.hundleHtml()   
        }catch {

           this.settings.debuggingMode ? this.hundleError('Hundle',
               'Forgetting adding Router name at createPage Function ') : false
        }
        
    }


    hundleHtml() {
        const rootEle = document.getElementsByClassName(this.root)[0];
        
        // HundlerURL function
        this.hundleURL((url) => {
            this.isPageThere(url, (err , pageHtml) => {
                rootEle.innerHTML = pageHtml();
            })           
        })
       
    }

    isPageThere(akaPage, callBack) {
        if (this.pages[akaPage]) {
            callBack(null , this.pages[akaPage].code) 
        } else {
          this.settings.debuggingMode ?   this.hundleError(`Router path not found "{ ${akaPage} }"`,
                `this path "{ ${akaPage} }" not found <br> 
                <p> Plase check your Url : ${location.href} </p>
                <p>Plase add Router <strong> createPage(" ? ")</strong> </p>
                `
            ) : false
        }
         
    }

    hundleURL(callBack) {
        /*
            In this function we are filtering 
            url to get path that user want to navigate

            and when we get path we will pass it as a paramter
            to a function isPageThere 
        */
        
        window.addEventListener("hashchange", () => {
           
            const path = location.hash.replace('#' , "")
            /*
                we storing last navigation 
                because when user do refresh to the page
                hash will be undefined 
            */
            
            
            localStorage.setItem('page', path)
            
            callBack(path)
          
        })


        window.onload = () => {
            // here we are saving url path
            callBack(localStorage.getItem('page'))

            // this condetion check if url has path or not
            // if not it will giv url main page
            
            if (!location.hash && !localStorage.getItem('page')) {
                const keys = Object.keys(this.pages)
                for (let g = 0; g < keys.length; g++){
                    if (this.pages[keys[g]].main) {
                        callBack(keys[g])
                    }
                }
                
            }
            
        }

       

      
    }

    hundleError(err, msg) {
        
        /*
            this funtion it hundle any kinde 
            of Error you need just add 
        */
        
        let ErrorPage = `
            <div class="error">
                <h1>Error : ${err}</h1>
                <p>
                   ${msg}
                </p>
            </div>
        `
        const rootEle = document.getElementsByClassName(this.root)[0];
        rootEle.innerHTML = ErrorPage;
        return


    }

}

export default Runder