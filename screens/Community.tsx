import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  align-items: center;
  background: gold;
`

export default function Community() {
  return (
    <Container>
      <Text>COMMUNITY</Text>
    </Container>
  )
}
