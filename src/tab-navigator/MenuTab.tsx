import React, { useState, useContext } from 'react';
import {
  SafeAreaView,
  SectionList,
  View,
  Text,
  StyleSheet,
  Pressable,
  Image
} from 'react-native'

import { CartScreen } from '../screens/CartScreen';
import { MenuItem } from '../components/MenuItem';
import { textStyles } from '../res/styles/text'
import { containerStyles } from '../res/styles/container'
import menuData from '../data/menuData.js'

// fetching menu data for a restaurant example
function getMenuData(id) {
  return menuData[id];
}

function GetDirections({address}) {
  // clicking on the address should request Google API for directions to restaurant

  return (
    <Pressable onPress={() => (console.log('Connect to Google API'))}>
      <Text style={{color: 'blue', textDecorationLine: 'underline'}}>{address}   </Text>
    </Pressable>
  );
}

function RestaurantHeader({params}) {
  let url = '../res/images/order_weasel_small.jpg'
  let id = params.id;
  let title = params.title;

  return (
  <View style={[styles.topSection, {padding: 10, flexDirection: 'row', paddingLeft: 20,  alignItems: 'center'}]}>
    <View style={{flex: 1}}>
      <Image source={require(url)} style={{width: 50, height: 50}}></Image>
    </View>
    <Text style={[textStyles.headingText, {flex: 3}]}>{title}</Text>
  </View>
  );
}

function RestaurantFooter({params, navigation}) {
  return (
    <Pressable style={styles.button} onPress={()=> navigation.navigate('Cart', params)}>
      <View style={{flex: 0.5}}></View>
      <View style={[textStyles.buttonText, {flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}]}>
        <View style={{flex: 1}}>
          <Text style={[textStyles.headingText, {textAlign: 'center'}]}>View Cart</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={[textStyles.headingText,  {textAlign: 'center'}]}>$0.00</Text>
        </View>
      </View>
      <View style={{flex: 0.5}}></View>
    </Pressable>
  );
}

function ListHeader({id, title, category, distance, rating, phone, hours, address}) {
    // example
    hours = '8:00-8:00';
    phone = '(456)567-7895'

  return (
    <View style={{flex: 1}}>
      <View style={[styles.topSection, {flex: 1}]}>
        <View style={{flex: 1, padding: 10, paddingLeft: 40, paddingRight: 40}}>
          <Text style={textStyles.headingText}>{rating} | {category} | {distance}mi</Text>
          <Text style={textStyles.headingText}>{hours}</Text>
          <Text style={textStyles.headingText}>{phone}</Text>
        </View>
      </View>
      <View style={[styles.topSection, {padding: 10}]}>
        <Text style={textStyles.text}>This is a pickup order</Text>
        <Text style={textStyles.text}>
          You'll need to go to {title} to pick up this order at: <GetDirections address={address}/>
        </Text>
      </View>
    </View>
  );
}

function ListFooter() {
  return (
    <View style={{height: 70}}></View>
  );
}

export function MenuTab({route, navigation}) {
    let params = route.params.params;
    const [expandedSections, setExpandedSections] = useState(new Set());

    let restaurantId = params.id;

    const handleToggle = (title) => {
       setExpandedSections((expandedSections) => {
          const next = new Set(expandedSections);
          if (next.has(title)) {
            next.delete(title);
          } else {
             next.add(title);
          }
             return next;
       });
    }

  //   // request menu data using params.id
  //   //  let Data = getMenuData for the given params.id
  //   // this will be an asynchronous call to the backend API
    const DATA = getMenuData(restaurantId);

  return (
    <SafeAreaView style={containerStyles.main}>
      <RestaurantHeader params={params}/>
      <SectionList
         sections={DATA}
         extraData={expandedSections}
         keyExtractor={(item, index) => item + index}
         ListHeaderComponent={ListHeader(params)}
         renderSectionHeader={({section: {title}}) => (
           <Pressable onPress={() => {
             handleToggle(title);
           }}>
             <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
               <Text style={[textStyles.headerText, { width: '90%' }]}>{title}</Text>
               <Image style={{width: 20, height: 20, alignSelf: 'center', marginRight: 20}} source={require('../res/images/angle-small-down.png')} />
             </View>
           </Pressable>
         )}
         renderItem={({section: {title}, item}) => {
           const isExpanded = expandedSections.has(title);

           if (!isExpanded) return null;

           return (
             <MenuItem item={item} restaurantId={restaurantId}/>
           );
         }}
         ListFooterComponent={ListFooter}
      />
      <RestaurantFooter params={params} navigation={navigation}/>
    </ SafeAreaView>
  );
}

const styles = StyleSheet.create({
    button: {
      width: '100%',
      height: 70,
      backgroundColor: 'white',
      borderColor: 'black',
      borderTopWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    topSection: {
       backgroundColor: 'white',
       borderColor: 'black',
       borderBottomWidth: 1,
     }
});
