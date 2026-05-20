# React Props & Class Components — Mini Course

## Course Outcome  
By the end,you will use **props** and **class components** to build reusable UI blocks, pass data, and manage component behavior.

---

# Module 1 — Understanding Props

Props are **inputs** to a component — just like function parameters.





### Core Idea  
Props allow **parent → child** data flow.  
They are **read‑only**, meaning a component **cannot modify its own props**.

---

### 1.1 What Props Look Like  
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

<Welcome name="Ashimirwe" />
```

---

### 🧠 1.2 Why Props Matter  
- **Reusability** — one component, many variations  
- **Separation of concerns** — parent owns data, child displays it  
- **Predictability** — data flows one way  

---

### 🛠 1.3 Practical Exercise  
Create a `<UserCard />` component that receives:  
- `name`  
- `role`  
- `avatar`  

```jsx
function UserCard({ name, role, avatar }) {
  return (
    <div className="card">
      <img src={avatar} />
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}
```

---

# Module 2 — Props Patterns





### 2.1 Destructuring Props  
```jsx
function Button({ label, color }) {
  return <button style={{ color }}>{label}</button>;
}
```

---

### 🧩 2.2 Default Props  
```jsx
Button.defaultProps = {
  color: "blue",
};
```

---

### 🧩 2.3 Passing Components as Props  
```jsx
<Modal footer={<Button label="Close" />} />
```

---

### 🧩 2.4 The `children` Prop  
```jsx
<Card>
  <p>This is inside the card</p>
</Card>
```

---

#  Module 3 — Class Components





Class components were the original way to manage **state** and **lifecycle** before hooks.

---

###  3.1 Basic Structure  
```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

---

### 3.2 Using Props in Class Components  
```jsx
class User extends React.Component {
  render() {
    const { name, age } = this.props;
    return <p>{name} is {age} years old</p>;
  }
}
```

---

###  3.3 Adding State  
```jsx
class Counter extends React.Component {
  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}
```

---

#  Module 4 — Lifecycle Methods

### Key Lifecycle Stages  
- **componentDidMount** — runs once after render  
- **componentDidUpdate** — runs after state/prop change  
- **componentWillUnmount** — cleanup  

---

### Example  
```jsx
class Timer extends React.Component {
  componentDidMount() {
    console.log("Timer started");
  }

  componentWillUnmount() {
    console.log("Timer stopped");
  }

  render() {
    return <p>Running...</p>;
  }
}
```

---

# Module 5 — Props + Class Components Together

### Example: Parent → Child  
```jsx
class Profile extends React.Component {
  render() {
    return <User name="Ashimirwe" age={26} />;
  }
}
```

---

#  Module 6 — Hands‑On Project  
Build a **User Dashboard** with:  
- A parent `<Dashboard />`  
- Child components: `<UserCard />`, `<Stats />`, `<ActivityList />`  
- Props passed from parent to children  
- One class component managing state (e.g., notifications)

---

#  Module 7 — Assessment  
Learners must:  
- Explain props  
- Build a class component  
- Pass props to it  
- Use lifecycle methods  
- Build a small UI using both concepts  

---

#  Module 8 — Final Summary  
Props = **data in**  
Class components = **state + lifecycle**  
Together = **powerful, reusable UI architecture**

---