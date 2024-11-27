

import './MilestoneStats.css';

function MilestoneStats() {
    const stats = [
        { label: 'Milestone Year', value: '07+' },
        { label: 'Project Close', value: '210' },
        { label: 'Growth Rate', value: '89+' },
        { label: 'Firms Aiding', value: '200+' }
    ];

    return (
        <div className="milestone-stats">
            {stats.map((stat, index) => (
                <div className="stat-item" key={index}>
                    <p className="stat-label">{stat.label}</p>
                    <h2 className="stat-value">{stat.value}</h2>
                </div>
            ))}
        </div>
    );
}

export default MilestoneStats;
