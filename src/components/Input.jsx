import React from 'react'

function Input({ type, name, placeholder, onChange, value }) {
  return (
    <>
      <input
        type={type}
        className="px-4 py-2 mb-2 text-lg w-[100%] text-white bg-slate-900 rounded-xl"
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
        required
      />
    </>
  )
}

export default Input
