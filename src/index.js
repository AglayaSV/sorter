class Sorter {
    constructor() {
        this.collection = [];
    }

    add(element) {
        this.collection.push(element);
    }

    at(index) {
        return this.collection[index];
    }

    get length() {
        return this.collection.length;
    }

    toArray() {
        return this.collection;
    }

    standardComparator(a, b) {
        return a - b;
    };

    sort(indices) {
        indices.sort((a, b) => a - b);

        let tempArray = indices.map(item => this.collection[item])
                               .sort(this.standardComparator);

        let indicesLength = indices.length;
        for (let i = 0; i < indicesLength; i++) {
            this.collection.splice(indices[i], 1, tempArray[i]);
        }
    }

    setComparator(compareFunction) {
        this.standardComparator = compareFunction;
    }
}

module.exports = Sorter;