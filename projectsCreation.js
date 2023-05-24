function projectsCreation(input) {
   
    let nameA = input[0];
    let projectsCount = Number(input[1])
    let neededHours = projectsCount * 3
    
    
    console.log(`The architect ${nameA} will need ${neededHours} hours to complete ${projectsCount} project/s.`)

}

projectsCreation(["Sanya ",
"9 "]
)