var sortTestCase = require('../sort.testcase.js'),
    insertionBinarySort = require('../../../src/sorting/insertionsort/insertion-binary-sort.js').insertionBinarySort;

sortTestCase(insertionBinarySort, 'Insertion binary sort');