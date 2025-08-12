import React from "react";
import { QuestionAnswersProps } from "@/types/forumapp";
import style from "./questions_container.module.css";
import Question_answers from "../Question_answers/Question_answers";

type Questions_containerProps = {
  formapp: QuestionAnswersProps[];
};

const Questions_container = ({ formapp }: Questions_containerProps) => {
  return (
    <div className={style.q}>
      {formapp.map((f) => {
        return (
          <Question_answers
            key={f.id}
            id={f.id}
            title={f.title}
            body={f.body}
            tags={f.tags}
            author={f.author}
            created_at={f.created_at}
            updated_at={f.updated_at}
            answers={f.answers}
            views={f.views}
            votes={f.votes}
          />
        );
      })}
    </div>
  );
};

export default Questions_container;
