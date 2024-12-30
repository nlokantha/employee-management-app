import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SearchResult = ({data,input,setInput}) => {
  return (
    <View style={{padding:10}}>
      <FlatList data={data} renderItem={({item})=>{
        if(item?.employeeName.toLowerCase().includes(input.toLowerCase())){
          return (
            <View style={{marginVertical:10,gap:10,flexDirection:"row"}}>
            <View style={{width:50,height:50,borderRadius:8,padding:10,backgroundColor:"#4b6cb7",alignItems:"center",justifyContent:"center"}}>
              <Text style={styles.avatarText}>{item?.employeeName?.charAt(0)}</Text>
            </View>
            <View>
              <Text style={styles.nameText}>{item?.employeeName}</Text>
              <Text style={styles.designationText}>{item?.designation} ({item?.employeeId})</Text>
            </View>
          </View>
          )
        }
      }}/>
    </View>
  )
}

export default SearchResult

const styles = StyleSheet.create({
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  designationText: {
    color: '#555',
    fontSize: 14,
  },
})