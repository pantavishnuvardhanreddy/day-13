import { fireEvent, render, screen } from "@testing-library/react"
import Parent1 from "./parentToChild"

test('test1', ()=>{
    render(<Parent1/>);
    const child1 = screen.getByTestId("childBtn");
    // console.log(parent1);
    const pTag = screen.getByTestId('message1');
    fireEvent.click(child1);
    expect(pTag).toHaveTextContent("set by Child");
})