import Avatar from "@components/Avatar/avatar";
import Button from "../components/Button/button";
import Input from "@components/Input/input";
import './styles.css'

export default function Home() {
  return (
    <div>
      <Input />
      <Button size="small" color="primary">Small Button</Button>
      <Button size="medium" color="secondary">Medium Button</Button>
      <Button size="large" color="primary">Large Button</Button>

      <Avatar size="small" image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <Avatar size="large" image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <Avatar size="medium" image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>


    </div>
  );
}
