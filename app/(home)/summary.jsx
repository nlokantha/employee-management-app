import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import moment from "moment";
import axios from "axios";

const Summary = () => {
    const [attendenceData,setAttendenceData] = useState()
    const [currentDate,setCurrentDate] = useState(moment())


    const goToNextMonth = ()=>{
        const nextMonth = moment(currentDate).add(1,"months")
        setCurrentDate(nextMonth)
    }

    const goToPrevMonth = ()=>{
        const prevMonth = moment(currentDate).add(-1,"months")
        setCurrentDate(nextMonth)
    }

    const formatDate = (date)=>{
        return date.format("MMMM, YYYY")
    }

    const getAttendenceReport =async ()=>{
        try{
            const response =await axios.get("http://192.168.202.187:3003/auth/getSummaryAttendence",{
                params:{
                    month:12,
                    year:2024
                }
            })

            setAttendenceData(response.data.data.report)

        }catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        getAttendenceReport()
    },[])

    console.log(attendenceData)

  return (
    <View>
      <Text>Summary</Text>
    </View>
  )
}

export default Summary

const styles = StyleSheet.create({})