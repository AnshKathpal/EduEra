import { Box } from '@chakra-ui/react'
import React from 'react'
import * as types from "../Constraints/types"
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getUniversities } from '../redux/University/api'

export const Sidebar = () => {

  const [searchParams,setSearchParams] = useSearchParams();
  const initialCountryValues = searchParams.getAll("country")
  const [countryValues,setCountryValues] = useState<string[]>(initialCountryValues || [])

  const handleCountryValues = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
    setCountryValues(selectedValues);
  }

  useEffect(()=>{
    let params: {country ?: string[]} = {}
    if(countryValues.length) params.country = countryValues;
    setSearchParams(params)
  },[countryValues])


  return (
    <Box>
      <select
       value = {countryValues} onChange={handleCountryValues} 
        >
        <option value=""></option>
        <option value="England">England</option>
        <option value="UK">UK</option>
        <option value="USA">USA</option>
        <option value="India">India</option>
        <option value="Japan">Japan</option>
      </select>
    </Box>
  )
}
