import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
export class Step2 extends React {
  contructor(props){
    super(props),
    this.state ={
      items: '',
      weight: '',
      tempvehicleType: '',//loại xe
      vehicleSize: '',
      amount: '',
    }
  }
  render() {
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
}