import Header from "@/components/Header/Header";
import Questions_container from "@/components/Questions_container/Questions_container";
import { QuestionAnswersProps } from "@/types/forumapp";
import axios from "axios";
import { useEffect, useState } from "react";

const MainPage = () => {
  const [formapp, setForum] = useState<QuestionAnswersProps[]>([]);

  const fetchForum = async () => {
    const response = await axios.get("http://localhost:3005/games");
    console.log(response);
    setForum(response.data.games);
  };

  useEffect(() => {
    fetchForum();
  }, []);
  return (
    <>
      <Header />
      <Questions_container formapp={formapp} />
    </>
  );
};

export default MainPage;
