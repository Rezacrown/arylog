import React from 'react';
import Card from './Card';



export default function Main() {
  return (
    <section>
      <div className="bg-orange-400 h-max pb-20">
        <div className="pt-16 px-6">

          <Card judul={'siap bekerja'} 
          deskripsi={'siap bekerja dimana saja'} icon={'FaNetworkWired'} />
          
          

        </div>
      </div>
    </section>
    
  )
}