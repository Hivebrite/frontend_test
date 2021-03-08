expect.extend({
    toBeWithinRange(received, floor, ceiling) {
        const pass = received >= floor && received <= ceiling;
        if (pass) {
            return {
                message: () =>
                    `expected ${received} not to be within range ${floor} - ${ceiling}`,
                pass: true,
            };
        } else {
            return {
                message: () =>
                    `expected ${received} to be within range ${floor} - ${ceiling}`,
                pass: false,
            };
        }
    },
});

describe('Test initial map data', () => {
    it('should be valid gps coordinates', () => {
        const coordinates = [37.315116, -101.810234];
        const latitude = coordinates[0];
        const longitude = coordinates[1];

        expect(latitude).toBeWithinRange(-90, 90);
        expect(longitude).toBeWithinRange(-180, 180);
    });

    it('should start in the center of USA', () => {
        const coordinates = [37.315116, -101.810234];
        expect(coordinates).toEqual([37.315116, -101.810234]);
    });

    it('should start with wide zoom', () => {
        const initZoom = 4;
        expect(initZoom).toBeLessThanOrEqual(6);
    });

    it('should check object properties', () => {
        const details = {
            'state': 'Texas',
            'population': '54898',
            'growth 00-13': '91.9%',
        };
        expect(details).toHaveProperty('state');
        expect(details).toHaveProperty('population');
        expect(details).toHaveProperty('growth 00-13');
    });

});