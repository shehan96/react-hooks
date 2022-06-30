var value;
t();

console.log(value);

value = 'shehan';

function t() {

    console.log('test' + name);

    var name;

}

function a(){
    let obj = { name: 'shehan', age : 25};
    let obj2 = { location : 'sri lanka', name : 'janith'};

    let array = ['s','s','a'];

    // let obj3 = { ...obj2, name: 'seee'};
    let obj3 = [...array];

    console.log(obj3);
}

a();


es6();

function es6(){
    let k = ['shehan', 'janith', 'chathuni'];
    let j = { name : 'shehan', age : 25};

    let [a, b, c] = k;
    let { name, age } = j;

    console.log(name)
}


