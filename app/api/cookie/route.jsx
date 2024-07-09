import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"




export const POST = async(req,res) => {

    const formData = await req.formData()

    const JWT = formData.get('JWT')
    console.log(JWT)
    cookies().set("JWT",JWT , {secure:true , httpOnly:true ,})


    
    return NextResponse.json("Good")


}
export const DELETE = async(req,res) => {
    const logout = cookies().delete("JWT") 

    if(cookies().get("JWT").value){
                return NextResponse.json({logouted:false})
    }else{

        return NextResponse.json({logouted:true})


    }





}