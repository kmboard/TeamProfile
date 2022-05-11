const generateTeam = (team) => {
    const generateManager = (manager) => {
        return `
            <div class="card-body">
            <h3 class="card-title">${manager.name}</h3>
            <h4 class="card-subtitle mb-2 text-muted">ID:${manager.id}</h4>
            <p>
        `   
    }
    return `
    
};


module.exports = generateTeam