import React from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';

export default function Story({avatar, name, isCreateStory=false, isSeen}) {
    return (
        <TouchableOpacity style={styles.user}>
            <View style={styles.storyArea}>
                <View
                style={[
                    styles.avatarBorder, {
                        borderColor: isCreateStory
                        ? "rgb(0,0,0,.0975)" 
                        : isSeen
                        ? "tranparent"
                        : "#c73191"
                    },
                ]}
                >
                    <Image source={avatar} style={styles.avatar} />
                    { isCreateStory && (
                            <View style={styles.plusIcon}>
                                <Feather name="plus" size={14} color={'#fff'} />
                            </View>
                        )
                    }

                </View>
                <Text numberOfLines={1} style={styles.name}>
                    {name}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  user: {
    width: 100, // Adjust for story container width
    paddingHorizontal:4, // Padding around the story container
  },
  avatarBorder: {
    width: 68, // Outer circle size
    height: 68,
    borderRadius: 40, // Half of width/height for a perfect circle
    borderWidth: 2, // Thickness of the border
    borderColor: '#FF4500', // Vibrant orange color, similar to Instagram's gradient
    margin: 6,
    marginBottom: 3, // Space around the avatar
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center', // Center content vertically
  },
  avatar: {
    width: 62, // Inner image size
    height: 62,
    borderRadius: 40, // Inner circle
  },
  plusIcon: {
    position: 'absolute', // Overlay positioning
    bottom: -5, // Slightly below the avatar
    right: -5, // Slightly to the right
    width: 24, // Icon size
    height: 24,
    borderRadius: 12, // Circle
    backgroundColor: '#00BFFF', // Bright blue color for the "+" icon
    justifyContent: 'center', // Center icon horizontally
    alignItems: 'center', // Center icon vertically
    overflow: 'hidden', // Ensure content doesn't overflow the circle
  },
  names: {
    marginTop: 5, // Space between avatar and name
    marginBottom: 5, // Space between avatar and name
    textAlign: 'center', // Center align the text
    fontSize: 12, // Appropriate size for names
    lineHeight: 15, // Slightly taller line height for readability
    color: '#333', // Neutral dark gray for text
    maxWidth: 50, // Constrain width for long names
  },
});
