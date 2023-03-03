import React,{useState,useEffect} from 'react'
import Header from './Header'
import {useParams} from 'react-router-dom'
import axios from 'axios'


const Profile = () => {

  const {organization} = useParams()
  const [name,setName] = useState()

    const [note,setNote] = useState('')
  


  useEffect(()=>{
    axios.get(`/getCard/${organization}`).then((res)=>{
      console.log(res.data)
        // console.log(res.data)
        // setWebURL(res.data.webURL)
        // setCity(res.data.city)
        // setAddress(res.data.address)
        // setState(res.data.state)
        // setEmail(res.data.email)
        // setZip(res.data.zip)
        setNote(res.data.note)
        // setEmail(res.data.email)
        // setCellPhone(res.data.cellPhone)
        // setWorkPhone(res.data.workPhone)
        setName(res.data.organization)
    })

},[])


  return (
    <div>
{  !name
?
  <p>loading</p>
:
<div className='Profile'>
  <Header />
  <h1><u>{name}</u></h1>
  <h2>{note}</h2>
<iframe className='airtable-embed' src="https://airtable.com/embed/shrLSDXOKOVHPUKpo?backgroundColor=purple" ></iframe>
</div>
}
    </div>
  )
}

export default Profile