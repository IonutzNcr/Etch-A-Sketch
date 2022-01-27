createColumn() take one parameter to create n column for the grid. 
Inside this function there is also another function that allow each column to have n number of elements in a row. Each element is created by another function called createSingleDiv() which is repeated n time by the function createRow().
-- the parameter numberOfRepetion inside the createRow allows to create a number of elements for that row depending on the parameter value.
-- the parameter numberOfCulumn allows to repeat the createRow n time to have a full grid. 