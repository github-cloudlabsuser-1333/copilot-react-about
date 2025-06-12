import { render, screen, fireEvent } from "@testing-library/react";
import WelcomePopup from "./WelcomePopup";

describe("WelcomePopup", () => {
  test("renders welcome message", () => {
    render(<WelcomePopup />);
    expect(screen.getByText(/WELCOME/i)).toBeInTheDocument();
    expect(screen.getByText(/TO/i)).toBeInTheDocument();
    expect(screen.getByText(/The DevSecOps Day 2 Hackathon!/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Get Started/i })).toBeInTheDocument();
  });

  test("closes modal when Get Started is clicked", () => {
    render(<WelcomePopup />);
    const button = screen.getByRole("button", { name: /Get Started/i });
    fireEvent.click(button);
    expect(screen.queryByText(/WELCOME/i)).not.toBeInTheDocument();
  });
});
