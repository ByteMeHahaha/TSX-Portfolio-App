import { useState } from "react";
import Form from "../../comps/general_UI/Form/Form";
import Page from "../../comps/general_UI/layout/Page/Page";

export default function HTMLCommentPage() {
  // State
  const [comment, setComment] = useState(""); // HTML comment user input
  const [commentText, setCommentText] = useState(""); // Extracted comment text

  // Correct comment regexp
  const correctComment: RegExp = /(?<=\<\!\-\-\s*)(.*?)(?=\s*\-\-\>)/gi;

  // Comment without closing tag
  const missingClosingComment: RegExp = /(?<=\<!--\s*)(.*)(?!\s*--\>)$/gi;

  // Fires when the comment textbox content changes
  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Set the HTML comment state
    setComment(e.target.value);
  };

  // Fires on form submit
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    // Prevent page reload on submit
    e.preventDefault();

    // Correctly formatted HTML comment
    let correctMatch = comment.match(correctComment);
    // Incorrectly formatted HTML comment
    let incorrectMatch = comment.match(missingClosingComment);

    // If the user entered a correctly formatted comment
    if (correctMatch) {
      // Display the HTML comment's extracted text
      setCommentText(correctMatch[0]);
    } else {
      // If the match was missing a closing tag
      if (incorrectMatch) {
        // Display the comment text with a note of the missing tag
        setCommentText(`${incorrectMatch[0]} (missing closing tag)`);
      } else {
        // Display the entered text as-is with a note of no comment being found
        setCommentText(`${comment} (no comment found)`);
      }
    }
  };

  return (
    // Page wrapper
    <Page headerText="HTML Comment Validator">
      {/* Input form */}
      <Form submitHandler={handleSubmit}>

        {/* User input group */}
        <fieldset>
          <legend>HTML Comment Input</legend>

          {/* Label for comment textbox */}
          <label htmlFor="comment-input">Comment</label>
          {/* Comment textbox */}
          <input
            type="text"
            id="comment-input"
            name="comment-input"
            required
            value={comment}
            onChange={handleCommentChange}
            placeholder="<!-- Comment Text... -->"
          />

          {/* Submit button */}
          <input type="submit" value="Validate" />
        </fieldset>

        {/* Output group */}
        <fieldset>
          <legend>Output</legend>

          <label htmlFor="comment-text">Text of Comment</label>
          <output id="comment-text" name="comment-text">
            {/* Displays the extracted text or "no comment" by default */}
            {commentText || "No Comment"}
          </output>
        </fieldset>
      </Form>
    </Page>
  );
}
