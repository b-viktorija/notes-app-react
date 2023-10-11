import React from "react";

function CreateArea() {
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Write a note here..." rows="3" />
        <button>Add note</button>
      </form>
    </div>
  );
}

export default CreateArea;