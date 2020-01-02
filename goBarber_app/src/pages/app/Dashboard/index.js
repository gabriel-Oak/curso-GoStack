import React, { useEffect } from 'react';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/shared/components/Background';
import { Container, Title, List } from './styles';
import Appointment from '~/shared/components/Appointment';
import { DashboardHooks } from './hooks';
import { ActivityIndicator } from 'react-native';

const Dashboard = ({ isFocused }) => {
  const {
    appointments,
    fetchAppointments,
    cancelAppointment,
    loading
  } = DashboardHooks();

  useEffect(() => {
    if (isFocused) {
      fetchAppointments();
    }
  }, [isFocused]);

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

export default withNavigationFocus(Dashboard);
