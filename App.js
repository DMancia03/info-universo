import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Tab, TabView, Text as TextRNE } from '@rneui/themed';

export default function App() {
  const [indexTab1, setIndexTab1] = useState(0);

  return (
    <>
      <Header
        backgroundColor='#011826'
        centerComponent={{text: 'Info universo', style: styles.headerTitle}}
      />
      <Tab value={indexTab1} variant='default' onChange={(e) => {setIndexTab1(e)}} style={styles.tab}>
        <Tab.Item
          title="Sol"
          titleStyle={styles.tabTitle}
          icon={{ name: 'sunny', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
          title="Mercurio"
          titleStyle={styles.tabTitle}
          icon={{ name: 'planet', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
          title="Venus"
          titleStyle={styles.tabTitle}
          icon={{ name: 'planet', type: 'ionicon', color: 'white' }}
        />
      </Tab>
      <TabView value={indexTab1} onChange={setIndexTab1} animationType='timing'>
        <TabView.Item>
        <TextRNE>Sol</TextRNE>
        </TabView.Item>
        <TabView.Item>
        <TextRNE>Mercurio</TextRNE>
        </TabView.Item>
        <TabView.Item>
        <TextRNE>Venus</TextRNE>
        </TabView.Item>
      </TabView>

    </>
  );
}

const styles = StyleSheet.create({
  header:{
    padding: 80,
  },
  headerTitle:{
    fontSize:22,
    fontWeight:'bold',
    padding:15,
    color: 'white'
  },
  tab:{
    backgroundColor:'#012E40',
  },
  tabTitle:{
    color:'white',
  }
});
