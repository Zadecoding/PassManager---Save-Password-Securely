"use client"
import { useRef } from 'react'
import Image from 'next/image'
import Script from 'next/script'
import { useState, useEffect, } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const [passwordArray, setpasswordArray] = useState([])
  const [shownPassword, setshownPassword] = useState(false)
  const [form, setForm] = useState({ site: "", username: "", password: "" })
  const passwordRef = useRef();



// getting passwords from database
const getPasswords = async() => {
  let req = await fetch("http://localhost:3001/")
  let passwords = await req.json()
  console.log(passwords)
  setpasswordArray(passwords)

    
  
}
 

  // when screen loads it checks what is in passwords in localstorage
  useEffect(() => {
    getPasswords();
    let passwords = localStorage.getItem("passwords")

    if (passwords) {
      setpasswordArray(JSON.parse(passwords))
    }
  }, [])
  // this is toggling the show password img
  const showPassword = () => {
    setshownPassword(!shownPassword)

  }

  // this is saving passwords
  const savePassword = async () => {
 
    
    
        setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
      localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
      //  await fetch("http://localhost:3001/", {method: "POST", headers: { "Content-Type": "application/json"}, body: JSON.stringify({...form, id: uuidv4()})})
      
    

  }
  // this is handle change for forms
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // this will copy the desired items
  const copyText = (text) => {
    toast('Copied to clipboard', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",

    });
    navigator.clipboard.writeText(text)
  }
  const Editfun = (id) => {
    console.log("Editing with id", id)
    setForm({...passwordArray.filter(item => item.id === id)[0], id: id})
    setpasswordArray(passwordArray.filter(item => item.id != id))

  }
  const Deletefun = async (id) => {
    toast.error('Successfully Deleted!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      
      });
    console.log("Deleting with id", id)
    setpasswordArray(passwordArray.filter(item => item.id != id))
    localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id != id)))
    // let res = await fetch("http://localhost:3001/", {method: "DELETE", headers: { "Content-Type": "application/json"}, body: JSON.stringify({id})})
  }
  const isBlank =() => {
    form.site === "", form.username === "" , form.password=== ""
  }
  

  return (
    <>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"

      />

      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
      <div className="flex flex-col justify-center w-[80%] space-y-4 bg-violet-100 mx-auto py-5 rounded-2xl ">

        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 mx-auto">
          <Image
            className="dark:invert"
            src="/dash-logo.png"
            alt="Security"
            width={50}
            height={50}
            priority
          />
          <span className="ml-3 text-xl">PassManager</span>
        </a>
        <p className='mx-auto'>Securely Store Your Credentials!</p>
        <form action="" className='flex flex-col justify-center w-[80%] space-y-4 my-5 bg-violet-100 mx-auto py-5 rounded-full '>
          <input
            type="text"
            id="site"
            name="site"
            onChange={handleChange}
            value={form.site}
            required
            placeholder="Enter the Site URL"
            className="border-2 min-w-[50%] p-2 rounded-md mx-auto w-fit"
          />
          <div className="flex space-x-4 justify-center mx-auto max-md:flex-col max-md:items-center gap-5">
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              value={form.username}
              placeholder="Username"
              required
              className="border-2 p-2 rounded-md max-w-[80%] min-w-[50%]"
            />
            <div className='relative flex'>


              <input
                type={shownPassword ? "text" : "password"}
                id="password"
                ref={passwordRef}
                name="password"
                value={form.password}
                onChange={handleChange}

                required
                placeholder="Password"
                className="border-2 p-2 rounded-md max-w-[80%] min-w-[100%] relative"

              />
              <Image
                className="dark:invert absolute right-2 top-[11px] cursor-pointer"
                src={shownPassword ? "/hide.png" : "/show.png"}

                alt="show"
                width={20}
                height={20}
                onClick={showPassword}
                priority
              />

            </div>
          </div>


          <div >
            <Script src='https://cdn.lordicon.com/lordicon.js'
              strategy="afterInteractive" />
            {/* <input type="submit" className='cursor-pointer'/> */}
            <button onClick={savePassword} className='flex justify-center border-2 w-fit mx-auto bg-violet-300 py-1 px-3 rounded-md cursor-pointer gap-1'>

              <lord-icon
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                trigger="hover"
                style={{ width: '25px', height: '25px' }}
              />

              Add Password</button>
          </div>
        </form>

        <div className="passwords flex flex-col items-center">
          <h1 className='bg-violet-50 p-3 w-[80%] mx-auto rounded-xl text-md font-bold'>Your Passwords</h1>
          {passwordArray.length === 0 && <div className='my-3 text-gray-500'>Nothing to show.</div>}
          {passwordArray.length != 0 &&
            <table className="table-auto w-[100%] my-10 flex flex-col gap-5">
              <thead>
                <tr className='flex justify-around'>
                  <th>Website</th>
                  <th>Username</th>
                  <th>Passwords</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {passwordArray.map((item, index) => {
                  return <tr key={index} className='flex justify-around py-3'>
                    <td>
                      <div className='text-start w-40 p-2 rounded-md  cursor-pointer flex gap-5 py-2 justify-around flex-wrap max-md:gap-1 max-md:w-20'>


                        <span>{item.site}</span>
                        <div onClick={() => { copyText(item.site) }}>
                          <lord-icon
                            src="https://cdn.lordicon.com/depeqmsz.json"
                            trigger="hover"
                            style={{ width: '25px', height: '25px' }}>
                          </lord-icon>
                        </div>
                      </div>


                    </td>
                    <td>
                      <div className='text-start w-40 p-2 rounded-md  cursor-pointer flex gap-5 py-2 justify-around flex-wrap max-md:gap-1 max-md:w-20'>


                        <span>{item.username}</span>
                        <div onClick={() => { copyText(item.username) }}>
                          <lord-icon
                            src="https://cdn.lordicon.com/depeqmsz.json"
                            trigger="hover"
                            style={{ width: '25px', height: '25px' }}>
                          </lord-icon>
                        </div>
                      </div>


                    </td>
                    <td>
                      <div className='text-start w-40 p-2 rounded-md  cursor-pointer flex gap-5 py-2 justify-around flex-wrap max-md:gap-1 max-md:w-20'>


                        <span>{item.password}</span>
                        <div onClick={() => { copyText(item.password) }}>
                          <lord-icon
                            src="https://cdn.lordicon.com/depeqmsz.json"
                            trigger="hover"
                            style={{ width: '25px', height: '25px' }}>
                          </lord-icon>
                        </div>
                      </div>


                    </td>
                    <td>
                      <div className=' w-40 p-2 rounded-md  cursor-pointer py-2 flex justify-around flex-wrap max-md:gap-1 max-md:w-20 '>


                        <div onClick={() => { Deletefun(item.id) }}>
                          <Image
                            className="dark:invert"
                            src="/delete.png"
                            alt="Delete"
                            width={23}
                            height={23}
                            priority
                          />
                        </div>
                        <div onClick={() => { Editfun(item.id) }}>
                          <Image
                            className="dark:invert"
                            src="/edit.png"
                            alt="Edit"
                            width={23}
                            height={23}
                            priority
                          />
                        </div>

                      </div>


                    </td>
                  </tr>


                })}


              </tbody>
            </table>
          }
        </div>

      </div>


    </>
  )
}

export default Manager
