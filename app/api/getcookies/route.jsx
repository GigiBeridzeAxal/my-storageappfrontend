import { jwtDecode } from "jwt-decode"
import { cookies } from "next/headers"

import { NextResponse } from "next/server"






export const GET = async(req,res) => {

    if(cookies().get('JWT')){
        return NextResponse.json(jwtDecode(cookies().get('JWT').value))
    }else{
        return NextResponse.json(0)
    }

    
}