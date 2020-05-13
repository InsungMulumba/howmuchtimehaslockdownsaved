import Engine from '../components/utils/Engine';

const oldCommuteDepartDuration = 45;
const oldCommuteReturnDuration = 35;
const oldMorningPrepDuration = 20;
const newMorningPrepDuration = 15;


describe('Engine', () => {
    describe('when given the different durations of commuting and prepping', () => {
      it('calculates the difference correctly', () => {
          expect(Engine.getMinutesDifference(oldCommuteDepartDuration, oldCommuteReturnDuration, 
            oldMorningPrepDuration, newMorningPrepDuration)).toBe(85);
      });
    });
  });
