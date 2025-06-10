export interface Province {
   id?: number
   nombre: string
}

export interface Locality {
   id?: number
   nombre: string
   provincia: Province
}