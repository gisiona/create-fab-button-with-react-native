import React, { Component } from 'react';
import { 
    StyleSheet,     
    View, 
    TouchableWithoutFeedback,
    Animated,
} from 'react-native';
import{AntDesign, Entypo } from '@expo/vector-icons';


export default class FabButton extends Component {

    animation = new Animated.Value(0);

    toggleMenu = () => {
        const toValue = this.open ? 0 : 1;
        console.log(toValue);

        Animated.spring(this.animation, {
            toValue,
            friction: 6, 
            useNativeDriver: true           
        }).start();

        this.open = !this.open;
    }

    render(){

        const heartStyle = {
            transform: [
                {scale: this.animation },
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -110]
                    })
                }
            ]
        }

        const cameraStyle = {
            transform: [
                {scale: this.animation },
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -55]
                    })
                }
            ]
        }

        const rotation = {
            transform:[
                {
                    rotate: this.animation.interpolate({
                        inputRange: [0,1],
                        outputRange: ["0deg", "45deg"]
                    })
                }
            ]
        }

        return (
            <View style={[styles.container, this.props.style]}>
        
                <TouchableWithoutFeedback  onPress={ () => alert("Likes")}>
                    <Animated.View style={[styles.botton, styles.submenu,heartStyle]}>
                        <AntDesign name="heart" size={24} color="#fff"/>
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={ () => alert("Camera")}>
                    <Animated.View style={[styles.botton, styles.submenu, cameraStyle]}>
                        <Entypo name="camera" size={24} color="#fff"/>
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this.toggleMenu}>
                    <Animated.View style={[styles.botton, styles.menu, rotation]}>
                        <AntDesign name="plus" size={38} color="#fff"/>
                    </Animated.View>
                </TouchableWithoutFeedback>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position:"absolute",
  },
  botton:{      
    position:"absolute",
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 10,
    shadowColor: '#00213B',
    shadowOpacity: 0.3,
    shadowOffset: {
        height: 10,
    }
  },
  menu:{
    backgroundColor: '#1ab563'
  },
  submenu:{
    width: 48,
    height: 46,
    borderRadius: 60/2,
    backgroundColor: "#1ab563"
  }
});
