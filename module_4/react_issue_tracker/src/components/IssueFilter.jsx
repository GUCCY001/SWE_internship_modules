function IssueFilter({ currentFilter, setFilter }) {

    const filters = ["ALL", "OPEN", "IN_PROGRESS", "RESOLVED"];

    return (
        <div className="issue-filter">
            {filters.map((f) => (
                <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={currentFilter === f ? "active" : ""}
                >
                    {f}
                </button>
            ))}
        </div>
    );
}

export default IssueFilter;