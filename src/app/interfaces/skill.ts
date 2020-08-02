export interface Skill {
    type: SkillType;
    entries: SkillEntry[];
}

export interface SkillEntry {
    name: string;
    level: number;
}

export enum SkillType {
    LANGUAGE = "Languages",
    FRAMEWORK = "Frameworks",
    WEB_DEV = "Web development",
    DB = "Databases",
    BUILD_TOOLS = "Build tools",
    METHODOLOGY = "Development methodologies",
    CONT_INT = "Continuous integration"
}