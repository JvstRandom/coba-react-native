import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Switch, TextInput, ScrollView, FlatList, Alert, ToastAndroid, Linking, ImageBackground } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header : 'Home',
      value: true,
      username: '',
      dataMahasiswa: [
        {
          namaMhs: 'Jean',
          npmMhs: 1230098,
        },
        {
          namaMhs: 'John',
          npmMhs: 1230077,
        },
        {
          namaMhs: 'Jedah',
          npmMhs: 1230054,
        },
        {
          namaMhs: 'Joanne',
          npmMhs: 1230023,
        },
        {
          namaMhs: 'Jacob',
          npmMhs: 1230087,
        },
      ],
    };
  }
  render() {
    return (
      <View style={StyleSheet.container}>
        <StatusBar barStyle="light-content" backgroundColor = '#467530'/>
        <View
        style={styles.imageContainer}
        >
          <Text style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: 25}}>
            {this.state.header} 
          </Text>
        </View>

        <TouchableOpacity 
          style={styles.image}
          onPress={ () => Alert.alert('Information', 'Anda akab menghapus gambar ini?', [
            {
              text: 'Cancel',
              onPress: () => console.log('cancel ditekan'),
              style: 'cancel',
            },
            {
              text: 'Ok',
              onPress: () => console.log('ok ditekan'),
            },
          ])}
        >
          <ImageBackground
            source={require('./assets/images/contoh1.png')}
            style={{width: 300, height: 300, borderRadius: 10, padding: 20, justifyContent: 'flex-end', alignItems: 'center',}}
          >
            <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>REACT NATIVE</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={ () => Linking.openURL('https://google.com/')}>
          <Text style= {{color: 'white', fontSize: 20}}>Klik Google</Text>
        </TouchableOpacity>
        
        <FlatList
          style={{ paddingTop: 20}}
          data={this.state.dataMahasiswa}
          renderItem={ ({item, index}) => (
            <TouchableOpacity
              style={styles.flatlistItem}
              onPress={ () => ToastAndroid.show(item.namaMhs + ' diklik', ToastAndroid.SHORT)}
              >
              <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>{item.namaMhs}</Text>
              <Text style={{color: 'black'}}>{item.npmMhs}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.npmMhs}
        />

        <View
          style={styles.switch}
        >
          <Switch
            value={this.state.value} onValueChange={ () => this.setState({value: !this.state.value})}
          >
          </Switch>
        </View>

        {/* <TextInput
          value={this.state.username}
          style= {styles.textInput}
          onChangeText={value => this.setState({username: value})}
        />

        <TouchableOpacity
          style={styles.button}
        >
          <Text style={{ color: '#FFFFFF', fontSize: 20}}>
            Click Here!
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={{ color: '#FFFFFF', fontSize: 20}}>
            Click Here!
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={{ color: '#FFFFFF', fontSize: 20}}>
            Click Here!
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={{ color: '#FFFFFF', fontSize: 20}}>
            Click Here!
          </Text>
        </TouchableOpacity> */}
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    backgroundColor: '#7bb85f',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    paddingVertical: 20,
  },
  image: {
    justifyContent: 'center', alignItems: 'center'
  },
  switch: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#467530',
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
    color: 'black'
  },
  button: {
    backgroundColor: '#7bb85f',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 20,
    elevation: 3
  },
  flatlistItem: {
    marginBottom: 20,
    backgroundColor: '#92cf76',
    marginHorizontal: 20,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  }
});

export default App;
