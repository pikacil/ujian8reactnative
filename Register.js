import React, { Component } from 'react';
import { View, Text,Image,ActivityIndicator,FlatList } from 'react-native';

export default class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dataPeople:[],
        isLoading:true
    };
  }

  componentDidMount = () => {
    this._fetchItem()
  }
  

    _fetchItem = ()=>{
        return fetch('https://ujian8serverheroku.herokuapp.com/user')
        .then((response)=>response.json())
        .then((responseJson)=>{
            this.setState({
                isLoading:false,
                dataPeople:responseJson.data
            });
        })
        .catch((error)=>{
            console.error(error)
        })
    }

    _itemCoponent=({item})=>{
        return(
            <View style={{flex:1,flexDirection: 'row',marginLeft: 10,}} >
                {/* <View style={{height:50,justifyContent: 'center',}}>
                    <Image source={{uri: item.picture.thumbnail }} 
                    style={{width:40,height:40,borderRadius: 25,}}
                    />
                </View> */}
                
                <View style={{flex:2,height:125}}>
                    <Text style={{padding:5}} >{item.username} </Text>
                    <Text style={{ padding: 5 }}>{item.email}</Text>
                    <Text style={{ padding: 5 }}>{item.phone}</Text>
                    <Text style={{ padding: 5 }}>{item.address}</Text>
                </View>
            </View>
        ) 
    }

    _separatorComponent=()=>{
        return(
            <View style={{backgroundColor:'grey',height:0.5}}></View>
        )
    }

    render() {
        if (this.state.isLoading) {
            return(
                <View style={{padding:20}}>
                    <ActivityIndicator/>
                </View>
            )
        }
        return (
        <View style={{paddingTop: 20,}}>
            <FlatList 
                data={this.state.dataPeople}
                renderItem={this._itemCoponent}
                keyExtractor={(item,index)=>index.toString()}
                ItemSeparatorComponent={this._separatorComponent}
                onRefresh={this._fetchItem}
                refreshing={this.state.isLoading}
            />
        </View>
        );
    }
}