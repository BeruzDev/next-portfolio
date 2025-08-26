import Image from 'next/image'
import { assets } from '@/assets/assets'
import React, { useState } from 'react'
import { motion } from 'motion/react'

const Contact = ({ idDarkMode }) => {
  const [result, setResult] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('Enviando....')
    const formData = new FormData(event.target)

    formData.append('access_key', 'e141a586-9973-4a5c-8f44-7fb4f5fdab36')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult('Formulario enviado con éxito')
      event.target.reset()
    } else {
      console.log('Error', data)
      setResult(data.message)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg"
      >
        Quedo a tu disposición
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl "
      >
        Contáctame
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12"
      >
        Si tienes alguna pregunta, consulta o feedback, no dudes en contactarme.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="max-w-2xl mx-auto"
        onSubmit={onSubmit}
      >
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md [color:var(--color-text)] [placeholder-color:var(--color-hover)]"
            type="text"
            placeholder="Introduce tu nombre"
            required
            name="name"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex-1 p-3 otuline-none border-[0.5px] border-gray-400 rounded-md [color:var(--color-text)] [placeholder-color:var(--color-hover)]"
            type="email"
            placeholder="Introduce tu correo electrónico"
            required
            name="email"
          />
        </div>
        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="resize-none w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md [color:var(--color-text)] [placeholder-color:var(--color-hover)] mb-6"
          rows="6"
          placeholder="Introduce tu mensaje"
          required
          name="message"
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.3 }}
          className="py-3 px-8 w-max flex items-center justify-between gap-2 [background-color:var(--color-dark-button)] text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer"
          type="submit"
        >
          Enviar
          <Image
            src={
              idDarkMode
                ? assets.right_arrow_bold
                : assets.right_arrow_bold_dark
            }
            alt="Right Arrow"
            className="w-4"
          />
        </motion.button>

        <p className="mt-4">{result}</p>
      </motion.form>
    </motion.div>
  )
}

export default Contact
