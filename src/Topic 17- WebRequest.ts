import axios = require("axios");
import type { AxiosResponse } from "axios"; // mei d.ts file sei decleration ko import kar rahe hai. axios ka response type ko import kar rahe hai.
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
async function axiosfetchTodo() {
  try {
    // Axios is generics
    const response: AxiosResponse<Todo> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    console.log(response.data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      // Axios ka error
      console.error("Axios error:", error.message);
      if (error.response) {
        // Axios error ka response
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      }
      if (error.request) {
        console.error("Request made but no response received:", error.request);
      }
      if (error.cause) {
        console.error("Error cause:", error.cause);
      }
    }
  }
}
axiosfetchTodo();

const fetchTodo = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} and ${response.statusText}`);
    }
    const data: Todo = await response.json();
    console.log(data);
  } catch (error: any) {
    console.error("Fetch error:", error.message);
  }
};
fetchTodo();