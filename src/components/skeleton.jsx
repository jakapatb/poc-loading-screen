import React from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
const Content = styled.div`
  margin: 32px;
  font-size: 18px;
`;
const Header = styled.div`
  margin: 0 32px;
  display: flex;
  font-size: 28px;
  flex-flow: wrap;
  align-items: center;
`;
const ImageSkelton = styled.div`
  width: 100%;
  height: 273px;
  margin: 32px 0;
`;
const AvatarSkeleton = styled.div`
  height: 48px;
  width: 48px;
  margin-right: 16px;
  border-radius: 100%;
`;
export const SkeletonSection = () => (
  <>
    <ImageSkelton>
      <Skeleton height={273} />
    </ImageSkelton>
    <Header>
      <AvatarSkeleton>
        <Skeleton width={48} height={48} circle />
      </AvatarSkeleton>
      <Skeleton width={200} />
    </Header>
    <Content>
      <Skeleton width={288} height={18} />
      <Skeleton width={223} height={18} />
      <Skeleton width={260} height={18} />
      <Skeleton width={125} height={18} />
    </Content>
  </>
);
