export interface Medecin {
  nom: string,
  prenom: string,
  age: number,
  grade: string,
  photo: string

}
export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}
export interface Provider {
  id?: number,
  name: string,
  address: string,
  email: string
}
