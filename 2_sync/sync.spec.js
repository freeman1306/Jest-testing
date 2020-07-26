const Lodash = require('./sync')

describe('Lodash: compact', () => {

    const _ = Lodash

    test('should be defined', () => {
        expect(_.compact).toBeDefined()
        expect(_.compact).not.toBeDefined()
    })


    test('should remove falsy values from array', () => {

        // meet for testing :)
        const array = [false, 42, 0, '', true, null, 'hello']

       // expected result from our meet if would work
        const result = [42, true, 'hello']

        expect(_.compact(array)).toBe(result)
    })
})
