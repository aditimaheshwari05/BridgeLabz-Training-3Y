//Without "use strict"
function demo(a, a) {
    total = 10;
    delete total;
}
demo(5, 10);


//With "use strict"
"use strict";

function demo(a, a) {
    total = 10;
    delete total;
}
demo(5, 10);

//If the duplicate parameter is fixed:
"use strict";

function demo(a, b) {
    total = 10;
    delete total;
}
demo(5, 10);

//Correct ES6 version
"use strict";

function demo(a, b) {
    let total = 10;

    console.log(`First value: ${a}`);
    console.log(`Second value: ${b}`);
    console.log(`Total: ${total}`);
}
demo(5, 10);

