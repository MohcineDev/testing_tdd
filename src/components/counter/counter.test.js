import { render, screen } from "@testing-library/react"
import { Counter } from "./counter"
import user from '@testing-library/user-event'

describe('counter', () => {
    test('renders correctly', () => {
        render(<Counter />)
        const countElement = screen.getByRole('heading')
        expect(countElement).toBeInTheDocument()

        const increamentBtn = screen.getByRole('button', {
            name: 'Increment'
        })
        expect(increamentBtn).toBeInTheDocument()
    })

    test('renders a count of 0', () => {
        render(<Counter />)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('0')
    })

    //all user event APIs are asynchronouse 
    // click once
    test('renders a count of 1 after clicking the increment button', async () => {
        user.setup()
        render(<Counter />)
        const increamentBtn = screen.getByRole('button', {
            name: 'Increment'
        })
        await user.click(increamentBtn)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('1')
    })
    // click twice
    test('renders a count of 2 after clicking the increment button 2 times', async () => {
        user.setup()
        render(<Counter />)
        const increamentBtn = screen.getByRole('button', {
            name: 'Increment'
        })
        await user.dblClick(increamentBtn)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('2')
    })


    /// keyboard interactions
    test('renders a count of  10 after clicking the set btn', async () => {
        user.setup()
        render(<Counter />)
        //input of type number
        const amountInput = screen.getByRole('spinbutton')
        await user.type(amountInput, '10')
        expect(amountInput).toHaveValue(10)

        const setBtn = screen.getByRole('button', {
            name: /set/i
        })
        await user.click(setBtn)

        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('10')
    })


    ///test if the focus order is right

    test('elements are focused in the right order', async () => {
        user.setup()
        render(<Counter />)
        const amountInput = screen.getByRole('spinbutton')
        const setBtn = screen.getByRole('button', { name: /set/i })
        const increamentBtn = screen.getByRole('button', {   name: 'Increment' })

        await user.tab()
        expect(increamentBtn).toHaveFocus()
         
        await user.tab()
        expect(amountInput).toHaveFocus()
         
        await user.tab()
        expect(setBtn).toHaveFocus()
         
    })
})
