import React, {useState, useEffect} from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getUsers, rootLoader} from '../actions/';
import {messageIcon} from '../assets/icons';
import {logoImg, userPlaceHolder} from '../assets/images';
import {CTSHeader, CTSIcon, CTSShadow} from '../components';
import {colors, fonts, fontSizes} from '../constants';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const userData = useSelector(data => data.user);
  console.log('🚀 ~ file: Home.js ~ line 9 ~ Home ~ userData', userData);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(rootLoader(true));
      const hResult = await dispatch(getUsers());
      if (hResult.status) {
        setData(hResult.data);
      }
      dispatch(rootLoader(false));
    };
    fetchData().catch(console.error);
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <CTSShadow style={styles.shadowStyle}>
        <View style={[styles.rowCenterStyle, styles.contentContainerStyle]}>
          <View style={{marginRight: 10}}>
            <CTSIcon
              source={userPlaceHolder}
              iconStyle={{width: 50, height: 50}}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: fontSizes.f16,
                fontFamily: fonts.sairaSemiBoldFont,
                color: colors.midnightblue,
                marginLeft: 8,
              }}>
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: fontSizes.f12,
                fontFamily: fonts.sairaMediumFont,
                color: colors.lightslategray,
                marginLeft: 8,
              }}>
              {item.email}
            </Text>
          </View>
        </View>
      </CTSShadow>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <CTSHeader
        statusbarColor={colors.background}
        statusbarStyle="dark-content"
        headerContainerStyle={{marginHorizontal: 20, height: 50}}
        leftComp={
          <View style={styles.rowCenterStyle}>
            <CTSIcon
              disabled
              source={logoImg}
              iconStyle={{width: 35, height: 35}}
            />
            <Text style={styles.headerTitle}>Nettpage</Text>
          </View>
        }
        rightComp={
          <View>
            <CTSIcon source={messageIcon} iconStyle={{width: 25, height: 25}} />
          </View>
        }
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        bounces={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        ListHeaderComponent={<View style={{height: 15}} />}
        ListFooterComponent={<View style={{height: 15}} />}
        ListEmptyComponent={
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 16, fontWeight: '500'}}>
              No data found!
            </Text>
          </View>
        }
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
      />
      <SafeAreaView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contentContainerStyle: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 20,
  },
  rowCenterStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: fontSizes.f18,
    fontFamily: fonts.sairaSemiBoldFont,
    color: colors.midnightblue,
    marginLeft: 8,
  },
  shadowStyle: {
    shadowColor: colors.black,
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
});

export default Home;
