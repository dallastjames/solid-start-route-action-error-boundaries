import { createRouteAction } from "solid-start";

export function TinyForm() {
  const [formState, { Form }] = createRouteAction(async (data: FormData) => {
    console.log("starting route action");
    await new Promise((resolve, reject) => setTimeout(resolve, 1000));
    console.log("promise resolved, throwing error...");
    throw new Error("Something went wrong!");
  });

  return (
    <Form>
      <label for="username">Username:</label>
      <input type="text" name="username" />
      <input type="submit" value="submit" disabled={formState.pending} />
    </Form>
  );
}
