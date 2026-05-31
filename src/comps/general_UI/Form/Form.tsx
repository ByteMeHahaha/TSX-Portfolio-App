import type { ReactNode, SubmitEventHandler } from "react";
import styles from "./Form.module.css";

type FormProps = {
  // The form onSubmit handler
  submitHandler?: SubmitEventHandler<HTMLFormElement>;
  // The child elements of the component, i.e. the form controls.
  children: ReactNode;
  // Is the form in a dialog?
  dialog?: boolean;
};

export default function Form({ submitHandler, children, dialog }: FormProps) {
  // Default form submit handler if one isn't supplied
  const defaultHandleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    // Prevent page refresh on submit
    e.preventDefault();
  };

  return (
    <form
      // Prevents autocomplete by default.
      autoComplete="off"
      className={styles.form}
      // Determines the method of the form. If it's a dialog,
      // it will allow the form to close the dialog on submit.
      method={(dialog) ? "dialog" : "post"}
      onSubmit={submitHandler || defaultHandleSubmit}
    >
      {/* Form controls, i.e., input elements */}
      {children}
    </form>
  );
}
