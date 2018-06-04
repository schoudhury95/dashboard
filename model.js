class pNode {
    constructor(innerContent){
        //create htmlNode
        this.node = document.createElement("p")
        this.node.innerHTML = innerContent
    }
    build(parent){
        //append the p node to parent if exists
        if(!parent){
            console.log("error: no parent")
            return
        }
        parent.appendChild(this.node)
    }
    getID(){
        return "p Node"
    }
}