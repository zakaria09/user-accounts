export interface Permission {
    userId: number,
    schemeId: number,
    dateCreated: Date,
    expiryDate?: Date,
    linked: string
}