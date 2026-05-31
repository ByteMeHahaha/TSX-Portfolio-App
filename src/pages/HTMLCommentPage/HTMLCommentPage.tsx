import { useState } from "react";
import Form from "../../comps/general_UI/Form/Form";
import Page from "../../comps/general_UI/layout/Page/Page";

export default function HTMLCommentPage() {
  const [comment, setComment] = useState("");

  let commentText = "";

  const correctComment: RegExp = /(?<=\<\!\-\-\s?)\w+(?=\s?\-\-\>)/gi;
  const missingClosingComment: RegExp = /((?<=\<!--\s?)\w+(?!\s?--\>))/gi;

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    let correctMatch = comment.match(correctComment);
    let incorrectMatch = comment.match(missingClosingComment);

    if (correctMatch) {
      commentText = correctMatch[0];
    } else {
      if (incorrectMatch) {
        commentText = `${incorrectMatch[0]} (Missing closing tag)`;
      } else {
        commentText = "";
      }
    }
  };

  return (
    <Page headerText="HTML Comment Validator">
      <Form submitHandler={handleSubmit}>
        <fieldset>
          <legend>HTML Comment Input</legend>
          <label htmlFor="comment-input">Comment</label>
          <input
            type="text"
            id="comment-input"
            name="comment-input"
            required
            value={comment}
            onChange={handleCommentChange}
            placeholder="<!-- Comment Text... -->"
          />
          <input type="submit" value="Validate" />
        </fieldset>

        <fieldset>
          <legend>Output</legend>

          <label htmlFor="comment-text">Text of Comment</label>
          <output id="comment-text" name="comment-text">
            {commentText || "No Comment"}
          </output>
        </fieldset>
      </Form>
    </Page>
  );
}
