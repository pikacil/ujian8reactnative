import React, { useState, useEffect } from 'react'

import { Layout, Text, Input, IndexPath, Select, SelectItem, Card, Avatar, Button } from '@ui-kitten/components';

import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';

import axios from 'axios';

const Register = ({ navigation }) => {
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")
    const [username, setusername] = useState("")
    const [address, setaddress] = useState("")

    // const Daftar = () => {
    //     axios
    //         .post('https://ujian8serverheroku.herokuapp.com/user', {
    //             username: username,
    //             email: email,
    //             phone: phone,
    //             address: address
    //         })
    //         .then(function (response) {
    //             // handle success
    //             alert("Data Telah Disimpan");
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             alert(error.message);
    //         });
    //     navigation.navigate('Home');
    // }
    const Daftar = () => {
        axios
            .post('https://ujian8serverheroku.herokuapp.com/user', {
                username: username,
                email: email,
                phone: phone,
                address: address
            })
            .then(function (response) {
                // handle success
                alert("Data Telah Disimpan");
            })
            .catch(function (error) {
                // handle error
                alert(error.message);
            });
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>

                <Layout style={styles.container}>
                    <Text style={styles.label}>Username</Text>
                    <Input style={styles.layout}
                        placeholder=' input name'

                        autoCapitalize="none"
                        onChangeText={txtusername => setusername(txtusername)} />
                    <Text style={styles.label}>Email</Text>
                    <Input style={styles.layout}
                        placeholder=' input email'

                        autoCapitalize="none"
                        onChangeText={txtemail => setemail(txtemail)} />

                    <Text style={styles.label}>Phone</Text>
                    <Input style={styles.layout}
                        placeholder=' input phone'

                        autoCapitalize="none"
                        onChangeText={txtphone => setphone(txtphone)} />
                    <Text style={styles.label}>Address</Text>

                    <Input style={styles.layout}
                        placeholder=' input Address'
                        autoCapitalize="none"
                        onChangeText={txtAddress => setaddress(txtAddress)} />


                    <Card style={styles.footerView}>
                       
                        <Button onPress={() => { Daftar() }}>
                            Daftar
                         </Button>
                    </Card>

                </Layout>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',

    },

    layout: {
        margin: 15,
        alignItems: 'center',
    },

    containerPicture: {


        flexDirection: 'column',
        justifyContent: 'space-between'

    },
    avatar: {
        alignItems: 'center',
        margin: 8,
    },
    footerView: {
        flex: 1,
        alignItems: "flex-end",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    }, label: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 20,
        paddingLeft: 15,
        paddingTop: 5
    },

});

export default Register

