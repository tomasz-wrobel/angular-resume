import { WorkExperience } from '../interfaces/experience';

export const EXPERIENCES: WorkExperience[] = [
    {
        company: 'Tomasz Wrobel Experience under TietoEVRY', 
        title: 'Freelance SAP Commerce Consultant', 
        startDate: new Date('2019-03-01'), 
        finishDate: undefined, 
        description: 'Design and development of software based on Java EE (SAP Hybris Commerce)\
        technology with use of the Spring framework.\
        Creation of technical documentation,\
        for internal and external use. Design and development of integrations\
        with external systems in complex architectures. Co-ordination of work,\
        coaching and supporting the team. Deep understanding of customer business processes.\
        Working with analysts and architects on the specification of project assumptions.'
    },
    {
        company: 'SAP Labs Poland', 
        title: 'Development Consultant', 
        startDate: new Date('2016-09-01'), 
        finishDate: new Date('2019-02-01'), 
        description: 'Design and development of software based on Java EE (SAP Hybris Commerce)\
        technology with use of the Spring framework.\
        Creation of technical documentation,\
        for internal and external use. Design and development of integrations\
        with external systems in complex architectures. Co-ordination of work,\
        coaching and supporting the team. Deep understanding of customer business processes.\
        Working with analysts and architects on the specification of project assumptions.'
    },
    {
        company: 'SAP Customer Data Cloud', 
        title: 'Technical Consultant', 
        startDate: new Date('2018-09-01'), 
        finishDate: new Date('2019-02-01'), 
        description: 'Determination of the technical strategy for implementation of Customer Data Cloud\
        product. Design of technical architecture and creation of technical design document.\
        Mentoring and consulting for the clients.'
    },
    {
        company: 'Bombardier Transportation (ZWUS) Polska Sp. z o.o.', 
        title: 'Android Developer (Internship)', 
        startDate: new Date('2014-09-01'), 
        finishDate: new Date('2014-07-01'), 
        description: 'Development of Android application that allowed monitoring and managing the\
        railway system and all its devices.'
    }
]