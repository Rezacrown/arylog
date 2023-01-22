/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import Card from './Card'
import Contact_section from './Contact_section'

export default function Main () {
  return (
    <section>
      <div className='bg-gray-700 h-max pb-20'>
        <div className='pt-16 px-6'>
          {/* card */}
          <div className='pb-20'>
            <Card
              judul={'siap bekerja'}
              deskripsi={'siap bekerja dimana saja'}
              icon={require('../assets/icon/iconbussines.png')}
            />

            <Card
              judul={'profesional and specialist'}
              deskripsi={'verified and have many experience'}
              icon={require('../assets/icon/checkmark.png')}
            />

            <Card
              judul={'work anytime'}
              deskripsi={'ready to work 24 hours for client'}
              icon={require('../assets/icon/24hour.png')}
            />
          </div>
          {/* card end */}

          {/* contact */}
          <Contact_section />
          {/* contact end*/}
        </div>
      </div>
    </section>
  )
}
