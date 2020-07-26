const { sum, nativeNull } = require('./intro')


// the testing block of sum function
subscribe('Sum function', () => {
    test(' should eturn sum of two values', () => {
    
        expect(sum(1, 3)).toBe(4)
       
       })
       
       test(' should return greater', () => {
           expect(sum(2, 3)).toBeGreaterThan(4)
           expect(sum(2, 3)).toBeGreaterThanOrEqual(5)
       })
       
       
       test('should return  null', () => {
        
       })
})