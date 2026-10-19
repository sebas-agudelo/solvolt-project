import { IProject } from "./IProjects"
import { IServices } from "./IServices"

export interface IHomeServices {
    homeServices: {
        services: IServices[]
        heading: string
        text: string
        primaryButton: string
        image: string
        usps: string[]
    }
}

export interface IHomeReferensProject {
    referensProject: {
        projects: IProject[]
        heading: string
        text: string
        primaryButton: string
    }
}

