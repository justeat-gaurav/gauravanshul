/**
 * Array:
 * Generics:<>
 * In java there is data structure is called ArrayList
 * ArrayList can take any objects
 *  ArrayList mylist=new ArrayList();
 *  mylist.add(new Employee());
 *  mylist.add(new Customer()); //runtime error
 * //Generics code
 *ArrayList<Employee> mylist=new ArrayList<Employee>();
 mylist.add(new Employee()); //no compile time error
mylist.add(new Customer()); //compile time error
 
Goal:Generincs gives type safe collection(data structure).
 Type script also gives type safe collection
 *
 */
var CustomerOld = /** @class */ (function () {
    function CustomerOld() {
    }
    return CustomerOld;
}());
function doStuff() {
    var list = ["1", "test"];
    var customerList = [
        { id: 1, name: 'Gaurav' }
    ];
    console.log("" + list + customerList);
    console.log(list);
    console.log(customerList);
}
doStuff();
