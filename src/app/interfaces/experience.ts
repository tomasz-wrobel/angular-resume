interface Experience {
    startDate: Date;
    finishDate: Date;
    description: string;
}

export interface WorkExperience extends Experience {
    title: string;
    company: string;
}

export interface EducationExperience extends Experience {
    title: string;
    university: string;
    publications: Publication[];
}

interface Publication extends Experience {
    link: string;
    conference: string;
    title: string;
}