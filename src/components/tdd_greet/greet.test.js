
///tdd  ; red-green testing
/*
which is a software development process where we write tests first before writing software code
three phases of TDD :
- writing tests followed by
- writing software code followed by  
- refactoring
 */
// here we created two tests to meet the given requirements 
///greet should render the text hello and if a name is passed into the component
/// it should render hello followed by the name

import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

///Grouping Tests
//also we can use .only and .skip in the describe block ro filter a goup of teest to be run or skipped
describe('greet', () => {

    test('  renders correctly', () => {
        render(<Greet />)
        const textElement = screen.getByText(/hello/i)
        expect(textElement).toBeInTheDocument()
    })


    //Filtering Tests
    ///we can use test.only "it -- becomes --> xit"to run only that test when we work with a file that contains multiple tests
    ///or use test.skip "it --- becomes fit" in this case jest will skip executing that test

    test(' renders with a name', () => {
        render(<Greet name="mohcine" />)
        const textElement = screen.getByText(/hello mohcine/i)
        expect(textElement).toBeInTheDocument()
    })
})

//coverage
///use --watchAll flag to generate coverage for all tests in the project 
/*

help understand how much of the software code is tested
 //   "coverage":"npm test -- --coverage --watchAll --collectCoverageFrom='src/components/  . {js,ts, tsx}'" 
 
 --collectCoverageFrom : specify which files we should or should not collect code coverage from

 
 set coverage threshold using jest configuration in the package.json
 ---> jest will fail if the coverage does not meet the threshold requirement
 */