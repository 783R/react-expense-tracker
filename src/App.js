import Expenses from "./components/Expense/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Groceries",
      amount: 75.36,
      date: new Date(2023, 8, 5),
    },
    {
      id: "e2",
      title: "Internet Bill",
      amount: 89.99,
      date: new Date(2023, 8, 10),
    },
    {
      id: "e3",
      title: "Dinner Out",
      amount: 45.75,
      date: new Date(2023, 8, 18),
    },
    {
      id: "e4",
      title: "Gasoline",
      amount: 40.2,
      date: new Date(2023, 8, 22),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
