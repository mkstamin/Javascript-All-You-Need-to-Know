let a = 40

function b() {
    function c() {
        let a = 60
        console.log(a);
    }
    c()
    console.log(a);
}
b()

function test(n) {
    function a() {
        return n % 3 == 0
    }

    function b() {
        return n % 5 == 0
    }

    if (a() && b()) {
        console.log(`${n} is divided by 3 and 5`);
    } else {
        console.log(`This ${n} is not divided with both 3 and 5`);
    }
}

test(15)