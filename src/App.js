import { useEffect, useState } from "react";

const employees = [
  {
    id: 1,
    name: "Tobe",
    experience: 4,
    department: "Accounting",
  },
  {
    id: 2,
    name: "Jolee",
    experience: 13,
    department: "Services",
  },
  {
    id: 3,
    name: "Muhammad",
    experience: 14,
    department: "Training",
  },
  {
    id: 4,
    name: "Hubie",
    experience: 5,
    department: "Sales",
  },
  {
    id: 5,
    name: "Yoshiko",
    experience: 16,
    department: "Services",
  },
  {
    id: 6,
    name: "Beatrix",
    experience: 17,
    department: "Human Resources",
  },
  {
    id: 7,
    name: "Jacob",
    experience: 4,
    department: "Engineering",
  },
  {
    id: 8,
    name: "Koren",
    experience: 4,
    department: "Accounting",
  },
  {
    id: 9,
    name: "Marissa",
    experience: 20,
    department: "Support",
  },
  {
    id: 10,
    name: "Rufe",
    experience: 18,
    department: "Training",
  },
];

function App() {
  const [filteredEmployees, setFilteredEmployees] = useState(employees);
  const [department, setDepartment] = useState("");
  const [experience, setExperience] = useState();

  // Using set to filter unique values
  const departments = Array.from(
    new Set(employees.map((employee) => employee.department))
  );

  useEffect(() => {
    setFilteredEmployees(
      employees.filter((employee) => {
        return (
          (!department || department === employee.department) &&
          (!experience ||
            (experience === "LESS_THAN_10"
              ? employee.experience < 10
              : employee.experience >= 10))
        );
      })
    );
  }, [department, experience]);

  const clearFilters = () => {
    setDepartment("");
    setExperience();
  };

  return (
    <div className="App">
      <select onChange={(e) => setDepartment(e.target.value)}>
        <option value="" disabled>
          Select department
        </option>

        {departments.map((department) => {
          return <option key={department}>{department}</option>;
        })}
      </select>
      <div className="experience_filter">
        <button
          className={`${experience === "LESS_THAN_10" ? "selected" : ""}`}
          onClick={() => setExperience("LESS_THAN_10")}
        >
          Less than 10 years
        </button>
        <button
          className={`${experience === "10_PLUS" ? "selected" : ""}`}
          onClick={() => setExperience("10_PLUS")}
        >
          10+ years
        </button>
      </div>
      <button onClick={clearFilters}>Clear All filters</button>
      <ul>
        {filteredEmployees.map((employee) => {
          const { name, experience, department, id } = employee;
          return (
            <li key={id}>
              <div>
                Name: <strong>{name}</strong>
              </div>
              <div>Experience: {experience} year(s)</div>
              <div>Department: {department}</div>
            </li>
          );
        })}
        {filteredEmployees.length === 0 && (
          <div>No employees matching the filter</div>
        )}
      </ul>
    </div>
  );
}

export default App;
