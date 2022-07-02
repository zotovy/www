import styled from "styled-components";

const ProjectPreview = styled.img`
  border-radius: 15px;
  cursor: pointer;
  transition: transform 300ms, opacity 200ms;
  object-fit: cover;
  
  &.first, &.second {
    flex: 0 0 auto;
    width: 370px;
    height: 250px;
    margin-right: 30px;
  }

  &.first {
    margin-bottom: 30px;
  }

  &.third {
    width: 100%;
    height: 530px;
  }

  &:active {
    transform: scale(0.975);
  }

  &:hover {
    transform: scale(0.99);
  }

  @media screen and (min-width: 850px) and (max-width: 1024px) {
    &.first, &.second {
      width: 300px;
      height: 200px;
    }

    &.third {
      width: 100%;
      height: 430px;
    }
  }

  @media screen and (max-width: 850px) {
    width: 100% !important;
    height: 0 !important;
    padding-top: 56.25%;

    &.third {
      margin-top: 30px;
    }
  }
`;

export default ProjectPreview