class List{
    constructor(){
        this.list = [];
        this.size = this.list.length
    }

    add (element){
        this.list.push(element)
        this.size = this.list.length
        this.list.sort((a, b) => {if (a > b){return 1}
                                 else if (a < b){return -1}})
    }

    remove (index){
        if (index < 0 || index > this.list.length - 1){
            return;
        }
        this.list.splice(index, 1);
        this.size = this.list.length
    }

    get (index){
        if (index < 0 || index > this.list.length - 1){
            return;
        }
        return this.list[Number(index)];
    }

}   

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size)