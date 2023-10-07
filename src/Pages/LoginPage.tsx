import React, { useState } from "react";
import {
  Container,
  FormContainer,
  Heading,
  Input,
  Button,
  ErrorText,
} from "../Styles/LoginStyles";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://6453b750e9ac46cedf2d995b.mockapi.io/api/bikes/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Logged in successfully:", data);
        setLoggedIn(true);
        setError("");
        window.location.href = "/";
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError("An error occurred during login");
    }
  };

  return (
    <Container>
      <FormContainer>
        <Heading>Login</Heading>
        {error && <ErrorText>{error}</ErrorText>}
        {loggedIn && <p>You are logged in!</p>}
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default LoginPage;
