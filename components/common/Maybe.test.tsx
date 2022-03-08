import { render, screen } from "@testing-library/react";
import Maybe from "./Maybe";

describe("<Maybe>", () => {
  const children = <div data-testid="children">success</div>;

  it("조건이 참인 경우", () => {
    render(<Maybe test={true}>{children}</Maybe>);
    expect(screen.getByTestId("children")).toHaveTextContent("success");
  });

  it("조건이 거짓인 경우", () => {
    const { container } = render(<Maybe test={false}>{children}</Maybe>);

    expect(container).toBeEmptyDOMElement();
  });
});
