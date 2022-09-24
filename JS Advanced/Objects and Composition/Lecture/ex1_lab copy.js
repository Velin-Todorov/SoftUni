function cityTaxes(name, population, treasury){
    const obj = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes(){
            Math.floor(this.treasury += this.population * this.taxRate)
        },
        applyGrowth(percentage){
            Math.floor(this.population *= (1 + (percentage / 100))) 
        },
        applyRecession(percentage){
            Math.floor(this.treasury *= (1- (percentage / 100)))
        },

    };

    return obj;
}