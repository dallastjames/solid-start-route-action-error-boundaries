import ErrorBoundary from "solid-start";
import { TinyForm } from "./tiny-form";

export function FormSection() {
  return (
    <ErrorBoundary fallback={() => <h2>Oh no! Error!</h2>}>
      <TinyForm />
    </ErrorBoundary>
  );
}
