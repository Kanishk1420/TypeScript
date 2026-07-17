import axios = require("axios");

// Q1 Write getTodo(id: number): Promise<Todo> that fetches https://jsonplaceholder.typicode.com/todos/{id}.
// If response.ok is false, throw an error with the status. Otherwise return the data.
// await getTodo(1) → { userId: 1, id: 1, title: "delectus aut autem", completed: false }
// await getTodo(99999) → throws Error: "HTTP 404"

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
async function getTodo(id: number): Promise<Todo> {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
    );
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const data: Todo = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(`Failed to fetch todo: ${error.message}`);
  }
}
getTodo(1)
  .then((todo) => console.log(todo))
  .catch((error) => console.error("Error fetching todo:", error));

// Write describeError(error: unknown): string:
// describeError(new Error("boom")) → "Error: boom"
// describeError("oops")            → "Unknown error"

function describeError(error: unknown): string {
  if (axios.isAxiosError(error)) {
    return `Axios error: ${error.message}`;
  } else if (error instanceof Error) {
    return `General error: ${error.message}`;
  }
  return "Unknown error";
}
console.log(describeError(new Error("boom")));
console.log(describeError("oops"));

function isObj(obj: unknown): obj is Todo {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof (obj as Todo).userId === "number" &&
    typeof (obj as Todo).id === "number" &&
    typeof (obj as Todo).title === "string" &&
    typeof (obj as Todo).completed === "boolean"
  );
}
async function getSafeTodo(id: number): Promise<Todo> {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
    );
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const data: unknown = await response.json();
    if (isObj(data)) {
      return data;
    } else {
      throw new Error("Invalid Todo object");
    }
  } catch (error: any) {
    throw new Error(`Failed to fetch todo: ${error.message}`);
  }
}
getSafeTodo(2)
  .then((todo) => console.log(todo))
  .catch((error) => console.error("Error fetching todo:", error));

//Q4 — Generic fetch helper (T15 generics)
// Write fetchJson<T>(url: string): Promise<T> — one helper, any endpoint, no any.


// const todo  = await fetchJson<Todo>(".../todos/1");
// const todos = await fetchJson<Todo[]>(".../todos");
// Just like your wrapinarray<T> — the caller picks T.

// Q5 — Three-state union (T3 + T7 never) 
// type FetchState<T> =
//   | { status: "loading" }
//   | { status: "success"; data: T }
//   | { status: "error"; message: string };
// Write render(state: FetchState<Todo>): string with a switch on status + a never default.


// render({ status: "loading" })                      → "Loading..."
// render({ status: "success", data: todo })          → "Loaded: delectus aut autem"
// render({ status: "error", message: "404" })        → "Failed: 404"
// This is a discriminated union — status is the "tag". Inside case "success": TS automatically knows data exists. Try adding a 4th state and watch never scream.