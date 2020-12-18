import React, { useState, createContext, useContext, useEffect } from 'react'

const dataContext = createContext()

export default function PetData({ children }) {

	const [petShops, setPetshops] = useState()

	useEffect(async () => {

		const responsePet = await fetch(`http://192.168.0.32:8000/petshops`);
		const dataPet = await responsePet.json();
		setPetshops(dataPet)

	}, [])

	return (
		<dataContext.Provider value={{
			petShops
		}}>
			{children}
		</dataContext.Provider>
	)
}

export function usePet() {
	const petContext = useContext(dataContext)
	if (!petContext) throw new Error("usePet must be used within a dataContext provider");
	const { petShops } = petContext;
	return { petShops }
}