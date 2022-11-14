import MyLi from "components/atoms/MyLi";

export default function MainContent(props) {
  return (
    <div className="container">
      <h1>{props.title}</h1>
      <ul>
        <MyLi text="Was first released in 2013" />
        <MyLi text="Was originally created by Jordan Walke" />
        <MyLi text="Has well over 100k stars on Github" />
        <MyLi text="Is maintained by Facebook" />
        <MyLi text="Powers thousands of enterprise apps, including mobile apps" />
      </ul>
    </div>
  );
}
