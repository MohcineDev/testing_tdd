import { render, screen } from '@testing-library/react'
import { Skills } from './skills'

//find multiple elemnts in a component
describe('Skills', () => {
    const skills = ['html', 'css', 'js']

    test('renders correctly', () => {
        render(<Skills skills={skills} />)
        const listElement = screen.getByRole('list')
        expect(listElement).toBeInTheDocument()
    })


    test('renders a list of skills', () => {
        render(<Skills skills={skills} />)
        const listItemElements = screen.getAllByRole('listitem')
        expect(listItemElements).toHaveLength(skills.length)
    })


    test('renders login btn', () => {
        render(<Skills skills={skills} />)
        const loginButton = screen.getByRole('button', {
            name: 'Login'
        })
        expect(loginButton).toBeInTheDocument()
    })

    ///not rendered in the DOM using queryByRole --> instead of getByRole (throw an error)
    //insure an element is not present in the DOM
    test('start learning btn is not rendered', () => {
        render(<Skills skills={skills} />)
        const startLearningBtn = screen.queryByRole('button', { name: /start learning/i })
        expect(startLearningBtn).not.toBeInTheDocument()
    })


    ///find by has a default timeout delay of 1000ms
    test('start learning btn is eventually displayed', async () => {
        render(<Skills skills={skills} />)
        const startLearningBtn = await screen.findByRole('button', {
            name: /start learning/i
        }, {
            timeout: 2000
        })
        expect(startLearningBtn).toBeInTheDocument()
    })
})