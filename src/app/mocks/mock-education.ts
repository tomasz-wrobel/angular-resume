import { EducationExperience } from '../interfaces/experience'

export const EDUCATION: EducationExperience[] = [
    {
        startDate: new Date('2011-10-01'), 
        finishDate: new Date('2016-06-30'), 
        title: 'Master of Science - Macrocourse on Automatic\
        Control and Robotics, Electronics and Telecommunication, and Computer Science', 
        university: 'at Silesian University of Technology', 
        description: 'The interdisciplinary course Macrocourse, three-in-one, teaches skills in the most desirable\
        engineering disciplines, in the areas of Robotics, Electronics and Information and Communication Technologies.\
        Studies lead in english',
        publications: [
            {
                startDate: new Date('2014-09-26'), 
                finishDate: undefined, 
                title: 'Indoor localization of objects based on RSSI and MEMS sensors', 
                conference: 'IEEE Conference Publications', 
                description: 'ISCIT2014 Symposium, 24-26 Sept. 2014 , Incheon, South Korea\
                Grzechca, D.; Bielecki, P.; Wróbel, T., Indoor localization of objects based on RSSI and MEMS sensors (IEEE Conference Publications)',
                link: 'https://ieeexplore.ieee.org/document/7011888'
            },
            {
                startDate: new Date('2014-09-15'), 
                finishDate: undefined, 
                title: 'Indoor Location and Identification of Objects with Video Surveillance System and WiFi Module', 
                conference: 'IEEE Conference Publications', 
                description: 'MSCI2014 Conference, 13-15 Sept. 2014, Varna, Bulgaria\
                Grzechca, D.; Bielecki, P.; Wróbel, T., Indoor Location and Identification of Objects with Video Surveillance System and\
                WiFi Module (IEEE Conference Publications)',
                link: 'https://ieeexplore.ieee.org/document/7046178'
            }
        ]
    }
    

]