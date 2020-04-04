import React from "react";
import "./style.css";

const employees = [
    {
        id: 1,
        image: "",
        name: "Casey",
        phone: "(123)-456-7890",
        email: "casey@casey.com",
        dob: "08/16/1995",
    },
    {
        id: 2,
        image: "",
        name: "Jim",
        phone: "(223)-456-7890",
        email: "jim@jim.com",
        dob: "08/16/1995",
    },
    {
        id: 3,
        image: "",
        name: "Pam",
        phone: "(123)-456-7890",
        email: "pam@pam.com",
        dob: "08/16/1995",
    },
    {
        id: 4,
        image: "",
        name: "Oscar",
        phone: "(123)-456-7890",
        email: "oscar@oscar.com",
        dob: "08/16/1995",
    },
]

class EmployeeTable extends React.Component {
    state = {
        employees: employees,
        sortOrder: "ASC"
    }

    sortbyName = () => {
        let sortedEmployees = this.state.employees.sort(function(a, b) {
            if(b.name > a.name) {
                return -1;
            } 
            if(a.name > b.name) {
                return 1;
            }

            return 0;
        });

        if(this.state.sortOrder === "DESC") {
            sortedEmployees.reverse();
            this.setState({ sortOrder: "ASC" });
        } else {
            this.setState({ sortOrder: "DESC" });
        }

        this.setState({ employees: sortedEmployees });
    }
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name <button onClick={this.sortbyName}>Sort</button></th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.employees.map(person => (
                        <tr key={person.id}>
                            <td>{person.image}</td>
                            <td>{person.name}</td>
                            <td>{person.phone}</td>
                            <td>{person.email}</td>
                            <td>{person.dob}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default EmployeeTable;