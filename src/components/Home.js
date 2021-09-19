import React, { useEffect, useState } from 'react'
import '../styles/home.css'
import swal from 'sweetalert'
function Home(props) {
    const{value}=props
    const [ainvi,setAinvi]=useState(true)
//making a data structure of objects and arrays to change valus later 
//could have just used array
    let a=[]
    for (let i=0;i<value;i++){
        let row=[]
        let whole={}
        for(let j=0;j<value ; j++){
            let cell={}
            cell[j]='0'
            row.push(cell)
            cell={}
        }
        whole[i]=row
        a.push(whole)
        whole={}
    }
    //hooks
    const[final,setFinal]=useState(a)
    //to load the values on every key press
    useEffect(()=>{
        document.getElementById('homeConatiner').focus();
        let flag=0
        const dummy=[...final]
        while(flag<2){
            let x= Math.floor( Math.random() * ( value  -0  ) ) + 0;
            let y= Math.floor( Math.random() * ( value  -0  ) ) + 0;  
            dummy.forEach((ele,i)=>{
                ele[i].forEach((e,id)=>{
                    if(i==x && id==y){  
                        if(e[id]!=2){
                            e[id]=2
                            flag+=1
                        }
                    }
               })
           })
           }
        flag=0
        setFinal(dummy)
        },[ainvi])
        //to display game over on filling
    useEffect(()=>{
        let total=0
        final.forEach((ele,i)=>{
            ele[i].forEach((e,id)=>{
                if(e[id]==2){
                    total+=1
                }
            })
        })
        if(total==value*value){
            swal({
                title: "Game Over",
                text: " boxes filled",
                icon: "success",
            })
        }
    },[final])

const checkKey=(ev)=> {
    ev = ev || window.event;
    if (ev.keyCode == '38') {
        const dummy3=[...final]
        let count=0
        while(count<dummy3.length){
            let qqq=0
            dummy3.forEach((ele,i)=>{
                if(ele[i][count][count]==2){
                    qqq+=1
                    }
         })
        if(qqq){ 
            dummy3.forEach((ele,i)=>{
            if(qqq!=0){
                 ele[i][count][count]=2
                 qqq-=1
            }
            else{
                 ele[i][count][count]=0
            }
        })
        }
        count+=1         
        }
        setFinal(dummy3)
        setAinvi(!ainvi)
        // up arrow
    }
    else if (ev.keyCode == '40') {
       // down arrow
        const dummy4=[...final]
        let count=0
        while(count<dummy4.length){
            let qqqq=0
            dummy4.forEach((ele,i)=>{
                if(ele[i][count][count]==2){
                    qqqq+=1
                    }
              })
            if(qqqq){    
                for(let i=dummy4.length-1;i>=0;i--){
                    if(qqqq!=0){
                         dummy4[i][i][count][count]=2
                        qqqq-=1
                    }
                    else{
                        dummy4[i][i][count][count]=0
                    }
                }}
            count+=1
            }
            setFinal(dummy4)
            setAinvi(!ainvi)
       
    }
    else if (ev.keyCode == '37') {
       // left arrow
        const dummy1=[...final]
        dummy1.forEach((ele,i)=>{
        let q=0
        ele[i].forEach((e,id)=>{
            if(e[id]==2){
                q+=1
            }
        })
        if(q){  
            ele[i].forEach((e,id)=>{
                if(q!=0){
                    e[id]=2
                    q-=1
                }
                else{
                    e[id]=0
                }
            })
        }
       })
       setFinal(dummy1)
       setAinvi(!ainvi)
    }
    else if (ev.keyCode == '39') {
       // right arrow
        const dummy2=[...final]
        dummy2.forEach((ele,i)=>{
        let qq=0
        ele[i].forEach((e,id)=>{
            if(e[id]==2){
                qq+=1
            }
        })
        if(qq){  
            for (let h=0;h<ele[i].length;h++){
               if(qq!=0){
                    ele[i][ele[i].length-h-1][ele[i].length-h-1]=2
                    qq-=1
                }
                else{
                    ele[i][ele[i].length-h-1][ele[i].length-h-1]=0
                }
            }
        }
       })
       setFinal(dummy2)
       setAinvi(!ainvi)
    }   
    }
    return (
        <div tabIndex='0'  onKeyDown={(e)=>checkKey(e)} id='homeConatiner'>
            <div>
            {final.map((ele,i)=>{
                return<div className='row'>
                    {
                      ele[i].map((e,id)=>{
                        if(e[id]==0){
                            return<div className='empty'>&nbsp; </div>  
                        }
                        else{
                            return<div className='filled'>2</div>                                                      
                        }
                    })}
                </div>
            })}
            </div>
            <div id='footer '>Instructions: 1. Use arrow keys to move the values<p> 2. If step 1 doesn't work, click on any of the boxes and try step 1 again</p></div>
        </div>
    )
}

export default Home
