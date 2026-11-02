let count = 0;

function increment() {
    count++;
    console.log("Count:", count);
}

function decrement() {
    count--;
    console.log("Count:", count);
}

function counterSimulation() {
    let count = 0;

    function updateCount(change) {
        count += change;
        console.log("Nested Count:", count);
    }

    updateCount(1);
    updateCount(1);
    updateCount(-1);
}

increment();
increment();
decrement();

counterSimulation();