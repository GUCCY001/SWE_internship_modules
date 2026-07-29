function Header({ issues }) {

    const totalIssues = issues.length;

    const openCount = issues.filter(
        issue => issue.status === "OPEN"
    ).length;

    const resolvedCount = issues.filter(
        issue => issue.status === "RESOLVED"
    ).length;


    return (
        <header className="app-header">
            <h1>🚀 Issue Tracker App</h1>

            <div className="stats">
                <p>Total: <span>{totalIssues}</span></p>
                <p>Open: <span>{openCount}</span></p>
                <p>Resolved: <span>{resolvedCount}</span></p>
            </div>

        </header>
    );
}

export default Header;