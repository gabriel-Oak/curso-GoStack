import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/shared/components/Background';
import { Container, Title, List } from './styles';
import Appointment from '~/shared/components/Appointment';
import { DashboardHooks } from './hooks';

const Dashboard = () => {
  const { appointments, fetchAppointments, cancelAppointment } = DashboardHooks();

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <Background>
      <Container>

        <Title>Agendamentos</Title>

        <List
          data={appointments}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Appointment {...item} cancel={cancelAppointment} />
          )}
        />

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
