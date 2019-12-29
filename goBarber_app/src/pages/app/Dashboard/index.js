import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/shared/components/Background';
import { Container, Title, List } from './styles';
import Appointment from '~/shared/components/Appointment';
import { DashboardHooks } from './hooks';
import { ActivityIndicator } from 'react-native';

const Dashboard = () => {
  const {
    appointments,
    fetchAppointments,
    cancelAppointment,
    loading
  } = DashboardHooks();

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <Background>
      <Container>
        {
          loading
            ?
            <ActivityIndicator size={50} />
            :
            <>
              <Title>Agendamentos</Title>

              <List
                data={appointments}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                  <Appointment {...item} cancel={cancelAppointment} />
                )}
              />
            </>
        }
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name='event' size={20} color={tintColor} />
  )
};

export default Dashboard;
