import React from "react";
import style from "./question_answers.module.css";
import Image from "next/image";
import LikeHeart from "./like_heart_icon.svg"; // works if SVGR is configured

type User = {
  id: string;
  username: string;
  reputation: number;
};

type VoteCount = {
  up: number;
  down: number;
};

type Answer = {
  id: string;
  body: string;
  author: User;
  created_at: string;
  updated_at: string;
  votes: VoteCount;
  accepted: boolean;
};

export type QuestionAnswersProps = {
  id: string;
  title: string;
  body: string;
  tags: string[];
  author: User;
  created_at: string;
  updated_at: string;
  views: number;
  votes: VoteCount;
  answers: Answer[];
};

const Question_answers = ({
  title,
  body,
  tags,
  author,
  updated_at,
  answers,
}: QuestionAnswersProps) => {
  return (
    <div className={style.componentAlign}>
      <div className={style.questionComponent}>
        {/* Question */}
        <div className={style.questionSection}>
          <div className={style.questionInfo}>
            <div className={style.questionAuthor}>
              <h1>{author.username}</h1>
            </div>
            <div className={style.questionUpdatedAt}>
              <h2> Updated At: {new Date(updated_at).toLocaleDateString()}</h2>
            </div>
          </div>
          <div className={style.questionTitle}>
            <h1>{title}</h1>
          </div>
          <div className={style.questionBody}>
            <p>{body}</p>
          </div>

          <div className={style.ButtonsWraper}>
            {/* Like & Share Buttons */}
            <div className={style.likeShareButtonWraper}>
              <div className={style.likeButtonWraper}>
                <img
                  className={style.likeButton}
                  src="/like_heart_icon.svg"
                  alt="Like heart icon"
                  width="24"
                  height="24"
                />
              </div>
              <div className={style.shareButtonWraper}>
                <img
                  className={style.shareButton}
                  src="/share_icon.svg"
                  alt="Share icon"
                  width="24"
                  height="24"
                />
              </div>
            </div>

            {/* Add Answer Button */}
            <div className={style.addAnswerButton}>
              <button>+ Add Answer</button>
            </div>
          </div>
        </div>

        {/* Answers */}
        {answers.map((answer) => (
          <div key={answer.id} className={style.answerSection}>
            <div className={style.answerAuthor}>
              <h1>{answer.author.username}</h1>
            </div>
            <div className={style.answerUpdatedAt}>
              <h2>{new Date(answer.updated_at).toLocaleDateString()}</h2>
            </div>
            <div className={style.answerBody}>
              <p>{answer.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question_answers;

// const Question_answers = ({ title, body, tags }: QuestionAnswersProps) => {
//   return (
//     <div className={style.q}>
//       <div className={style.questionSection}>
//         <div className={style.questionAuthor}>
//           <h1>User Name</h1>
//         </div>
//         <div className={style.questionUpdatedAt}>
//           <h2> 2025/08/10</h2>
//         </div>
//         <div className={style.questionTitle}>
//           <h1>Kas yra?</h1>
//         </div>
//         <div className={style.questionBody}>
//           <p> Man įdomu kas yra...</p>
//         </div>
//       </div>

//       <div className={style.addAnswerButton}>
//         <button></button>
//       </div>

//       <div className={style.answerSection}>
//         <div className={style.answerAuthor}>
//           <h1>User Name</h1>
//         </div>
//         <div className={style.answerUpdatedAt}>
//           <h2> 2025/08/11</h2>
//         </div>
//         <div className={style.answerBody}>
//           <p>Yra nes...</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Question_answers;
