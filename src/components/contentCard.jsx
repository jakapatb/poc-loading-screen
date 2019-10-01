import React from "react";
import styled from "styled-components";
import { SkeletonSection } from "./skeleton";
import { Spinner } from "./spinner";
import { Progress } from "./progressBar";
const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  color: #000;
  width: 384px;
  height: 621px;
  border-radius: 16px;
`;
const Image = styled.img`
  width: 100%;
  height: 273px;
  margin: 32px 0;
  background: #ababab;
`;
const Header = styled.div`
  margin: 0 32px;
  display: flex;
  font-size: 28px;
  flex-flow: wrap;
  align-items: center;
`;
const Avatar = styled.img`
  height: 48px;
  width: 48px;
  margin-right: 16px;
  border-radius: 100%;
`;
const Content = styled.div`
  margin: 32px;
  font-size: 18px;
`;
const ContentCard = ({
  type,
  children = "",
  avatar = "",
  image = "",
  loading,
  title = ""
}) => {
  const Loaded = () => (
    <>
      <Image src={image} />
      <Header>
        <Avatar src={avatar} />
        {title}
      </Header>
      <Content>{children}</Content>
    </>
  );
  const LoadingComponent = () => {
    switch (type) {
      case "Spinner":
        return <Spinner />;
      case "Progress":
        return <Progress />;
      case "Skeleton":
        return <SkeletonSection />;
      default:
        return null;
    }
  };
  return <Card>{loading ? <LoadingComponent /> : <Loaded />}</Card>;
};

export default ContentCard;
