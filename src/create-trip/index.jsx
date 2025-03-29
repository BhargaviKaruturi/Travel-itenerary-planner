import React from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import TextInput from '../components/Input'
import { SelectBudgetOptions } from '../constants/options'
import { SelectTravelersList } from '../constants/options'
import Button from '../components/button'

function CreateTrip() {

  //const [formData,setFormData]=useState([]);

  // const handleInputChange=(name,value)=>{
  //   setFormData({
  //     ...formField,
  //     [name]:value
  //   })
  // }
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>Tell us your travel preferences🏕️🌴</h2>
      <p>Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.</p>
      <div>
        <div className='mt-20 flex flex-col gap-10'>
          <h2 className='text-xl my-3 font-medium'>What is destination of choice?</h2>
          <GooglePlacesAutocomplete
               apikey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY} 
              //  selecrProps={{
              //     place,
              //     onChange: (v) => {setPlace(v); handleInputChange('location',v)}
              //  }}
            /> 
        </div>
      </div>
      <div>
        <h2 className='text-xl my-3 font-medium'>How many days are you planning your trip?</h2>
        <TextInput />
      </div>
      <div>
        <h2 className='text-xl my-3 font-medium'>What is your Budget?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
          {SelectBudgetOptions.map((item, index) => (
            <div key={index} className='p-4 border cursor-pointer rounded-lg hover:shadow-lg'>
              <h2 className='text-4xl'>{item.icon}</h2>
              <h2 className='font-bold text-lg'>{item.title}</h2>
              <h2 className='text-sm text-gray-500'>{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>
    
      <div>
        <h2 className='text-xl my-3 font-medium'>Whom do you plan on travelling with on your next adventure?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
          {SelectTravelersList.map((item, index) => (
            <div key={index} className='p-4 border cursor-pointer rounded-lg hover:shadow-lg'>
              <h2 className='text-4xl'>{item.icon}</h2>
              <h2 className='font-bold text-lg'>{item.title}</h2>
              <h2 className='text-sm text-gray-500'>{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>
    <div className='my-10 justify-end flex'>
      <Button >Generate Trip</Button>
    </div>
    
    </div>
  )
}
export default CreateTrip