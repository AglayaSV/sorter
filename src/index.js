class Sorter {
    constructor() {
        this.collection = [];


        // your implementation
    }

    add(element) {
        // your implementation
        this.collection.push(element);
    }

    at(index) {
        return this.collection[index];


        // your implementation
    }

    get length() {
        // your implementation
        return this.collection.length;
    }

    toArray() {
        // your implementation
        return this.collection;
    }

     standardComparator(a, b) {
        return a - b;
    };


    sort(indices) {

     let indexesArr = indices.sort(function(a, b) {
            return a - b});
        let  tempArr =[];
        for (let i = 0; i < indexesArr.length; i++){
            tempArr.push(this.collection[indexesArr[i]]);
        }
        tempArr.sort(this.standardComparator);
        for (let i = 0; i < indexesArr.length; i++){
            this.collection.splice(indexesArr[i],1,tempArr[i]);
        }

    }

    setComparator(compareFunction) {
        // your implementation
        this.standardComparator = compareFunction;


    }
}

module.exports = Sorter;