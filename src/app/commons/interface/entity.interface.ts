export interface Ministery {
  id: string
  name: string
  fullName: string
  abbreviation: string
  color: string
  brandGov: string
  brandMinistry: string
  brandMinistryFull: string
  data: Data
  redes: Redes
  headquarters: Headquarter[]
  legal: Legal
}

export interface Data {
  address: string
  zip: string
  phone: string
  freeLine: string
  time: string
  anticorrup: string
  emailInsti: string
  emailCorres: string
}

export interface Redes {
  facebook: Facebook
  x: X
  instagram: Instagram
}

export interface Facebook {
  path: string
  user: string
}

export interface X {
  path: string
  user: string
}

export interface Instagram {
  path: string
  user: string
}

export interface Headquarter {
  name: string
  address: string
  phone: string
  emailInsti: string
  time: string
}

export interface Legal {
  policies: string
  sitemaps: string
  terms: string
  acces: string
}
