import { Tabs } from 'expo-router';
import React, { useState } from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { ConfigButton, Header, Title } from './styles';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import ModalSearch from '@/components/Modal';

export default function TabLayout() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header>
        <Title>
          WeFit
        </Title>

        <ConfigButton onPress={() => setOpen(true)}>
          <FontAwesome5 name="cog" size={24} color="#000000DE" />
        </ConfigButton>
      </Header>

      <ModalSearch
        open={open}
        handleClose={() => setOpen(false)}
      />

      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            paddingBottom: 8,
            paddingTop: 6,
            height: 56
          }
        }}
        >
        <Tabs.Screen
          name="(home)/index"
          options={{
            title: 'Repositórios',
            tabBarLabelStyle: {
              fontSize: 14,
              fontFamily: "Roboto"
            },
            tabBarIcon: ({ focused }) => (
              <TabBarIcon name="logo-github" size={24} color={focused ? "#1976D2" : "rgba(0,0,0,.6)"} />
            ),
          }}
        />
        <Tabs.Screen
          name="favorites/index"
          options={{
            title: 'Favoritos',
            tabBarLabelStyle: {
              fontSize: 14,
              fontFamily: "Roboto"
            },
            tabBarIcon: ({ focused }) => (
              <TabBarIcon name="star" size={24} color={focused ? "#1976D2" : "rgba(0,0,0,.6)"} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
