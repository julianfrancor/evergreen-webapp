'use client'
import { NextResponse } from 'next/server'

export async function postCreateUser(convertedData: any) {

  console.log("============" + convertedData + "=================")
  console.log(convertedData)
  const res = await fetch('https://evergreen-adm.azurewebsites.net/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(convertedData),
  })

  const data = await res.json()
  console.log(data)

  return NextResponse.json(data)
}