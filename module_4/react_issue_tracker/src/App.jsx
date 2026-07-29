import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import IssueForm from "./components/IssueForm";
import IssueFilter from "./components/IssueFilter";
import IssueList from "./components/IssueList";


function App() {

    const [issues, setIssues] = useState(() => {
        const saved = localStorage.getItem("issues");
        return saved ? JSON.parse(saved) : [];
    });

    const [filter, setFilter] = useState("ALL");


    useEffect(() => {
        localStorage.setItem("issues", JSON.stringify(issues));
    }, [issues]);


    function addIssue(issue) {
        setIssues([...issues, issue]);
    }


    function cycleStatus(id) {

        const order = ["OPEN", "IN_PROGRESS", "RESOLVED"];

        setIssues(
            issues.map((issue) => {
                if (issue.id !== id) return issue;

                const currentIndex = order.indexOf(issue.status);
                const nextIndex = (currentIndex + 1) % order.length;

                return { ...issue, status: order[nextIndex] };
            })
        );
    }


    function deleteIssue(id) {
        setIssues(issues.filter((issue) => issue.id !== id));
    }


    const filteredIssues =
        filter === "ALL"
            ? issues
            : issues.filter((issue) => issue.status === filter);


    return (
      <div className="app">
            <Header issues={issues} />

            <IssueForm addIssue={addIssue} />

            <IssueFilter
                currentFilter={filter}
                setFilter={setFilter}
            />

            <IssueList
                issues={filteredIssues}
                cycleStatus={cycleStatus}
                deleteIssue={deleteIssue}
            />
        </div>
    );
}

export default App;