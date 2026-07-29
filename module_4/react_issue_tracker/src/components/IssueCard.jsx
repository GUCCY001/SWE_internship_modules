function IssueCard({ issue, cycleStatus, deleteIssue }) {

    const order = ["OPEN", "IN_PROGRESS", "RESOLVED"];
    const currentIndex = order.indexOf(issue.status);

    const priorityColors = {
        HIGH: "#e05252",
        MEDIUM: "#f5a623",
        LOW: "#4fd1c5"
    };

    return (
        <div
            className="issue-card"
            style={{ "--priority-color": priorityColors[issue.priority] }}
        >
            <h3>{issue.title}</h3>
            <p>{issue.description}</p>

            <div className="card-footer">
                <div className="status-track">
                    {order.map((s, i) => (
                        <span
                            key={s}
                            className={`status-dot ${i <= currentIndex ? "filled" : ""}`}
                        />
                    ))}
                    <span className="status-label">{issue.status}</span>
                </div>

                <div className="card-actions">
                    <button onClick={() => cycleStatus(issue.id)}>Next</button>
                    <button className="delete-btn" onClick={() => deleteIssue(issue.id)}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default IssueCard;