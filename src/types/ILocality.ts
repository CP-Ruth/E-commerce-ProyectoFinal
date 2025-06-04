export interface Country {
   id?: number
   nombre: string
}

export interface Province {
   id?: number
   nombre: string
   pais?: Country
}

export interface Locality {
   id?: number
   nombre: string
   codigoPostal: number
   provincia: Province
}