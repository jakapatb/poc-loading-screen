import React, { useState, useEffect } from "react";
import ContentCard from "./components/contentCard";
import styled from "styled-components";
import skeletonIcon from "./images/skull-emoji.png";
import progressIcon from "./images/progress.png";
import spinnerIcon from "./images/spinner.png";
import boringIcon from "./images/boring.png";
import wall1 from "./images/wall1.jpg";
import wall2 from "./images/wall2.jpg";
import wall3 from "./images/wall3.jpeg";
import wall4 from "./images/wall4.jpg";
const Container = styled.div`
  background-color: #4d5784;
  display: flex;
  min-height: 100vh;
  padding: 0 64px;
  align-items: center;
  justify-content: space-around;
`;
function App() {
  const [{ loading, data }, setQuery] = useState({
    loading: true,
    data: []
  });

  useEffect(() => {
    const timmer = setTimeout(() => {
      setQuery({
        loading: false,
        data: [
          {
            image: wall1,
            avatar: boringIcon,
            type: "Boring",
            title: "Boring Screen",
            content: ` Accusantium rerum animi debitis inventore quod illum inventore. Officiis
            eum nostrum deleniti et est maxime. Voluptas omnis reprehenderit.`
          },
          {
            image: wall2,
            avatar: spinnerIcon,
            type: "Spinner",
            title: "Spinner Screen",
            content: `  Laborum aut hic ducimus aliquid accusantium tenetur. A minus est soluta
            architecto voluptatem.`
          },
          {
            image: wall3,
            avatar: progressIcon,
            type: "Progress",
            title: "Progress Screen",
            content: ` Officiis qui incidunt ipsa et quisquam veniam sint. Tenetur nemo
        voluptas rerum. Aut non eius cum fugiat est ut officia ut.`
          },
          {
            image: wall4,
            avatar: skeletonIcon,
            type: "Skeleton",
            title: "Skeleton Screen",
            content: ` Laborum aut hic ducimus aliquid accusantium tenetur. A minus est soluta
            architecto voluptatem.`
          }
        ]
      });
    }, 2000);
    return () => timmer;
  }, []);
  return (
    <Container>
      {loading
        ? ["Boring", "Spinner", "Progress", "Skeleton"].map(type => (
            <ContentCard type={type} loading={true}></ContentCard>
          ))
        : data.map(({ image, avatar, title, content }) => (
            <ContentCard
              type=""
              loading={true}
              image={image}
              avatar={avatar}
              title={title}
            >
              {content}
            </ContentCard>
          ))}
    </Container>
  );
}

export default App;
