import IssueCard from "./IssueCard";

function IssueList({ issues, cycleStatus, deleteIssue }) {

    if (issues.length === 0) {
        return <p className="empty-state">No issues found.</p>;
    }

    return (
        <div className="issue-list">
            {issues.map((issue) => (
                <IssueCard
                    key={issue.id}
                    issue={issue}
                    cycleStatus={cycleStatus}
                    deleteIssue={deleteIssue}
                />
            ))}
        </div>
    );
}

export default IssueList;