export interface DinoTable{
    id: number, 
    species: string, 
    weight: number,
    caregiver: string,
    screened: boolean, 
}

export type Dinos = DinoTable[]

