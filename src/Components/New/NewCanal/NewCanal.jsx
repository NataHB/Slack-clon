// import React from 'react'
// import { useState } from 'react'

// export const NewCanal = ( { handleAddCanal }) => {

//     const [name, setName] = useState('')

//     const handleChange = (e) => {
//         setName(e.target.value)
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         if (name.trim()) {
//             handleAddCanal(name)
//             setName('')
//         }
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 value={name}
//                 onChange={handleChange}
//                 placeholder="New Canal"
//             />
//             <button type="submit">Add Canal</button>
//         </form>
//     )
// }

// export default NewCanal