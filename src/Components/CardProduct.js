import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import {Card,Rating} from 'react-native-elements';
import {withNavigation} from 'react-navigation';
import product from '../Public/redux/reducers/product';

class CardProduct extends Component {

    constructor(props){
        super(props); 
        this.state = {
            dataProduct:[
            {id:this.props.idProduct,
            image:this.props.image,
            product_name:this.props.titleProduct,
            price:this.props.price,
            rating:this.props.rating,
            userRated:this.props.userRated}
        ]       
    }
    }
    render(){
        return(
            <View style={{flex:1,flexGrow:1}}>
            <TouchableOpacity
            activeOpacity={1}
            onPress={() => this.props.navigation.navigate('Detail',this.state.dataProduct)}
            >
                <Card 
                
                image={{uri:this.props.image}}
                imageStyle={styles.ImageIconStyle}
                containerStyle={{
                flex:1,
                backgroundColor:'#FFF',
                width:'100%',
                margin:0,
                borderColor:'transparent'
                }}>
                    <Text style={styles.ProductNameStyle} numberOfLines={2}>{this.props.titleProduct}</Text>
                   <Text style={styles.PriceTextStyle}>Rp {this.props.price}</Text>
                    <View style={{marginLeft:3,flexDirection:'row'}}>
                    <Rating
                     type='star'
                     imageSize={12}
                     readonly
                     fractions={1}
                     startingValue={this.props.rating}
                     style={ styles.rating }/><Text style={{fontSize:12,marginTop:-3}}>({this.props.userRated})</Text></View>
                    {/* {this.props.Wishlist!=='' && } */}
                    
                </Card>
            </TouchableOpacity>
        </View>
        )
    }
}

export default withNavigation(CardProduct);

const styles=StyleSheet.create ({
    ImageIconStyle: {
       borderRadius:5,
       overflow:"hidden",
       margin:15,
       marginBottom:0
    },
    ProductNameStyle: {
        fontWeight:'bold',
        fontSize:15,
        color:'#000',
        marginLeft:3
    },
    PriceTextStyle: {
       fontWeight:'800',
       fontSize:14,
       color:'#FFA044',
       marginLeft:3
    },
    rating: {
       paddingRight:5,
       height:5,
    }
  
})