const axios = require('axios')
const Ajax = require('./async')

jest.mock('axios')

describe('Ajax echo', () => {
    
    test('should return  value with promise',  () => {
       return Ajax.echo('some data').then(result =>  expect(result).toBe('some data'))
       
    })

    test('should catch value with promise',  () => {
        return Ajax.echo('some data').catch(err => {
            expect(err).toBeInstanceOf(Error)
        })
        
    })
    
    test('should catch async value ', async () => {
        try {
           await Ajax.echo('ddfsdf')
        } catch(e) {
            expect(e.message).toBe('error')
       }
        
     })


    
    
})


describe('Ajax : GET', () => {
    let response
    let todos

    beforeEach(() => {
        todos = [
         {id: 1, title: 'Todo 1', completed: false}
        ]
        
        response = {
            data: {
                todos
            }
        }
    })

    test('should return data from backend', () => {
        axios.get.mockReturnValue(response)

        return Ajax.get().then(data => {
            expect(data.todos).toEqual(todos)
        })
    })
            
})