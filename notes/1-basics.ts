//== BASICS ==//

/**
 * (1) x is a string, b/c we’ve initialized it
 * -- x implicitly inherits the type of it's value
 */
let x = "hello world";

/**
 * (2) x is let variable so as usual, reassignment is fine
 */
x = "hello mars";

/**
 * (3) but if we try to change type
 */
// x = 42; // 🚨 ERROR

/**
 * (4) let's look at const. The type is literally 'hello world'
 */
const y = "hello world"; // y is literally typed to "hello world"
const obj = {
  name: "murphy",
  age: 2.5,
};

// obj is immutable as it's a const so i can't add properties but it looks like i can delete them?
// can I delete properties?
/**
 * This is called a 'string literal type'. y can never be reassigned since it's a const,
 * so we can regard it as only ever holding a value that's literally the string 'hello world'
 * and no other possible value
 */

/**
 * (5) sometimes we need to declare a variable w/o initializing it
 */
let z;
z = 41;
z = "abc"; // (6) oh no! This isn't good

/**
 * If we look at the type of z, it's `any`. This is the most flexible type
 * in TypeScript (think of it like a JavaScript `let`) -- its a wild card.
 */

/**
 * (7) we could improve this situation by providing a type annotation
 * when we declare our variable
 */

let zz: number; // we should set the type, even if we haven't yet initalised it with a value
zz = 41;
// zz = "abc"; // 🚨 ERROR Type '"abc"' is not assignable to type 'number'.

//== SIMPLE ARRAYS ==//

/**
 * (8) simple array types can be expressed using []
 */
let aa: number[] = [];
aa.push(33);

let a = [5]; // here the type declaration is unnecessary as it in inferred/implicitly inherited
// a.push("hello") // ERROR: Argument of type '"hello"' is not assignable to parameter of type 'number'.
// aa.push("abc"); // 🚨 ERROR: Argument of type '"abc"' is not assignable to parameter of type 'number'.

/**
 * (9) we can even define a tuple, which has a fixed length
 */
let bb: [number, string, string, number] = [
  123,
  "Fake Street",
  "Nowhere, USA",
  10110,
];

// bb = [1, 2, 3]; // 🚨 ERROR: Type 'number' is not assignable to type 'string'.

let mike = "mike";
mike = "rachel"; // mike can be assigned as it inherited type string

let rachel: "Rachel"; // you can use string literal types on let vars
// rachel = "mikey" // ERROR: Type '"mikey"' is not assignable to type '"Rachel"'
/**
 * (10) Tuple values often require type annotations (  : [number, number] )
 */
// const xx = [32, 31]; // number[];
// const yy: [number, number] = [32, 31];
let userAddress: [number, string, string] = [
  109,
  "Ballycrochan Road",
  "Bangor",
];
userAddress = [101, "WestferryDrive", "London"];

//== OBJECTS ==//
// const cc: {houseNumber: number; streetName: string;}; // ERROR "Const vars must be initialized"
/**
 * (11) object types can be expressed using {} and property names
 */
// let cc: { houseNumber: number; streetName: string };
// cc = {
//   streetName: "Fake Street",
//   houseNumber: 123
// };

// cc = {
//   houseNumber: 33
// };
/**
 * 🚨 Property 'streetName'
 * 🚨   is missing in type   '{ houseNumber: number; }'
 * 🚨   but required in type '{ houseNumber: number; streetName: string; }'.
 */

/**
 * (12) You can use the optional operator (?) to
 * indicate that something may or may not be there
 */
// let dd: { houseNumber: number; streetName?: string };
// dd = {
//   houseNumber: 33
// };

// (13) if we want to re-use this type, we can create an interface
// interface Address {
//   houseNumber: number;
//   streetName?: string;
// }
// // and refer to it by name
// let ee: Address = { houseNumber: 33 };

//== UNION & INTERSECTION ==//

/**
 * (14) Union types
 * Sometimes we have a type that can be one of several things
 */

export interface HasPhoneNumber {
  name: string;
  phone: number;
}

export interface HasEmail {
  name: string;
  email: string;
}

let hasEmail: HasEmail = {
  name: "Rachel",
  email: "rachel@gmail.com",
};

let contactInfo: HasEmail | HasPhoneNumber =
  Math.random() > 0.5
    ? {
        // we can assign it to a HasPhoneNumber
        name: "Mike",
        phone: 3215551212,
      }
    : {
        // or a HasEmail
        name: "Mike",
        email: "mike@example.com",
      };

console.log(contactInfo.name); // NOTE: we can only access the .name property  (the stuff HasPhoneNumber and HasEmail have in common)

/**
 * (15) Intersection types
 */
let otherContactInfo: HasEmail & HasPhoneNumber = {
  // we _must_ initialize it to a shape that's asssignable to HasEmail _and_ HasPhoneNumber
  name: "Mike",
  email: "mike@example.com",
  phone: 3215551212,
};

// otherContactInfo.name; // NOTE: we can access anything on _either_ type
// otherContactInfo.email;
// otherContactInfo.phone;
// const zzz: any = {} as never;

export default {};
