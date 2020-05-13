// import Engine from '../components/utils/Engine';
import {getNumberOfWorkingDays, getMinutesDifference, timeConvert} from '../components/utils/Engine';

const oldCommuteDepartDuration = 45;
const oldCommuteReturnDuration = 35;
const oldMorningPrepDuration = 20;
const newMorningPrepDuration = 15;


describe('Engine', () => {
    describe('when given the different durations of commuting and prepping', () => {
      it('calculates the difference correctly', () => {
          expect(getMinutesDifference(oldCommuteDepartDuration, oldCommuteReturnDuration, 
            oldMorningPrepDuration, newMorningPrepDuration)).toBe(85);
      });
    });

    describe('when given two different dates', () => {
        it('calculates the number of working days in between', () => {
            const firstDate = new Date(2020, 2, 23);
            const secondDate = new Date(2020, 2, 29);
            const daysTheyDontCommute = ["Saturday", "Sunday", "Bank Holidays"];

            expect(getNumberOfWorkingDays(firstDate, secondDate,
                 daysTheyDontCommute)).toBe(5);
        });
      });

      describe('when given the total minutes saved by the user', () => {
        it('prints it in hours and minutes', () => {
            expect(timeConvert(100)).toBe("1 hour(s) and 40 minute(s)");
        });
      });
  });
