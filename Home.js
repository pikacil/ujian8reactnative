
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Alert,ScrollView } from 'react-native'
import axios from 'axios';
import {Avatar, Button, Icon,Card, List, ListItem ,Layout,Text,Divider,IndexPath,Select, SelectItem, Input} from '@ui-kitten/components';


const url = 'https://ujian8serverheroku.herokuapp.com/user/';

const lstCari = ["All","Username", "Email","Phone","Address"]
const Home = ({navigation}) => {
  const [UserData, setUserData] = useState([]);
  const [Filter, setFilter] = useState('');
  const [Keyword, setKeyword] = useState('');
  const [Cari, setCari] = useState(0)
  const renderOption = (title) => (

    <SelectItem key={title} title={title} />
);
  useEffect(() => {
    getdataalluser();
  }, []);
  
  // const getdataalluser = () => {
  //   axios
  //     .get(url)
  //     .then((response) => {
  //       console.log("DAta awalnya =="+JSON.stringify(response.data.data));
        
  //       setUserData(response.data.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  
  const getdataalluser = async () => {
    try {
      const response = await axios.get(url);
      setUserData(response.data.data);
    } catch (error) {
      // handle error
      alert(error.message);
    }
  };
  const getDataFromSearch = () => {
    let cri=url+lstCari[Cari.row]+"/"+Keyword;
    if(Keyword==""){
      cri=url;
    }
    if(lstCari[Cari.row]=="All"){
      cri=url;
      setKeyword("");
    }
    console.log(cri);
    axios
      .get(cri)
      .then(function (response) {
        console.log(response.data.data);
        setUserData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const renderItemHeader = (headerProps, info) => (
    <View {...headerProps}>
      <Text category='h6'>
        Name     : {info.item.username} 
      </Text>
      <Text category='h6'>
        Email     : {info.item.email} 
      </Text>
      <Text category='h6'>
        Phone    : {info.item.phone} 
      </Text>
      <Text category='h6'>
        Address : {info.item.address} 
      </Text>
    </View>
  );


  const renderItem = (info) => (
    <Card
      style={styles.item}
      status='basic'
      header={headerProps => renderItemHeader(headerProps, info)}
     >
      
    </Card>
  );

  return (
    <View>
      
     <Layout style={styles.container}>
       <Text style={styles.label}>Search By</Text>
       <Select style={styles.layout}
                selectedIndex={new IndexPath(Cari)}
                placeholder='Default'
                value={lstCari[Cari.row]}
                onSelect={index => setCari(index)}>
                {lstCari.map(renderOption)}
            </Select>
      <Text style={styles.label}>Keyword</Text>
                    <Input style={styles.layout}
                        placeholder=' Input Keyword'

                        autoCapitalize="none"
                        onChangeText={txtkeyword => setKeyword(txtkeyword)} />
                       <Layout style={styles.footerView}>
                       <Button style={styles.button} onPress={getDataFromSearch}>
                         Search
                       </Button>
                       </Layout>
                      
              </Layout>
              <List
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={UserData}
      renderItem={renderItem}
    />
    </View>
    
  );
};


const styles = StyleSheet.create({
  container: {
    maxHeight: 365,
    borderWidth: 1,
  },
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    marginVertical: 4,
  }, label: {
    color: "#788eec",
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 15,
    paddingTop: 5
},footerView: {
  paddingRight:20,
  paddingBottom:25,
  alignItems: "flex-end",
  marginTop: 20
},button: {
  color:'#fff',
  textAlign:'center',
  backgroundColor:'#68a0cf',
  borderRadius: 10,
  borderWidth: 1,
  borderColor: '#fff'
},
});
export default Home;