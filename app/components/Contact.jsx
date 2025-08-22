import Image from 'next/image'
import { assets } from '@/assets/assets'
import React, { useState } from 'react'


const Contact = () => {
  const [result, setResult] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending....')
    const formData = new FormData(event.target)

    formData.append('access_key', 'e141a586-9973-4a5c-8f44-7fb4f5fdab36')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult('Form Submitted Successfully')
      event.target.reset()
    } else {
      console.log('Error', data)
      setResult(data.message)
    }
  }

  return (
    <div
      id="contact"
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <h4 className="text-center mb-2 text-lg">Quedo a tu disposición</h4>
      <h2 className="text-center text-5xl ">Contáctame</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        Si tienes alguna pregunta, consulta o feedback, no dudes en contactarme.
      </p>

      <form className="max-w-2xl mx-auto" onSubmit={onSubmit}>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mb-8">
          <input
            className="flex-1 p-3 otuline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            type="text"
            placeholder="Introduce tu nombre"
            required
						name='name'
          />
          <input
            className="flex-1 p-3 otuline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            type="email"
            placeholder="Introduce tu correo electrónico"
            required
						name='email'
          />
        </div>
        <textarea
          className="resize-none w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
          rows="6"
          placeholder="Introduce tu mensaje"
          required
					name='message'
        ></textarea>

        <button
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer"
          type="submit"
        >
          Enviar
          <Image
            src={assets.right_arrow_white}
            alt="Right Arrow"
            className="w-4"
          />
        </button>

        <p className="mt-4">{result}</p>
      </form>
    </div>
  )
}

export default Contact
