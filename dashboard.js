class Application{
    constructor(name){
        this.appName = name
        this.titleBar = new TitleBar()
        console.log("application CONSTRUCTED")
    }
    build(){
        this.titleBar.build()
        console.log("application BUILT")
    }
}

class TitleBar {
    constructor(){
        this.node = document.getElementById('titleBar')
        if(!this.node){
            console.log("no node here?")
            console.log(this.node)
        }
        this.parent = null;
        this.children = new Map();
        console.log("titleBar CONSTRUCTED")
    }
    build(){
        //builds the titleBar with my name
        var item = new pNode("<h1>Subho's Dashboard</h1>")
        this.attach(item)
        console.log("titleBar BUILT")
    }
    attach(item){
        //attach item in children set
        this.children.set(item.getID,item)
        console.log(item)
        
        //build that child component
        item.build(this.node)

        console.log("item ATTACHED")
    }
}

document.addEventListener("DOMContentLoaded", function(event) { 
    //do work
    var myApp = new Application();
    myApp.build();
});

