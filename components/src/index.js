import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning</h4>
          Are you sure?
        </div>
        {/* <CommentDetail
          author="Sam"
          timeAgo="Today at 6:00 pm"
          content="Nice post!"
          avatar={faker.image.image()}
        />*/}
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alan"
          timeAgo="Yesterday at 2:00 pm"
          content="Perfect!"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Nail"
          timeAgo="Today at 10:00 am"
          content="Will be ok!"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
