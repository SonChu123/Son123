/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker'
import moment from 'moment'
// import Step1 from './Step1'
// import Step2 from './Step2'
// import Step3 from './Step3'
// import Step4 from './Step4'

// import { createStackNavigator, createAppContainer } from 'react-navigation'
// import {orderInfo} from '../Model/orderInfo'
// import 'es6-symbol/implement';


class Step extends Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props)
    this.state = {
      statusStep: 1,
      isVisible: false,
      chosenDate: '',
      from: '',
      to: '',
      items: '',
      weight: '',
      tempvehicleType: '',//loại xe
      vehicleSize: '',
      amount: '',
    }

  }


  ShowPicker = () => {
    this.setState({
      isVisible: true
    })
  }
  HidePicker = (datetime) => {
    this.setState({
      isVisible: false,
      chosenDate: moment(datetime).format('HH:mm Ngày D-M-YYYY')

    })
  }
  HandelPicker = (datetime) => {
    this.setState({
      isVisible: false,
      chosenDate: moment(datetime).format('HH:mm Ngày D-M-YYYY')

    })
  }
  HandleStep = () => {
    if (this.state.from == '') {
      alert('Bạn chưa nhập điểm đi')
    }
    else {
      if (this.state.to == '') {
        alert('Bạn chưa nhập điểm đến')
      }
      else {
        if (this.state.chosenDate == '') {
          alert('Bạn chưa nhập thời gian')
        }
        else {
          this.setState({
            statusStep: 2
          })
          // alert('Success')
          // const order = new oderInfo ({
          //   from: this.state.from,
          //   to:this.state.to,
          //   time: this.state.chosenDate,
          //   items:this.state.items,
          //   weight:this.state.weight,
          //   tempvehicleType:this.state.tempvehicleType,//loại xe
          //   vehicleSize:this.state.vehicleSize,
          //   amount:this.state.amount,
          // })
          // const myJSON=JSON.stringify(order);
          // alert(myJSON.fullOder);
        }
      }


    }
  }
  render() {


    if (this.state.statusStep == 1) {
      return (
        <View style={{ flex: 1, flexDirection: 'column', }}>
        <View style={{ flex: 90, marginLeft: 20, marginTop: 50 }}>
          <TextInput
            style={{ fontSize: 18 , marginLeft:40}}
            placeholder='Điểm đi'
            onChangeText={(text) => {
              this.setState({
                from: text
              })
            }}

          />
          <TextInput
            style={{ fontSize: 18 ,marginLeft:40}}
            placeholder='Điểm đến'
            onChangeText={(text) => {
              this.setState({
                to: text
              })
            }}

          />

          <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.HandelPicker}
          onCancel={this.HidePicker}
          />
          <TouchableOpacity onPress={this.ShowPicker} style={{flexDirection:'row'}}>
            <Image source={require('../resouces/lichh.jpg')} style={{width:25,height:25}}/>
            <Text style={{fontSize:17,marginLeft:20}}>{this.state.chosenDate}</Text>
          </TouchableOpacity>

          
        </View>
        <View style={{ flex: 10, alignItems: 'center' }}>
          <TouchableOpacity style={{
            backgroundColor: 'rebeccapurple', borderRadius: 15, width: 100, alignItems: 'center'
          }} onPress={this.HandleStep}>
            <Text style={{ color: 'white' }}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>

      </View>
      )
    }

    if (this.state.statusStep == 2) {
      return (
        <View style={{ flex: 1, flexDirection: 'column', }}>
        <View style={{ flex: 90, marginLeft: 20, marginTop: 50 }}>
          <TextInput
            style={{ fontSize: 18 }}
            placeholder='Loại hàng'
            onChangeText={(text) => {
              this.setState({
                items: text
              })
            }}

          />
          <TextInput
            style={{ fontSize: 18 }}
            placeholder='Khối lượng'
            onChangeText={(text) => {
              this.setState({
                weight: text
              })
            }}

          />
          <TextInput
            style={{ fontSize: 18 }}
            placeholder='Loại xe'
            onChangeText={(text) => {
              this.setState({
                tempvehicleType: text
              })
            }}

          />
          <TextInput
            style={{ fontSize: 18 }}
            placeholder='Kích thước'
            onChangeText={(text) => {
              this.setState({
                vehicleSize: text
              })
            }}

          />
          <TextInput
            style={{ fontSize: 18 }}
            placeholder='Số lượng'
            onChangeText={(text) => {
              this.setState({
                amount: text
              })
            }}

          />



        </View>
        <View style={{ flex: 10, alignItems: 'center' }}>
          <TouchableOpacity style={{
            backgroundColor: 'rebeccapurple', borderRadius: 15, width: 100, alignItems: 'center'
          }} onPress={this.setState({
            statusStep: 3
          })}>
            <Text style={{ color: 'white' }}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>

      </View>
      )
    }
    if (this.state.statusStep == 3) {
      return(
      <Text>Step3</Text>
      )
    }
    if (this.state.statusStep == 4) {
      return(
        <Text>Step4</Text>
      )
    }
  }
}
// export default App;

// const AppStack = createStackNavigator(
//   {
//       Home: {screen: Step},
//       Step2: {screen: Step2}
//   },
//   {
//     initialRouteName:'Home'
//   }

// );
// const AppContainer = createAppContainer(AppStack);
// export default AppContainer;
export default Step;
const styles = StyleSheet.create({

});