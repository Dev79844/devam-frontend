import React from 'react'
import PhoneForm from '../../components/admin/ProductForm'
import Navbar from '../../components/admin/Navbar'
import MainNav from '../../components/admin/MainNav';


const AddDevice = () => {

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
            <div>
                    <MainNav />
                    <div className="w-full p-4 ">
                        <PhoneForm />
                    </div>
            </div>
        {/* )} */}
    </>
  )
}

export default AddDevice