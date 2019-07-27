import React, { useEffect, useState } from 'react'
import { View, PanResponder, Dimensions } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'

const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  align-items: center;
  background: tomato;
`
const Workout = styled(View)`
  border: 3px solid white;
  flex: 1;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`
const SlidingPane = styled(View)`
  position: absolute;
  background-color: #121212;
  width: 100%;
  height: 100%;
`
const Background = styled(View)`
  align-self: stretch;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`
const Icon = styled(MaterialCommunityIcons)``

const workouts = Array.from({ length: 9 }, (_, i) => ({
  id: `item-${i}`,
}))

const { width, height } = Dimensions.get('window')

const getDirectionAndColor = ({ moveX, moveY, dx, dy }) => {
  console.log('heheeheh')
  const draggedDown = dy > 30
  const draggedUp = dy < -30
  const draggedLeft = dx < -30
  const draggedRight = dx > 30
  const isRed = moveY < 90 && moveY > 40 && moveX > 0 && moveX < width
  const isBlue = moveY > height - 50 && moveX > 0 && moveX < width
  let dragDirection = ''

  if (draggedDown || draggedUp) {
    if (draggedDown) dragDirection += 'dragged down '
    if (draggedUp) dragDirection += 'dragged up '
  }

  if (draggedLeft || draggedRight) {
    if (draggedLeft) dragDirection += 'dragged left '
    if (draggedRight) dragDirection += 'dragged right '
  }

  if (isRed) return `red ${dragDirection}`
  if (isBlue) return `blue ${dragDirection}`
  if (dragDirection) return dragDirection
}

function Slider({ children }) {
  let panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      console.log('test')
      !!getDirectionAndColor(gestureState)
    },
    onPanResponderMove: (evt, gestureState) => {
      console.log('blah blah blah')
      const drag = getDirectionAndColor(gestureState)
      this.setState({
        zone: drag,
      })
    },
    onPanResponderTerminationRequest: (evt, gestureState) => true,
  })

  return (
    <Workout>
      <Background>
        <Icon name="heart-outline" size={24} color="white" />
      </Background>
      <SlidingPane {...panResponder.panHandlers}>{children}</SlidingPane>
    </Workout>
  )
}

export default function Workouts() {
  return (
    <Container>
      {workouts.map(workout => (
        <Slider key={workout.id} />
      ))}
    </Container>
  )
}
