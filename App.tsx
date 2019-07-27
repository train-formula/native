import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
import styled from 'styled-components'
import Community from './screens/Community'
import Home from './screens/Home'
import Workouts from './screens/Workouts'

const Icon = styled(MaterialCommunityIcons)`
  margin-top: 10px;
`

function selectIcon(route) {
  switch (route) {
    case 'Home':
      return 'home'
    case 'Community':
      return 'account-heart'
    case 'Workouts':
      return 'dumbbell'
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Workouts,
    Community,
    Home,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state

        const icon = selectIcon(routeName)
        const color = focused ? 'white' : 'gray'

        return <Icon name={icon} size={24} color={color} />
      },
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'black',
      },
    },
  },
)

export default createAppContainer(TabNavigator)

// const Container = styled.SafeAreaView`
//   flex: 1;
//   flex-direction: column;
//   align-items: center;
//   background: skyblue;
// `

// export default function App() {
//   return (
//     <Container>
//       <Text>APP</Text>
//     </Container>
//   )
// }
