import { StyleSheet, Text, View, FlatList} from 'react-native';

import Header from '../../componets/Header'
import Balance from '../../componets/Balance';
import Movements from '../../componets/Movements';
import Actions from '../../componets/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '300,90',
    date: '17/09/2022',
    type: 0 // despesas
  },
  {
    id: 2,
    label: 'Pix cliente x',
    value: '2.500,00',
    date: '19/09/2022',
    type: 1 // receita / entradas
  },
  {
    id: 3,
    label: 'Salário',
    value: '7.200,00',
    date: '22/09/2022',
    type: 1 // despesas
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header/>


      <Balance/>

      <Actions/>


      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        ReyExtractor={ (item) => String(item.id)} //converter para string
        showsVerticalScrollindicator={false}
        renderItem={ ({item}) => <Movements data={item} />} //rederizar cada componente
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});
