import reactLogo from "../atoms/logo.svg";

export default function TheHeader(props) {
  return (
    <nav>
      <img src={reactLogo} width="40px" alt="React logo" />
      <h2>{props.title}</h2>
      <p>React Course - Project 1</p>
    </nav>
  );
}
