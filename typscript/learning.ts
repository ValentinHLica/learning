// Basic Types of TypeScript

const isFinished: boolean = false; // Boolean

const userName: string = "John"; // String

const userAge: number = 20; // Number

const hobbies: string[] = ["VideoGames", "Reading", "Music", "Walking"]; // Array with only string values

const timeUsed: [number, string] = [15, "Reading"]; // Tuple, Array with x number of elements whose types are known

// todo Learn what this type is used for
enum Color {
  Red,
  Green,
  Blue,
}

const favouriteColor: Color = Color.Green;

declare const userInput: unknown; // Unknown when we dont know the type of variable, that we might get from api or from use input

declare const getValue: any; // Any when not all type information is available or its declaration would take an inappropriate amount of effort, Example: code that has been written without TypeScript or a 3rd party library.

const greeting = (): void => {}; // Void used in functions commonly to show that i returns null

// Types for null and undefiend
const u: undefined = undefined;
const n: null = null;

// Never when a function never returns anything
const errorMessage = (message: string): never => {
  throw new Error(message);
};

// Type assertions when you
const someValue: unknown = "this is a string";
const strLength: number = (someValue as string).length;

// ########
// Interface
interface Person {
  name: string;
  age: number;
  readonly isMale: boolean; // value is read only and cannot be changed
  hoobies?: string[]; // ? value is not required
}

const createPerson = (Person: Person): Person => {
  return Person;
};

createPerson({
  name: "John",
  age: 20,
  isMale: true,
} as Person);

// Functions
interface SearchResults {
  title: string;
}

interface SearchFunc {
  (query: string, limit: number): SearchResults;
}

const search: SearchFunc = (query: string, limit) => {
  return { title: "Result" };
};
