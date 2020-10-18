// class ClassWithStaticMethod {
//     static staticMethod() {
//         return 'static method has been called.'
//     }
// }

// console.log(ClassWithStaticMethod.staticMethod());



class Triple {
    static triple(n = 1) {
        return n * 3;
    }
}

class BiggerTriple extends Triple {
    static triple(n) {
        return super.triple(n) * super.triple(n);
    }
}

console.log(Triple.triple());
console.log(Triple.triple(6));



console.log(BiggerTriple.triple(3));
// 81 (not affected by parent's instantiation)


var tp = new Triple();
console.log(tp.triple());
// 'tp.triple is not a function'.