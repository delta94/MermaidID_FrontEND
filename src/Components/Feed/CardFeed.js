import React,{Component} from 'react';
import {Text,View,ScrollView,FlatList,TouchableOpacity} from 'react-native';
import {Card, Image,Button} from 'react-native-elements';
import {FeedData} from '../../Assets/dummy';
import CardProduct from '../CardProduct';
import Icon from 'react-native-vector-icons/FontAwesome';
//import FeedHeader from '../Header/FeedHeader';


class ViewCard extends Component {
    
    renderItem = ({item,index}) => (
        
        <View style={{margin:10}} key={item.id}>
        <View style={{flexDirection:'row',paddingTop:10,marginStart:10}}>
        <Image
        source={{uri:item.profilePhoto}}
        style={{width:32,height:32,marginRight:5}}
        />
        <Text style={{fontWeight:'800',fontSize:14}}>{item.accountName}{'\n'}
        <Text style={{fontWeight:'100',fontSize:12}}>{item.datetime}</Text>
         </Text>
         
         <Button title="Follow"
         buttonStyle={{backgroundColor:'#51B94A',borderRadius:5 ,width:70}}
        containerStyle={{marginLeft:80}}
         />
         
         <TouchableOpacity>
             <Image
             source={{uri:'https://www.materialui.co/materialIcons/navigation/more_vert_grey_192x192.png'}}
             style={{height:30,width:30,marginTop:5}}/>
         </TouchableOpacity>
         
        </View>
        <Card
        image={{uri:item.postedPhoto}}
        imageStyle={{width:'100%',height:300,overflow:'hidden',borderRadius:10}}
        containerStyle={{width:'90%',borderColor:'#FFF',borderWidth:0}}
        >
        <View style={{height:50,width:'90%'}}>
            <Text numberOfLines={1}>{item.post}</Text>
            <TouchableOpacity>
            <Text style={{color:'#4AB851'}}>Read More</Text>
            </TouchableOpacity>
        </View>
        </Card>
        </View>
    
        
    )
    
    render(){
        return(
        <View> 
            {/* <FeedHeader/> */}
            <View style={{flex:1,flexDirection:'column',backgroundColor:'#FFF',justifyContent:'center'}}>
          <FlatList
          contentContainerStyle={{justifyContent:'center'}}
          data={FeedData}
          renderItem={this.renderItem}
          showsVerticalScrollIndicator={false}
          />
          </View>
          </View>
        )
    }
}

export default ViewCard;