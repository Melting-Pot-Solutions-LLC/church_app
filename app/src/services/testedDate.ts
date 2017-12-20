export class TestedDateService {
    date: Date;
    numberOfDaysElapse: number;


    setTestedDate(newDate: Date)
    {
        this.date = newDate;
    }

    setNumberOfDaysElapse(n: number)
    {
        this.numberOfDaysElapse = n;
    }

    getTestedDate()
    {
        return this.date;
    }

    getNumberOfDaysElapse(): number
    {
        return this.numberOfDaysElapse;
    }
}
