export interface IEvent {
    slug: string
    title: string
    description: string
    date: string
    done?: boolean
    expositorsCollection?: { items: IPerson[] }
}

export interface IPerson {
    slug?: string
    name: string
    photo?: IAsset
}

export interface IAsset {
    url: string
    width: number
    height: number
}

export interface ISection {
    title: string
    description: string
    cta: string
}