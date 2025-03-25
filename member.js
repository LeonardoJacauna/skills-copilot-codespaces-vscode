function skillsMember() {
    const member = {
        name: '',
        skills: [],
        
        // Adiciona uma nova habilidade
        addSkill(skill) {
            if (!this.skills.includes(skill)) {
                this.skills.push(skill);
                return true;
            }
            return false;
        },
        
        // Remove uma habilidade
        removeSkill(skill) {
            const index = this.skills.indexOf(skill);
            if (index > -1) {
                this.skills.splice(index, 1);
                return true;
            }
            return false;
        },
        
        // Lista todas as habilidades
        listSkills() {
            return this.skills;
        },
        
        // Verifica se possui uma habilidade específica
        hasSkill(skill) {
            return this.skills.includes(skill);
        }
    };
    
    return member;
}