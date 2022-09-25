function ConstructionCrew(worker){
    let keys = Object.keys(worker);

    if (worker.dizziness){
        let requiredAmount = 0.1 * Number(worker.weight) * Number(worker.experience);
        worker.levelOfHydrated += requiredAmount;
        worker.dizziness = false;
        return worker;
    }else{
        return worker;
    }
}

console.log(ConstructionCrew({ weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true }))