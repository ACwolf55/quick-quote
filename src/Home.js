import React from 'react'
import Header from './Header'

const Home = () => {

    const formLink = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    


  return (
    <div>

<Header />

    
<iframe className="airtable-embed" src="https://airtable.com/embed/shrzS2zpB5ANgRHiO?backgroundColor=red" >
</iframe>



<div id='our-forms'>

<h2>TELL US HOW WE CAN HELP YOU:</h2>

<div id='link-box'>

<div className='link-row'>
<div className='link-descrip'>
<p className='descrip'>"Do you have an Emergency? No Problem,<br/> You're in the right place. <br/>This is the quickest way to get our help!<br/> NO EXTRA FEE'S" </p>

</div>
<button onClick={() => formLink('https://airtable.com/shrl3qG3vHipQyF4z')} class='button-link' style={{color:'blue'}}><u>EMERGENCY</u></button>
</div>

<div className='link-row'>
<div className='link-descrip'>
<p className='descrip'>"This form is to provide us with<br/>all the info needed to give you a<br/> QUICK QUOTE for your plumbing need(s)." </p>

</div>
<button onClick={() => formLink('https://airtable.com/shrzS2zpB5ANgRHiO')} class='button-link' style={{color:'blue'}}><u>PLUMBING NON EMERGENCY</u></button>
</div>

<div className='link-row'>
<div className='link-descrip'>
<p className='descrip'>"This form is to provide us with <br/>all the info needed to give you a<br/>QUICK QUOTE for your HVAC need(s)." </p>  

</div>
<button onClick={() => formLink('https://airtable.com/shrqifwbDY23d1nJx')} class='button-link' style={{color:'blue'}}><u>HVAC NON EMERGENCY</u></button>
</div>


</div>

</div>





    </div>
  )
}

export default Home