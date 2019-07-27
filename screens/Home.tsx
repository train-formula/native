import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  align-items: center;
  background: crimson;
`

export default function Home() {
  return (
    <Container>
      <Text>HOME</Text>
    </Container>
  )
}
