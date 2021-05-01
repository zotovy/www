import React from "react"
import styled from "styled-components"
import Title from "@/components/title"
import SectionLayoutStyles from "../layouts/sections"
import BlogPost from "@/components/blog-post"
import MoreText from "@/components/more"


export default function Section5() {
  return <Section>
    <Title>Latest Blog Post</Title>
    <Grid>
      <BlogPost image="https://www.thedroidsonroids.com/wp-content/uploads/2019/06/flutter_blog-react-vs-flutter.png" subtitle="The two most popular cross-platform mobile app development frameworks available at the moment are Flutter and React Native. These juggernauts are backed by two of the largest tech companies in the world: by Google and Facebook." title="Flutter vs React Native. The best crossplatform mobile framework" />
      <BlogPost image="https://www.thedroidsonroids.com/wp-content/uploads/2019/06/flutter_blog-react-vs-flutter.png" subtitle="The two most popular cross-platform mobile app development frameworks available at the moment are Flutter and React Native. These juggernauts are backed by two of the largest tech companies in the world: by Google and Facebook." title="Flutter vs React Native. The best crossplatform mobile framework" />
      <BlogPost image="https://www.thedroidsonroids.com/wp-content/uploads/2019/06/flutter_blog-react-vs-flutter.png" subtitle="The two most popular cross-platform mobile app development frameworks available at the moment are Flutter and React Native. These juggernauts are backed by two of the largest tech companies in the world: by Google and Facebook." title="Flutter vs React Native. The best crossplatform mobile framework" />
      <BlogPost image="https://www.thedroidsonroids.com/wp-content/uploads/2019/06/flutter_blog-react-vs-flutter.png" subtitle="The two most popular cross-platform mobile app development frameworks available at the moment are Flutter and React Native. These juggernauts are backed by two of the largest tech companies in the world: by Google and Facebook." title="Flutter vs React Native. The best crossplatform mobile framework" />
    </Grid>
    <MoreText>More</MoreText>
  </Section>
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 58px;
  grid-row-gap: 100px;


  @media screen and (max-width: 868px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Section = styled.section`
  ${ SectionLayoutStyles };
  margin-bottom: 150px;
`

