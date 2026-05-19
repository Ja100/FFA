## 🔍 Key Difference (One‑liner)
A **controlled component** uses React state as the *single source of truth*, while an **uncontrolled component** stores its value directly in the DOM and is accessed via a **ref**.   [GeeksForGeeks](https://www.geeksforgeeks.org/reactjs/controlled-vs-uncontrolled-components-in-reactjs/)

---

## 🧩 Controlled Components  




**Controlled Components** — React fully manages the input value.

- **State-driven value** — The input’s `value` comes from React state.  
- **Every change triggers `setState`** — You handle updates via `onChange`.  
- **Predictable** — React always knows the current value.  
- **Best for:** validation, dynamic UI, conditional rendering, syncing with other components.  
- **Trade-off:** More boilerplate.

**Example:**
```jsx
function Controlled() {
  const [name, setName] = useState("");
  return (
    <input value={name} onChange={(e) => setName(e.target.value)} />
  );
}
```

---

## 🧩 Uncontrolled Components  




**Uncontrolled Components** — The DOM manages the input value.

- **DOM-driven value** — React does *not* store the value.  
- **Use `ref` to read the value** — Only when needed (e.g., on submit).  
- **Less code** — No state or change handlers required.  
- **Best for:** simple forms, integrating non-React code, performance-sensitive cases.  
- **Trade-off:** Harder to validate or sync with UI.  
- **Less predictable** because React doesn’t track changes.   [GeeksForGeeks](https://www.geeksforgeeks.org/reactjs/controlled-vs-uncontrolled-components-in-reactjs/)

**Example:**
```jsx
function Uncontrolled() {
  const inputRef = useRef();
  return (
    <input ref={inputRef} />
  );
}
```

---

## 📊 Side-by-Side Comparison

| Feature | **Controlled** | **Uncontrolled** |
|--------|---------------------------------------------|------------------------------------------------|
| Source of truth | React state | DOM |
| Access value | `state` | `ref.current.value` |
| Validation | Real-time | On submit / manual |
| Predictability | High | Lower |
| Boilerplate | More | Less |
| Best for | Complex forms, validation | Simple forms, quick setup |

---

## 🧠 When to Choose Which?

### Choose **Controlled** when:
- You need **live validation**  
- You need to **sync** input with other UI  
- You want **predictable state flow**  
- You’re building a **complex form**  

### Choose **Uncontrolled** when:
- You want **minimal code**  
- You only need the value **on submit**  
- You’re integrating with **non-React libraries**  
- Performance matters and you want fewer re-renders  

---