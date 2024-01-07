import { render, screen } from "@testing-library/react"
import { Application } from "./application"

describe('Application', () => {
    test('renders correctly', () => {
        render(<Application />)

        const pageHeading = screen.getByRole('heading', {
            level: 1
        })
        expect(pageHeading).toBeInTheDocument()

        const sectionHeading = screen.getByRole('heading', {
            level: 2
        })
        expect(sectionHeading).toBeInTheDocument()

////find the paragaphe with text using regex
        const paragraphElement = screen.getByText(/^All/)
        expect(paragraphElement).toBeInTheDocument()

        const closeElement = screen.getByTitle('close')
        expect(closeElement).toBeInTheDocument()
        //- found an image with alt text
        const imageElement = screen.getByAltText('a person with a laptop')
        expect(imageElement).toBeInTheDocument()


        ///- using test id
        const divElement = screen.getByTestId('custom-element')
        expect(divElement).toBeInTheDocument()

        const nameElement = screen.getByRole('textbox', {
            name: "Name"
        })
        expect(nameElement).toBeInTheDocument()
        /*
        the name option may be - the  label of a form element
        -the text content of a button
        -the value of the aria-label attribute  
        */
        ///there is two elements with the text:  Name , so we need to  spicify the selecor
        const nameElement2 = screen.getByLabelText('Name', {
            selector: 'input'
        })
        expect(nameElement2).toBeInTheDocument()

        const nameElement3 = screen.getByPlaceholderText('fullName')
        expect(nameElement3).toBeInTheDocument()

        const nameElement4 = screen.getByDisplayValue('mohcine')
        expect(nameElement4).toBeInTheDocument()


        ///--
        const bioElement = screen.getByRole('textbox', {
            name: "Bio"
        })
        expect(bioElement).toBeInTheDocument()


        const jobLocationElement = screen.getByRole('combobox')
        expect(jobLocationElement).toBeInTheDocument()

        const termsElement = screen.getByRole('checkbox')
        expect(termsElement).toBeInTheDocument()

        const termsElement2 = screen.getByLabelText('I agree to the terms and conditions')
        expect(termsElement2).toBeInTheDocument()

        //--
        const submitBtnElement = screen.getByRole('button')
        expect(submitBtnElement).toBeInTheDocument()
    })

})
