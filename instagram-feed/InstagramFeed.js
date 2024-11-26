import { StatusBar } from 'expo-status-bar';
import { FlatList, 
        StyleSheet, 
        Text, 
        View, 
        Image,
        TouchableOpacity,
        SafeAreaView
} from 'react-native';
import {Feather} from '@expo/vector-icons';
import Stories from './Stories';
import data from './data';
import Constants from 'expo-constants';
import Article from './Article';
import React, {useState} from "react";
import { CameraView } from 'expo-camera';

const INSTAGRAM_LOGO = "../assets/instagram-feed-images/instagram_logo.png"

export default function Instagram() {

  const [showCamera, setShowCamera] = useState(false);
  const [cameraType, setCameraType] = useState('facing');

  function renderItem({item, index}) {
    if (index === 0) {
      return (
          <>
              <View style={styles.stories}>
                  <Stories stories={data.stories} profile={data.profile} />
              </View>
              <Article item={item} />
          </>
      );
    } else {
      return(
        <Article item={item} />
      );
    }
  }

  return (
    <SafeAreaView style={styles.container}>
       {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity>
            <Feather name="camera" size={24} 
            onPress={() => {
              setShowCamera(!showCamera);
              setCameraType(false);
            }}
            />
        </TouchableOpacity>

        <Image source={require(INSTAGRAM_LOGO)} style={styles.logo} />

        <TouchableOpacity>
            <Feather name="send" size={24} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={data.articles}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      <StatusBar style='auto' />
      {
        showCamera && (
          <CameraView style={styles.camera} facing={cameraType}>
            <View style={styles.cameraContainer}>
              <TouchableOpacity onPress={() => setShowCamera(false)}>
                <Feather name='x' size={24} color='white' />
              </TouchableOpacity>
            </View>

          </CameraView>
        )
      }

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:40,
    paddingTime: Constants.StatusBarHeight,
  },
  header: {
    borderBottomWidth:1,
    borderBottomColor:"#dbdbdb",
    flexDirection: "row",  //아이콘들이랑 같이 정렬
    justifyContent: "space-between",  //일정한 간격을 두고 배치(양 끝과 간격을 둠)
    alignItems: "center",
    paddingHorizontal:16,  // 좌우에 동일한 여백을 설정(=paddingLeft와 paddingRight에 각각 16 설정)
    paddingVertical:6,
  },
  logo: {
    flex:1,  // 자식 요소가 남은 공간을 모두 차지하게 함.(다른 요소가 없으면 모든 크기를 채움)
    height:30,
    resizeMode:"contain"  //이미지가 컨테이너 내에서 비율을 유지하며 완전히 들어가게 설정
  },
  stories: {
    borderBottomWidth:1,
    borderBottomColor: '#dbdbdb',
    height: 110,
    padding: 5,
    backgroundColor: "#fafafa",
  },
  selectedImage: {
      width: '100%',
      height: 300,
      resizeMode: 'cover',
      marginTop: 10,
  },
});
