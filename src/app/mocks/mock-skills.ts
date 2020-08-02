import { Skill, SkillType, SkillEntry } from '../interfaces/skill';

export const SKILLS: Skill[] = [
    {type: SkillType.LANGUAGE,
        entries: [ 
            {name: 'Java', level: 80},
            {name: 'JavaScript', level: 50},
            {name: 'TypeScript', level: 30}
        ]
    },
    {type: SkillType.FRAMEWORK,
        entries: [ 
            {name: 'Spring Framework', level: 80},
            {name: 'SAP Commerce (SAP Hybris commerce)', level: 80},
            {name: 'Spring Boot', level: 50},
            {name: 'Angular', level: 20}
        ]
    },
    {type: SkillType.SEARCH,
        entries: [
            {name: 'Solr', level: 60},
            {name: 'ElasticSearch', level: 50},
        ]
    },
    {type: SkillType.WEB_DEV,
        entries: [ 
            {name: 'HTML', level: 0},
            {name: 'CSS', level: 0},
            {name: 'LESS', level: 0},
            {name: 'JSTL', level: 0},
            {name: 'jQuery', level: 0}
        ]
    },
    {type: SkillType.DB,
        entries: [ 
            {name: 'mySQL', level: 0},
            {name: 'HSQL', level: 0},
            {name: 'Oracle', level: 0}
        ]
    },
    {type: SkillType.BUILD_TOOLS, 
        entries: [
            {name: 'Ant', level: 0},
            {name: 'Maven', level: 0},
            {name: 'Gradle', level: 0}
        ]
    },
    {type: SkillType.METHODOLOGY,
        entries: [
            {name: 'Agile', level: 0},
            {name: 'SAFe', level: 0},
            {name: 'TDD', level: 0}
        ]
    },
    {type: SkillType.CONT_INT, 
        entries: [
            {name: 'Jira', level: 0},
            {name: 'Sonar', level: 0},
            {name: 'Confluence', level: 0},
            {name: 'Jenkins', level: 0}
        ]
    }
];
