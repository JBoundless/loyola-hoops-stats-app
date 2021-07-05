import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Box, FlatList, Center, NativeBaseProvider, VStack, Divider } from "native-base"

export default function App() {
  const data = [
{
name: 'John Belardi',
position: 'PG',
number: '12',
  pointsPerGame: 7.4,
  reboundsPerGame: 3.4,
  assistsPerGame: 2.7,
  fieldGoalPer: 40,
  threePointPer: 35,
  freeThrowPer: 65
},
{
name: 'Andre Perris',
position: 'SG',
number: '13',
  pointsPerGame: 5.1,
  reboundsPerGame: 3.0,
  assistsPerGame: 0.9,
  fieldGoalPer: 48,
  threePointPer: 48,
  freeThrowPer: 61
},
{
name: 'Jack Kresich',
position: 'SG/PF',
number: '10',
  pointsPerGame: 10.4,
  reboundsPerGame: 4.8,
  assistsPerGame: 1.3,
  fieldGoalPer: 45,
  threePointPer: 30,
  freeThrowPer: 69
},
{
name: 'Remington Rofer',
position: 'PF',
number: '35',
  pointsPerGame: 7.7,
  reboundsPerGame: 4.9,
  assistsPerGame: 1.1,
  fieldGoalPer: 39,
  threePointPer: 34,
  freeThrowPer: 61
},
{
name: 'Colby Brooks',
position: 'C',
number: '20',
  pointsPerGame: 15.5,
  reboundsPerGame: 7.2,
  assistsPerGame: 0.7,
  fieldGoalPer: 51,
  threePointPer: 34,
  freeThrowPer: 76
},
{
name: 'Jalen Cox',
position: 'PG',
number: '3',
 pointsPerGame: 3.4,
 reboundsPerGame: 0.8,
 assistsPerGame: 1.5,
 fieldGoalPer: 40,
 threePointPer: 25,
 freeThrowPer: 65
},
{
name: 'Uri Ferguson',
position: 'SG',
number: '1',
  pointsPerGame: 2.6,
  reboundsPerGame: 1.8,
  assistsPerGame: 1.6,
  fieldGoalPer: 27,
  threePointPer: 13,
  freeThrowPer: 65
},
{
name: 'Grant Roquemore',
position: 'SF',
number: '24',
pointsPerGame: 4.3,
reboundsPerGame: 3.6,
assistsPerGame: 0.8,
fieldGoalPer: 62,
threePointPer: 0,
 freeThrowPer: 48
},
{
name: 'Nick Green',
position: 'PF',
number: '30',
 pointsPerGame: 1.3,
 reboundsPerGame: 2.0,
 assistsPerGame: 0.2,
 fieldGoalPer: 29,
 threePointPer: 20,
 freeThrowPer: 0
},
{
name: 'Christian Sucuveanu',
position: 'C',
number: '33',
  pointsPerGame: 3.2,
  reboundsPerGame: 1.9,
  assistsPerGame: 0.4,
  fieldGoalPer: 46,
  threePointPer: 0,
  freeThrowPer: 63
},
{
name: 'Trent Turner',
position: 'PG',
number: '4',
  pointsPerGame: 0.1,
  reboundsPerGame: 0.5,
  assistsPerGame: 0.5,
  fieldGoalPer: 20,
  threePointPer: 0,
  freeThrowPer: 0
},
{
name: 'Lukas Junn',
position: 'SG',
number: '22',
  pointsPerGame: 0.5,
  reboundsPerGame: 0.3,
  assistsPerGame: 0,
  fieldGoalPer: 33,
  threePointPer: 0,
  freeThrowPer: 0
},
{
name: 'Wyatt Freeark',
position: 'SF',
number: '21',
  pointsPerGame: 1.1,
  reboundsPerGame: 0.2,
  assistsPerGame: 0.9,
  fieldGoalPer: 33,
  threePointPer: 50,
  freeThrowPer: 60
},
{
name: 'Dylan Tracy-Lindenbaum',
position: 'SG',
number: '23',
  pointsPerGame: 3.8,
  reboundsPerGame: 1.2,
  assistsPerGame: 0.3,
  fieldGoalPer: 77,
  threePointPer: 100,
  freeThrowPer: 25
},
{
name: 'Jackson Treiger',
position: 'SF',
number: '14',
  pointsPerGame: 1.4,
  reboundsPerGame: 0.3,
  assistsPerGame: 0.4,
  fieldGoalPer: 50,
  threePointPer: 50,
  freeThrowPer: 0
},
{
name: 'Reid Neumann',
position: 'SF',
number: '31',
  pointsPerGame: 1.4,
  reboundsPerGame: 2.2,
  assistsPerGame: 0.2,
  fieldGoalPer: 33,
  threePointPer: 20,
  freeThrowPer: 0
},
{
name: 'Parker Jones',
position: 'SF',
number: '44',
  pointsPerGame: 0,
  reboundsPerGame: 0,
  assistsPerGame: 0,
  fieldGoalPer: 0,
  threePointPer: 0,
  freeThrowPer: 0
},
{
name: 'Jacoby Kelly',
position: 'SG',
number: '81',
  pointsPerGame: 0,
  reboundsPerGame: 0,
  assistsPerGame: 0,
  fieldGoalPer: 0,
  threePointPer: 0,
  freeThrowPer: 0
}
]
  return (
    <NativeBaseProvider style={styles.container}>
    <Text style={styles.header}>Loyola High School Varisty Basketball Team Stats (2019-20)</Text>
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <VStack space={4} divider={<Divider />}>
        <Box border={1} borderRadius='md' px={4} pt={4} pb={4} backgroundColor='#d3d3d3'>
        <Text style={styles.name}>
          {item.name}
        </Text>
        <Text style={styles.info}>{item.position}, {item.number}</Text>
        <Text><Text style={styles.span}>STATS:</Text> {item.pointsPerGame} PPG, {item.reboundsPerGame} RPG, {item.assistsPerGame} APG</Text>
        <Text><Text style={styles.span}>SPLITS:</Text> {item.fieldGoalPer}% FG, {item.threePointPer}% 3PT, {item.freeThrowPer}% FT</Text>
        </Box>
        </VStack>
      )}
      keyExtractor={(item) => item.id}
    />
    <Text style={styles.footer}>Head Coach: Jamal Adams</Text>
    <Text style={styles.footer}>Assistant Coaches: Chad Yates, Damon Boyd, Dane Suttle Sr</Text>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  header: {
    fontWeight: '700',
    textAlign: 'center',
    backgroundColor: '#000080',
    color: 'white',
    paddingTop: 30
  },
  footer: {
    fontWeight: '700',
    textAlign: 'center',
    backgroundColor: '#000080',
    color: 'white'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  name: {
    fontWeight: '700'
  },
  info: {
    fontWeight: '600'
  },
  span: {
    fontWeight: '600'
  }
});
