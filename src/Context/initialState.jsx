import React from 'react'
import fetchData from '../Utils/setLocalStorageData'

const userInfo = fetchData()

const initialState = {
    user:userInfo,
    }

export default initialState;