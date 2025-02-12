import { render, screen } from "@testing-library/react-native";

import CowboyHat from "@/app/cowboyhat";

import BeanieStore from "@/app/index";

describe("CowyboyHat has expected components", () => {
  it("renders a question", () => {
    render(<CowboyHat/>);
  });

  it('renders beaniestore with a blue beanie', () => {
    render(<BeanieStore numberOfSocks= {3} beanieBank={[{color: 'Blue', hank: 'Green'}]}/>)
    screen.getByText('My Blue Beanie by Green')
  })

  it('renders beaniestore with a blue beanie', () => {
    render(<BeanieStore numberOfSocks= {3} beanieBank={[{color: 'Green', hank: 'Green'}]}/>)
    screen.getByText('My Green Beanie by Green')
  })

});