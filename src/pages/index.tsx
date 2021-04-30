import React from "react";
import styled from "styled-components"
import Button from "@/components/button"

const Container = styled.div`
  padding: 30px;
  width: 150px;
`;

export default function IndexPage() {
  return <Container>
    <Button type="secondary">My button</Button>
  </Container>
}
